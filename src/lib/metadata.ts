import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.clareartestudio.es'
const siteName = 'ClareArte'
const defaultOGImage = `${baseUrl}/assets/og-image.png?v=1`

// Locale mapping for Open Graph
const localeMap: Record<string, string> = {
  es: 'es_ES',
  pt: 'pt_PT',
  en: 'en_US',
}

interface MetadataOptions {
  title: string
  description: string
  path?: string
  lang?: string
  image?: string | { url: string; width?: number; height?: number; alt?: string }
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noindex?: boolean
}

/**
 * Generate comprehensive metadata for SEO and social sharing
 * Includes Open Graph, Twitter Cards, and proper locale handling
 */
export function generateMetadata({
  title,
  description,
  path = '',
  lang = 'es',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: MetadataOptions): Metadata {
  // Ensure description is within optimal length (150-160 chars)
  const optimizedDescription =
    description.length > 160 ? `${description.substring(0, 157)}...` : description

  // Build full URL
  const url = `${baseUrl}/${lang}${path ? `/${path}` : ''}`

  // Handle image - can be string URL or object with dimensions
  let ogImageUrl: string
  let ogImageWidth: number = 1200
  let ogImageHeight: number = 630
  let ogImageAlt: string = title

  if (typeof image === 'string') {
    ogImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`
  } else if (image) {
    ogImageUrl = image.url.startsWith('http') ? image.url : `${baseUrl}${image.url}`
    ogImageWidth = image.width || 1200
    ogImageHeight = image.height || 630
    ogImageAlt = image.alt || title
  } else {
    ogImageUrl = defaultOGImage
  }

  // Build alternate locales
  const alternateLocales = ['es', 'pt', 'en']
    .filter((l) => l !== lang)
    .map((l) => ({
      hreflang: l,
      url: `${baseUrl}/${l}${path ? `/${path}` : ''}`,
    }))

  const metadata: Metadata = {
    title: `${title} | ${siteName}`,
    description: optimizedDescription,
    alternates: {
      canonical: url,
      languages: {
        [lang]: url,
        ...Object.fromEntries(
          alternateLocales.map((alt) => [alt.hreflang, alt.url])
        ),
        'x-default': `${baseUrl}/es${path ? `/${path}` : ''}`,
      },
    },
    openGraph: {
      type,
      locale: localeMap[lang] || 'es_ES',
      alternateLocale: alternateLocales.map((alt) => localeMap[alt.hreflang] || alt.hreflang),
      url,
      siteName,
      title,
      description: optimizedDescription,
      images: [
        {
          url: ogImageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && authors.length > 0 && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: optimizedDescription,
      images: [ogImageUrl],
      creator: '@clareartestudio',
      site: '@clareartestudio',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata({
  title,
  description,
  slug,
  lang = 'es',
  image,
  publishedTime,
  modifiedTime,
  authors = ['Paola'],
}: {
  title: string
  description: string
  slug: string
  lang?: string
  image?: string | { url: string; width?: number; height?: number; alt?: string }
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}) {
  return generateMetadata({
    title,
    description,
    path: `blog/${slug}`,
    lang,
    image,
    type: 'article',
    publishedTime,
    modifiedTime,
    authors,
  })
}

/**
 * Generate metadata for collection pages
 */
export function generateCollectionMetadata({
  title,
  description,
  slug,
  lang = 'es',
  image,
}: {
  title: string
  description: string
  slug: string
  lang?: string
  image?: string | { url: string; width?: number; height?: number; alt?: string }
}) {
  return generateMetadata({
    title,
    description,
    path: `colecciones/${slug}`,
    lang,
    image,
    type: 'website',
  })
}

/**
 * Generate metadata for static pages
 */
export function generatePageMetadata({
  title,
  description,
  path,
  lang = 'es',
  image,
}: {
  title: string
  description: string
  path: string
  lang?: string
  image?: string | { url: string; width?: number; height?: number; alt?: string }
}) {
  return generateMetadata({
    title,
    description,
    path,
    lang,
    image,
    type: 'website',
  })
}

