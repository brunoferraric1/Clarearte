import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { es, pt, enUS } from 'date-fns/locale'

export const metadata: Metadata = {
  title: 'Blog | ClareArte',
  description:
    'Inspiración, consejos y reflexiones sobre el arte de crear invitaciones personalizadas',
}

interface BlogPost {
  _id: string
  contentId: string
  slug: string
  title: string
  excerpt: string
  mainImage: any
  author: string
  publishedAt: string
}

const locales = {
  pt: pt,
  es: es,
  en: enUS,
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  // Fetch blog posts from Sanity
  const posts: BlogPost[] = await client.fetch(postsQuery, { lang })

  const pageContent = {
    pt: {
      title: 'Blog',
      subtitle:
        'Inspiração, conselhos e reflexões sobre a arte de criar convites personalizados',
    },
    es: {
      title: 'Blog',
      subtitle:
        'Inspiración, consejos y reflexiones sobre el arte de crear invitaciones personalizadas',
    },
    en: {
      title: 'Blog',
      subtitle:
        'Inspiration, advice and reflections on the art of creating personalized invitations',
    },
  }

  const content = pageContent[lang as keyof typeof pageContent] || pageContent.es

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <Hero
        title={content.title}
        subtitle=""
        description={content.subtitle}
        noBottomPadding={true}
        compact={true}
      />

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-body-lg text-muted-foreground">
                {lang === 'pt' && 'Nenhum post encontrado.'}
                {lang === 'es' && 'No se encontraron artículos.'}
                {lang === 'en' && 'No posts found.'}
              </p>
            </div>
          ) : (
            <div className="grid gap-12 md:gap-16">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center group"
                >
                  {/* Image */}
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="block overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      {post.mainImage && (
                        <Image
                          src={urlForImage(post.mainImage).width(800).url()}
                          alt={post.mainImage.alt?.[lang] || post.title}
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
                      <span>{post.author}</span>
                      <span>•</span>
                      <time dateTime={post.publishedAt}>
                        {format(
                          new Date(post.publishedAt),
                          'dd MMMM, yyyy',
                          {
                            locale: locales[lang as keyof typeof locales],
                          }
                        )}
                      </time>
                    </div>

                    <Link href={`/${lang}/blog/${post.slug}`}>
                      <h2 className="text-title-1 font-serif group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    {post.excerpt && (
                      <p className="text-body-lg text-foreground/80">
                        {post.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {lang === 'pt' && 'Ler mais →'}
                      {lang === 'es' && 'Leer más →'}
                      {lang === 'en' && 'Read more →'}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
