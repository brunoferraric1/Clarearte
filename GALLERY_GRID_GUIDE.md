# Gallery Grid Usage Guide

## Overview
The Gallery Grid system allows you to create and manage multiple galleries in Sanity, each containing a mix of images and videos. You can use different galleries on different pages throughout your site.

## How It Works

### 1. Create a Gallery in Sanity Studio

1. Open Sanity Studio at `http://localhost:3000/studio`
2. Click **"Gallery Grid"** in the sidebar
3. Click **"Create new Gallery Grid"**
4. Fill in the details:
   - **Gallery Title**: Internal name (e.g., "Personalizadas Main Gallery")
   - **Slug**: Unique identifier (e.g., "personalizadas-main")
   - **Description**: Internal note about this gallery
   - **Gallery Items**: Add images and/or videos
   - **Grid Layout**: Choose 2, 3, 4 columns, or Masonry
   - **Gap**: Small, Medium, or Large spacing
   - **Enable Lightbox**: Allow users to click and view larger

### 2. Add Items to Your Gallery

For each item you can:

#### Images:
- Select "Image" as type
- Upload an image
- Add alt text (for accessibility)
- Optional: Add caption
- Optional: Set aspect ratio

#### Videos (YouTube/Vimeo):
- Select "Video" as type
- Paste video URL
- Optional: Upload custom thumbnail (or auto-generated)
- Optional: Set aspect ratio

### 3. Use Gallery on a Page

There are **two ways** to add a gallery to a page:

#### Option A: Fetch by Slug (Recommended)

```typescript
import { GalleryGrid } from '@/components/gallery-grid'
import { client } from '@/sanity/lib/client'
import { galleryBySlugQuery } from '@/sanity/lib/queries'

export default async function MyPage({ params }) {
  const { lang } = await params
  
  // Fetch gallery by slug
  const gallery = await client.fetch(galleryBySlugQuery, {
    slug: 'my-gallery-slug', // Use your gallery's slug
  })

  return (
    <div>
      {/* Your other content */}
      
      {gallery && gallery.items && gallery.items.length > 0 && (
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <GalleryGrid
              items={gallery.items}
              layout={gallery.layout}
              gap={gallery.gap}
              enableLightbox={gallery.enableLightbox}
              lang={lang as 'pt' | 'es' | 'en'}
            />
          </div>
        </section>
      )}
      
      {/* More content */}
    </div>
  )
}
```

#### Option B: Manual Configuration

```typescript
<GalleryGrid
  items={yourItems}
  layout="grid-3"
  gap="medium"
  enableLightbox={true}
  lang="es"
/>
```

## Examples

### Example 1: Personalizadas Page
Uses slug: `personalizadas-main`
Location: `app/[lang]/personalizadas/page.tsx`

### Example 2: Different Page
Create a new gallery with slug: `colecciones-showcase`
Then fetch it on any page using the same pattern.

## Features

✅ **Multiple Galleries** - Create as many as you need, each with a unique slug  
✅ **Mixed Media** - Combine images and videos in one gallery  
✅ **Responsive** - Automatically adapts to mobile/tablet/desktop  
✅ **Lightbox** - Click to view items in fullscreen modal  
✅ **Navigation** - Previous/next buttons in lightbox  
✅ **Flexible Layouts** - Grid (2/3/4 cols) or Masonry  
✅ **Video Support** - YouTube and Vimeo embeds  
✅ **Auto Thumbnails** - Videos get thumbnails automatically  
✅ **Aspect Ratios** - Control image/video proportions  

## Tips

1. **Naming Convention**: Use descriptive slugs like `page-name-section-name`
2. **Organization**: Add clear titles and descriptions in Sanity for easy management
3. **Performance**: Galleries are automatically optimized with Next.js Image
4. **Reusability**: Use the same gallery on multiple pages if needed
5. **Updates**: Change gallery content in Sanity Studio - no code changes required

## Need Different Gallery on Another Page?

Just create a new Gallery Grid document in Sanity with a different slug, then use that slug when fetching in your page component. It's that simple!

