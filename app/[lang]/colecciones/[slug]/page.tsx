import { Navbar } from '@/components/navbar'
import { ContactFormSection } from '../../contacto/contact-form-section'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CollectionDetailClient } from './collection-detail-client'
import { client } from '@/sanity/lib/client'
import {
  collectionBySlugQuery,
  allCollectionSlugsQuery,
} from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Generate static params for all collection slugs
export async function generateStaticParams() {
  const collectionsData = await client.fetch(allCollectionSlugsQuery)

  const params: { lang: string; slug: string }[] = []

  collectionsData.forEach((collection: any) => {
    if (collection.slugs) {
      const langs = ['pt', 'es', 'en'] as const
      langs.forEach((lang) => {
        const slug = collection.slugs[lang]
        if (slug) {
          params.push({ lang, slug })
        }
      })
    }
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

  const collection = await client.fetch(collectionBySlugQuery, {
    slug,
    lang,
  })

  if (!collection) {
    return {
      title: 'Collection Not Found | ClareArte',
      description: 'The requested collection could not be found.',
    }
  }

  const title = collection.seo?.metaTitle || `${collection.title} | ClareArte`
  const description =
    collection.seo?.metaDescription ||
    collection.description ||
    `Discover the ${collection.title} collection by ClareArte`

  const ogImage = collection.seo?.ogImage
    ? urlForImage(collection.seo.ogImage).width(1200).height(630).url()
    : collection.heroImage
      ? urlForImage(collection.heroImage).width(1200).height(630).url()
      : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params

  // Fetch collection data
  const collection = await client.fetch(collectionBySlugQuery, {
    slug,
    lang,
  })

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navbar lang={lang} />

      <CollectionDetailClient collection={collection} lang={lang} />

      {/* Contact Form */}
      <ContactFormSection />
    </div>
  )
}
