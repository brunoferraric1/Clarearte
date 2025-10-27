import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { PortableText } from '@/components/sanity/portable-text'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, allPostSlugsQuery, relatedPostsQuery } from '@/sanity/lib/queries'
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

interface RelatedPost {
  _id: string
  contentId: string
  slug: string
  title: string
  excerpt: string
  mainImage: any
  author: string
  publishedAt: string
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

  // Fetch related posts (other blog posts excluding current one)
  const relatedPosts: RelatedPost[] = await client.fetch(relatedPostsQuery, {
    lang,
    currentId: post._id,
  })

  const backText = {
    pt: '← Voltar ao blog',
    es: '← Volver al blog',
    en: '← Back to blog',
  }

  const relatedPostsText = {
    pt: 'Você também pode gostar',
    es: 'También te puede interesar',
    en: 'You may also like',
  }

  const readMoreText = {
    pt: 'Ler mais →',
    es: 'Leer más →',
    en: 'Read more →',
  }

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />

      {/* Blog Header Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24">
          {/* Back Button */}
          <Link
            href={`/${lang}/blog`}
            className="inline-block text-body text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {backText[lang as keyof typeof backText]}
          </Link>

          {/* Title */}
          <h1 className="text-display-1 font-serif text-foreground mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-title-3 text-foreground/80 mb-6 max-w-3xl">
              {post.excerpt}
            </p>
          )}

          {/* Author and Date */}
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
      </section>

      {/* Main Image */}
      {post.mainImage && (
        <section className="bg-background pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={urlForImage(post.mainImage).width(1600).url()}
                alt={post.mainImage.alt?.[lang] || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <PortableText value={post.content} />

          {/* Back Button at Bottom */}
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

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/20 border-t border-muted">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-title-2 font-display font-bold text-foreground mb-12 md:mb-16">
              {relatedPostsText[lang as keyof typeof relatedPostsText]}
            </h2>
            
            <div className="grid gap-12 md:gap-16">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost._id}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center group"
                >
                  {/* Image */}
                  <Link
                    href={`/${lang}/blog/${relatedPost.slug}`}
                    className="block overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      {relatedPost.mainImage && (
                        <Image
                          src={urlForImage(relatedPost.mainImage).width(800).url()}
                          alt={relatedPost.mainImage.alt?.[lang] || relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-body-sm text-muted-foreground">
                      <span>{relatedPost.author}</span>
                      <span>•</span>
                      <time dateTime={relatedPost.publishedAt}>
                        {format(
                          new Date(relatedPost.publishedAt),
                          'dd MMMM, yyyy',
                          {
                            locale: locales[lang as keyof typeof locales],
                          }
                        )}
                      </time>
                    </div>

                    <Link href={`/${lang}/blog/${relatedPost.slug}`}>
                      <h3 className="text-title-1 font-serif group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>

                    {relatedPost.excerpt && (
                      <p className="text-body-lg text-foreground/80">
                        {relatedPost.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/${lang}/blog/${relatedPost.slug}`}
                      className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {readMoreText[lang as keyof typeof readMoreText]}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
