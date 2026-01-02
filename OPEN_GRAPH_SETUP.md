# Open Graph & Social Media Preview Setup

This document explains the Open Graph metadata implementation for rich link previews on social media platforms.

## ✅ What's Implemented

### 1. Metadata Utility (`src/lib/metadata.ts`)

A comprehensive metadata generator that includes:
- **Open Graph tags** (Facebook, LinkedIn, WhatsApp)
- **Twitter Cards** (summary_large_image)
- **Canonical URLs** (prevents duplicate content)
- **Alternate language links** (hreflang)
- **Locale-specific metadata** (es_ES, pt_PT, en_US)
- **Automatic absolute URL handling**
- **SEO-optimized descriptions** (150-160 chars)

### 2. Page-Specific Metadata

All pages now have proper metadata:

- **Homepage** (`app/[lang]/page.tsx`) - Dynamic per language
- **Blog Posts** (`app/[lang]/blog/[slug]/page.tsx`) - Uses post images
- **Blog Listing** (`app/[lang]/blog/page.tsx`)
- **Collections** (`app/[lang]/colecciones/page.tsx`)
- **Collection Details** (`app/[lang]/colecciones/[slug]/page.tsx`) - Uses collection images
- **Personalized** (`app/[lang]/personalizadas/page.tsx`)
- **Contact** (`app/[lang]/contacto/page.tsx`)
- **About** (`app/[lang]/sobre-mi/page.tsx`)
- **Waiting List** (`app/[lang]/waiting-list/page.tsx`)

### 3. Image Handling

- **Default OG Image**: `/public/assets/og-image.png` (1200x630px)
- **Page-specific images**: Automatically used when available (blog posts, collections)
- **Absolute URLs**: All images use absolute URLs for proper social media crawling
- **Sanity CDN**: Images from Sanity automatically use their CDN URLs

## 🔧 Configuration

### Environment Variable (Optional)

Add to your `.env.local` or deployment environment:

```bash
NEXT_PUBLIC_SITE_URL=https://www.clareartestudio.es
```

If not set, defaults to `https://www.clareartestudio.es`

### Default OG Image

**Location**: `public/assets/og-image.jpg`

**Requirements**:
- Dimensions: 1200x630px
- Format: JPG
- Size: < 200KB (optimized)

See `public/assets/README.md` for design guidelines.

## 📋 Metadata Features

### Open Graph Tags
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Preview image (absolute URL)
- `og:url` - Canonical page URL
- `og:type` - website or article
- `og:locale` - Language locale (es_ES, pt_PT, en_US)
- `og:site_name` - ClareArte

### Twitter Cards
- `twitter:card` - summary_large_image
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Preview image
- `twitter:creator` - @clareartestudio
- `twitter:site` - @clareartestudio

### SEO Tags
- Canonical URLs for each page
- Alternate language links (hreflang)
- x-default locale (Spanish)
- Robots meta tags

## 🧪 Testing

After deployment, test your links:

1. **Facebook/LinkedIn**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **Twitter**: [Card Validator](https://cards-dev.twitter.com/validator)
3. **WhatsApp**: Share a link and check the preview
4. **Google**: [Rich Results Test](https://search.google.com/test/rich-results)

## 📝 Usage Examples

### Static Page
```typescript
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return generatePageMetadata({
    title: 'Page Title',
    description: 'Page description',
    path: 'page-path',
    lang,
  })
}
```

### Blog Post
```typescript
export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const post = await fetchPost(slug, lang)
  
  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    slug,
    lang,
    image: post.mainImage ? urlForImage(post.mainImage).width(1200).height(630).url() : undefined,
    publishedTime: post.publishedAt,
    authors: [post.author],
  })
}
```

### Collection Page
```typescript
return generateCollectionMetadata({
  title: collection.title,
  description: collection.description,
  slug,
  lang,
  image: collection.heroImage ? urlForImage(collection.heroImage).width(1200).height(630).url() : undefined,
})
```

## 🎯 Benefits

1. **Rich Previews**: Links show images, titles, and descriptions
2. **Better CTR**: Attractive previews increase click-through rates
3. **SEO**: Helps search engines understand content
4. **Professional**: Consistent branding across platforms
5. **Multi-language**: Proper locale tags for international SEO

## 🔄 Cache Busting

When updating the default OG image, increment the version query parameter:

```typescript
const defaultOGImage = `${baseUrl}/assets/og-image.jpg?v=2` // Increment version
```

## 📚 Additional Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)
