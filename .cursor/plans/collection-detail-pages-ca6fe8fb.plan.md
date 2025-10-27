<!-- ca6fe8fb-26d1-4bed-ab7b-68840cff9948 4927bc46-514d-4e7e-b8ab-1356a244d4f4 -->
# Collection Detail Pages with Sanity CMS

## Overview

Create a new Sanity document type for Collections with localized content, then build detail pages with hero images, content sections, and an image modal with navigation. All collection content will be editable through Sanity Studio.

## Implementation Steps

### 1. Create Collection Sanity Schema

Create `sanity/schema/documents/collection.ts` with fields:

- `contentId` - Unique ID for translations
- `title` - Localized string (e.g., "Colección Albor")
- `slug` - Localized slug (albor, raices, luz-linea)
- `subtitle` - Localized string (e.g., "romántica y botánica")
- `description` - Localized text (main description)
- `heroImage` - ImageWithAlt (large top image)
- `gallery` - Array of ImageWithAlt (additional images)
- `content` - Localized block content (rich text sections for detailed content)
- `ctaText` - Localized string (optional CTA button text)
- `order` - Number (for display ordering)
- `publishedAt` - DateTime
- `seo` - SEO object per language

Register in `sanity/schema/index.ts`

### 2. Add Collection Queries

Add to `sanity/lib/queries.ts`:

- `collectionsQuery` - Fetch all published collections ordered by `order` field
- `collectionBySlugQuery` - Fetch single collection by slug and language
- `allCollectionSlugsQuery` - Fetch all slugs for generateStaticParams

### 3. Build Image Modal Component

Create `src/components/image-modal.tsx` with:

- Full-screen overlay with dark backdrop
- Large centered Next.js Image component
- Close button (X icon, top-right)
- Left/right navigation arrows (ChevronLeft/Right from lucide-react)
- Image counter (e.g., "2 / 5")
- Keyboard navigation (ArrowLeft, ArrowRight, Escape keys)
- Touch/swipe gestures for mobile (touchStart/touchEnd/touchMove events)
- Click backdrop to close
- Smooth fade transitions
- Body scroll lock when open

### 4. Create Collection Detail Page

Build `app/[lang]/colecciones/[slug]/page.tsx`:

- Dynamic route for collection slugs
- Fetch collection data from Sanity by slug and lang
- Generate static params using `allCollectionSlugsQuery`
- Large hero image section (full-width)
- Title and subtitle below hero
- Render localized block content using PortableText component
- Display gallery images in responsive grid
- All images clickable to open modal with navigation
- Contact form section at bottom
- Generate SEO metadata from Sanity data

### 5. Update Collections Listing Page

Modify `app/[lang]/colecciones/page.tsx`:

- Fetch collections from Sanity using `collectionsQuery`
- Map Sanity data to existing CollectionCard component structure
- Ensure all links point to correct detail page routes
- Keep existing benefits section and page structure

### 6. Seed Initial Collection Data

Create the 3 existing collections in Sanity Studio:

- **Albor** (romántica y botánica) - with 3 images
- **Raíces** (bohemia y mediterránea) - with 3 images  
- **Luz & Línea** (minimalismo atemporal) - with 2 images

Use existing descriptions and images from current code

## Key Files

**New Files:**

- `sanity/schema/documents/collection.ts` - Collection schema
- `src/components/image-modal.tsx` - Modal with navigation
- `app/[lang]/colecciones/[slug]/page.tsx` - Detail page route

**Modified Files:**

- `sanity/schema/index.ts` - Register collection schema
- `sanity/lib/queries.ts` - Add collection queries
- `app/[lang]/colecciones/page.tsx` - Fetch from Sanity
- `src/components/collection-card.tsx` - Update types if needed

## Technical Notes

- Use existing `imageWithAlt` and `localizedBlockContent` types
- Modal prevents body scroll with `overflow: hidden`
- Swipe threshold: 50px minimum distance
- Images optimized via Next.js Image with proper sizes
- Collections orderable via `order` field in Sanity
- All content fully localizable (Spanish/English/Portuguese)

## Implementation Status

### ✅ Completed

- [x] **Collection Sanity Schema** - Created `sanity/schema/documents/collection.ts` with all required fields
- [x] **Registered Schema** - Added collection schema to `sanity/schema/index.ts`
- [x] **Collection Queries** - Added `collectionsQuery`, `collectionBySlugQuery`, and `allCollectionSlugsQuery` to `sanity/lib/queries.ts`
- [x] **Image Modal Component** - Built `src/components/image-modal.tsx` with:
  - Full-screen overlay with dark backdrop
  - Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  - Touch/swipe gestures for mobile (50px threshold)
  - Image counter display
  - Body scroll lock
  - Smooth transitions
- [x] **Collection Detail Page** - Created `app/[lang]/colecciones/[slug]/page.tsx` with:
  - Server component for data fetching
  - Client component (`collection-detail-client.tsx`) for interactivity
  - Static generation with `generateStaticParams()`
  - SEO metadata generation
  - Hero image, title, subtitle sections
  - PortableText rich content rendering
  - Gallery grid with modal integration
  - Contact form section
- [x] **Collections Listing Page Updated** - Modified `app/[lang]/colecciones/page.tsx` to:
  - Fetch from Sanity with fallback to hardcoded data
  - Properly typed with TypeScript
  - Map Sanity data to CollectionCard format
  - Maintain existing benefits section
- [x] **Fixed Image Positioning Issues** - Updated CollectionCard component with proper `relative` positioning
- [x] **Documentation** - Created `COLLECTIONS_SETUP.md` with complete seeding instructions

### 🔄 Next Steps (Your Action Required)

1. **Access Sanity Studio**
   - URL: `http://localhost:5174/studio`
   - Or navigate to your project's `/studio` route
   - Log in with your Sanity credentials

2. **Create Collections in Sanity Studio**
   - Follow the guide in `COLLECTIONS_SETUP.md`
   - Create all 3 collections:
     - Colección Albor (order: 1)
     - Colección Raíces (order: 2)
     - Colección Luz & Línea (order: 3)
   - Upload images from `/public/images/colections/`
   - Add alt text in Spanish (EN/PT optional for now)
   - Publish each collection

3. **Test the Implementation**
   - Visit `http://localhost:5174/es/colecciones`
   - Click on each collection to view detail pages
   - Test the image modal (click any image)
   - Test keyboard navigation (arrow keys, Escape)
   - Test mobile swipe gestures
   - Verify all links work correctly

4. **Optional Enhancements**
   - Add Portuguese and English translations
   - Add rich content blocks using PortableText editor
   - Optimize images in Sanity
   - Set up revalidation webhooks for instant updates

### 📝 Notes

- Collections page uses **fallback data** until you add collections to Sanity
- Once you publish collections in Sanity, the page will automatically switch to using that data
- All TypeScript errors have been resolved
- Dev server running at `http://localhost:5174`