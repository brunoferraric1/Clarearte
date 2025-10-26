import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { PortableText } from '@/components/sanity/portable-text'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, allPostSlugsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { es, pt, enUS } from 'date-fns/locale'

const locales = {
  pt: pt,
  es: es,
  en: enUS,
}

interface BlogPost {
  _id: string
  contentId: string
  slug: {
    pt: string
    es: string
    en: string
  }
  title: string
  excerpt: string
  content: any[]
  mainImage: any
  author: string
  publishedAt: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

// Generate static params for all blog posts in all languages
export async function generateStaticParams() {
  const posts: { slugs: { pt: string; es: string; en: string } }[] =
    await client.fetch(allPostSlugsQuery)

  const params: { lang: string; slug: string }[] = []

  posts.forEach((post) => {
    if (post.slugs.pt) params.push({ lang: 'pt', slug: post.slugs.pt })
    if (post.slugs.es) params.push({ lang: 'es', slug: post.slugs.es })
    if (post.slugs.en) params.push({ lang: 'en', slug: post.slugs.en })
  })

  return params
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const post: BlogPost | null = await client.fetch(postBySlugQuery, {
    lang,
    slug,
  })

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | ClareArte`,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage
        ? [urlForImage(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params

  const post: BlogPost | null = await client.fetch(postBySlugQuery, {
    lang,
    slug,
  })

  if (!post) {
    notFound()
  }

  const backText = {
    pt: '← Voltar ao blog',
    es: '← Volver al blog',
    en: '← Back to blog',
  }

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />

      {/* Hero Section with Image */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={urlForImage(post.mainImage).width(1920).url()}
            alt={post.mainImage.alt?.[lang] || post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 max-w-4xl pb-12 md:pb-16">
            <h1 className="text-display-1 font-serif text-foreground mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-title-3 text-foreground/80 mb-6">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 text-body text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), 'dd MMMM, yyyy', {
                  locale: locales[lang as keyof typeof locales],
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <PortableText value={post.content} />

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-muted">
            <Link
              href={`/${lang}/blog`}
              className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {backText[lang as keyof typeof backText]}
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
