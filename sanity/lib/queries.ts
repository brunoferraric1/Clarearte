import { groq } from 'next-sanity'

// Fetch all published blog posts by language
export const postsQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    contentId,
    "slug": slug[$lang].current,
    "title": title[$lang],
    "excerpt": excerpt[$lang],
    mainImage,
    author,
    publishedAt
  }
`

// Fetch single blog post by slug and language
export const postBySlugQuery = groq`
  *[_type == "post" && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    contentId,
    "slug": {
      "pt": slug.pt.current,
      "es": slug.es.current,
      "en": slug.en.current,
    },
    "title": title[$lang],
    "excerpt": excerpt[$lang],
    "content": content[$lang],
    mainImage,
    author,
    publishedAt,
    "seo": seo[$lang]
  }
`

// Fetch all slugs for all languages (for generateStaticParams)
export const allPostSlugsQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**"))] {
    "slugs": {
      "pt": slug.pt.current,
      "es": slug.es.current,
      "en": slug.en.current,
    }
  }
`

// Fetch other blog posts (excluding current post) for "related posts"
export const relatedPostsQuery = groq`
  *[_type == "post" && _id != $currentId && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
    _id,
    contentId,
    "slug": slug[$lang].current,
    "title": title[$lang],
    "excerpt": excerpt[$lang],
    mainImage,
    author,
    publishedAt
  }
`

// Fetch all published collections ordered by display order
export const collectionsQuery = groq`
  *[_type == "collection" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    contentId,
    "slug": slug[$lang].current,
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang],
    heroImage,
    gallery,
    "ctaText": ctaText[$lang],
    order,
    publishedAt
  }
`

// Fetch single collection by slug and language
export const collectionBySlugQuery = groq`
  *[_type == "collection" && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    contentId,
    "slug": {
      "pt": slug.pt.current,
      "es": slug.es.current,
      "en": slug.en.current,
    },
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang],
    "content": content[$lang],
    heroImage,
    gallery,
    "ctaText": ctaText[$lang],
    order,
    publishedAt,
    "seo": seo[$lang]
  }
`

// Fetch all collection slugs for all languages (for generateStaticParams)
export const allCollectionSlugsQuery = groq`
  *[_type == "collection" && !(_id in path("drafts.**"))] {
    "slugs": {
      "pt": slug.pt.current,
      "es": slug.es.current,
      "en": slug.en.current,
    }
  }
`
