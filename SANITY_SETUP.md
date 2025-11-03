# Sanity CMS Setup Guide

This guide will help you set up Sanity.io for the Clarearte blog.

## Prerequisites

- A Sanity account (sign up at https://www.sanity.io)
- Node.js installed
- Access to this project

## Step 1: Initialize Sanity Project

Run the following command to initialize your Sanity project:

```bash
npx sanity init --project-plan free
```

This will:
- Create a new Sanity project (or let you select an existing one)
- Give you a Project ID and Dataset name

**Important:** When asked about the project structure, choose **"Skip"** since we already have the schema set up.

## Step 2: Configure Environment Variables

Create a `.env.local` file in the project root (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

Fill in the values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_from_step_1"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2025-01-26"
```

You can find your Project ID in the Sanity dashboard at https://www.sanity.io/manage

## Step 3: Access Sanity Studio

Start your development server:

```bash
npm run dev
```

Then navigate to:

```
http://localhost:5174/studio
```

This will open the Sanity Studio interface where you can manage your content.

## Step 4: Create Your First Blog Post

In Sanity Studio:

1. Click **"Blog Post"** in the left sidebar
2. Click **"Create new Blog Post"**
3. Fill in the fields:

### Required Fields:

**Content ID:** A unique identifier (e.g., `arte-invitaciones-personalizadas`)
- This ID links the same post across all languages
- Use lowercase, hyphens only
- Must be unique

**Title (Portuguese):** Your blog post title in Portuguese
**Title (Spanish):** Your blog post title in Spanish
**Title (English):** Your blog post title in English

**Slug:** Click "Generate" for each language
- Portuguese: Will auto-generate from Portuguese title
- Spanish: Will auto-generate from Spanish title
- English: Will auto-generate from English title

**Content:** Write your blog post using the rich text editor
- Add headings, paragraphs, lists, quotes
- You'll need to fill content for each language

**Main Image:** Upload a hero image
- Add alt text for each language (required for SEO)
- Optional: Add captions

**Author:** Enter the author name (defaults to "Paola")

**Published At:** Select the publication date/time

### Optional Fields:

**Excerpt:** A short summary for the blog listing page (150-160 characters recommended)

**SEO:** Custom meta tags for search engines
- Meta Title: 50-60 characters
- Meta Description: 150-160 characters
- OG Image: Different image for social media if desired
- Keywords: Internal use only

## Step 5: Publish Your Post

1. Review all fields
2. Click **"Publish"** in the bottom right
3. Your post is now live!

## Viewing Your Blog

Once you've created a post:

- **Blog listing:** http://localhost:5174/es/blog
- **Individual post:** http://localhost:5174/es/blog/your-slug

Replace `es` with `pt` or `en` for other languages.

## Content Management Tips

### Multi-language Content

- **Always** fill in the Portuguese (PT) fields first (it's the default language)
- Spanish (ES) and English (EN) can be added later
- The language switcher uses the `contentId` to find translations
- Make sure all three slugs are generated for proper language switching

### Image Optimization

- Sanity automatically optimizes images (WebP/AVIF conversion)
- Recommended sizes:
  - **Hero images:** 1920x1080px minimum
  - **Content images:** 1200x800px minimum
- Always include alt text in all languages for SEO

### Rich Text Content

The content editor supports:
- **Headings:** H1-H6 (use H2-H4 for structure within posts)
- **Paragraphs:** Regular body text
- **Bold & Italic:** Text formatting
- **Lists:** Bulleted and numbered
- **Blockquotes:** For quotes
- **Links:** Internal and external
- **Images:** Inline images with captions

### SEO Best Practices

1. **Unique Titles:** Each post should have a unique, descriptive title (50-60 chars)
2. **Meta Descriptions:** Compelling summaries that encourage clicks (150-160 chars)
3. **Alt Text:** Describe images accurately for accessibility and SEO
4. **Content Length:** Aim for 1200+ words for SEO value
5. **Internal Links:** Link to other pages on your site (add links in the rich text editor)

## Deployment

When deploying to production:

1. **Create a production dataset** in Sanity (optional, or use the same one)
2. **Add environment variables** to your hosting platform (Vercel, Netlify, etc.)
3. **Set up CORS** in Sanity dashboard (⚠️ **CRITICAL for Studio access**):
   - Go to https://www.sanity.io/manage
   - Select your project (project ID: `mc6ib0v3`)
   - Go to **API** → **CORS Origins**
   - Click **"Add CORS origin"**
   - Add **BOTH** of these origins:
     - `https://clareartestudio.es`
     - `https://www.clareartestudio.es`
   - Leave **"Allow credentials"** checked ✅
   - Click **Save**
   - **Important:** Changes take effect immediately, but you may need to refresh your browser

## Troubleshooting

### "Missing environment variable" error

Make sure your `.env.local` file exists and has all required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### Studio not loading

**In Development:**
1. Clear `.next` cache: `rm -rf .next`
2. Restart dev server: `npm run dev`

**In Production (CORS Error):**
If you see: `"Access to XMLHttpRequest blocked by CORS policy"` when accessing `/studio`:

⚠️ **This means your production domain is not whitelisted in Sanity.**

**Fix:**
1. Go to https://www.sanity.io/manage
2. Select your project (`mc6ib0v3`)
3. Navigate to **API** → **CORS Origins**
4. Add both:
   - `https://clareartestudio.es`
   - `https://www.clareartestudio.es`
5. Make sure **"Allow credentials"** is checked
6. Click **Save**
7. Refresh the studio page in your browser

**Common CORS Errors:**
- `No 'Access-Control-Allow-Origin' header` → Domain not added to CORS origins
- `CorsOriginError` → Same issue, need to add domain to Sanity dashboard
- `Workspace: missing context value` → Usually follows CORS error, fix CORS first

### Images not displaying

1. Check that the image was uploaded in Sanity Studio
2. Verify the image has alt text
3. Check browser console for errors

### Content not showing on blog pages

1. Verify the post is **Published** (not Draft) in Sanity Studio
2. Check that you filled in content for the language you're viewing
3. Restart the dev server

## Advanced: Draft Mode & Previews

For previewing unpublished content (future feature):

1. Add `SANITY_API_READ_TOKEN` to `.env.local`
2. Generate a token in Sanity dashboard under **API** → **Tokens**
3. Use the preview API route at `/api/draft?secret=YOUR_SECRET&slug=/blog/post-slug`

## Need Help?

- **Sanity Documentation:** https://www.sanity.io/docs
- **GROQ Query Language:** https://www.sanity.io/docs/groq
- **Next.js + Sanity Guide:** https://www.sanity.io/plugins/next-sanity

## File Structure Reference

```
sanity/
├── schema/
│   ├── documents/
│   │   └── post.ts              # Blog post schema
│   ├── objects/
│   │   ├── localizedString.ts   # Multi-language strings
│   │   ├── localizedText.ts     # Multi-language text areas
│   │   ├── localizedBlockContent.ts # Multi-language rich text
│   │   ├── localizedSlug.ts     # Multi-language slugs
│   │   ├── imageWithAlt.ts      # Image with alt text
│   │   └── seo.ts               # SEO metadata
│   └── index.ts                 # Schema registry
├── lib/
│   ├── client.ts                # Sanity client
│   ├── image.ts                 # Image URL builder
│   └── queries.ts               # GROQ queries
├── env.ts                       # Environment validation
└── sanity.config.ts             # Studio configuration
```
