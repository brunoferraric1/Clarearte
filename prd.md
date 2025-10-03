# Clarearte Website Project — Product Requirements Document (PRD)

## 🎯 Goal
Build a **personal website for Clarearte**, a small business that creates **personalised art and printables for weddings** (invitations, menus, save the date, live illustration, signage, etc.).
Site must be **SEO-first**: structure, content, and rendering optimized for organic traffic.

## 🖼️ Business Context
- **Focus**: Personalised art + modern wedding printables
- **Audience**: Couples, wedding planners, event designers
- **Geographies**: Spain, Portugal, Brazil, EU
- **Languages**: Portuguese (PT), Spanish (ES), English (EN) - multi-language from start

## 🌐 Objectives
1. **Showcase** portfolio and services
2. **Rank** on search engines (evergreen guides + service pages)
3. **Build trust** (testimonials, FAQs, case studies, process transparency)
4. **Convert** (forms, WhatsApp/email CTAs, catalog downloads)
5. **Scale** for new content, languages, and services

---

## 🏗️ Information Architecture

### Route Structure (Flexible)
- IA is **not fixed** yet; keep routes modular
- Use **language subpaths**: `/pt/...`, `/es/...`, `/en/...` (default `/pt`)
- Each content entity has a stable **`contentId`** shared across locales
- Slugs are **localized** per language for UX/SEO
- Language switcher must map current `contentId` to sibling translations

### Proposed Page Types
```
/[lang]/                          # Homepage
/[lang]/servicos                  # Services overview
/[lang]/servicos/[slug]           # Individual service pages
/[lang]/portfolio                 # Portfolio grid
/[lang]/portfolio/[slug]          # Case study/project detail
/[lang]/blog                      # Blog listing
/[lang]/blog/[slug]               # Blog post
/[lang]/sobre                     # About/Story
/[lang]/contacto                  # Contact
/[lang]/faq                       # FAQ
/[lang]/processo                  # How it works/Process
/[lang]/guias/[slug]              # SEO guides (e.g., "wedding invitation guide")
```

---

## 🌍 Multi-language (i18n)

### Implementation
- **Next.js App Router** recommended for SSG/ISR/SSR (SEO benefits)
- If staying on Vite short-term, keep i18n contracts identical for easy migration
- Use middleware for language detection (Accept-Language header, cookies, URL)

### File Structure (Next.js Target)
```
app/
  [lang]/
    layout.tsx          # Root layout with lang param
    page.tsx            # Homepage
    servicos/
      page.tsx
      [slug]/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx

dictionaries/
  pt.json
  es.json
  en.json

lib/
  i18n.ts              # getDictionary() helper
  language-utils.ts    # Language detection, switching logic
```

### i18n Requirements
- **hreflang tags**: Automatic generation for all pages with translations
- **Language switcher**: Preserve current page context (same contentId across langs)
- **URL localization**: Slugs translated (e.g., `/pt/servicos`, `/es/servicios`, `/en/services`)
- **Content fallback**: If translation missing, show default language with notice
- **RTL support**: Not required now, but keep structure flexible

---

## 🔍 SEO Strategy

### Technical SEO Requirements

#### Meta Tags (Every Page)
```typescript
// Pattern example
{
  title: `[Page Title] | Clarearte - Arte Personalizada para Casamentos`,
  description: `[150-160 chars describing page value]`,
  openGraph: {
    title: `[OG Title - can be different/longer]`,
    description: `[OG Description]`,
    images: ['/og-image-1200x630.jpg'],
    locale: 'pt_PT', // or es_ES, en_US
    alternateLocale: ['es_ES', 'en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `[Twitter Title]`,
    description: `[Twitter Description]`,
    images: ['/twitter-image-1200x600.jpg'],
  },
  alternates: {
    canonical: `https://clarearte.com/pt/[path]`,
    languages: {
      'pt-PT': '/pt/[path]',
      'es-ES': '/es/[path]',
      'en-US': '/en/[path]',
    },
  },
}
```

#### Structured Data (Schema.org)
Implement JSON-LD for:
- **LocalBusiness** (homepage)
- **Service** (service pages)
- **FAQPage** (FAQ page)
- **Article/BlogPosting** (blog posts)
- **Review/AggregateRating** (if testimonials exist)
- **Breadcrumb** (all pages)
- **ImageObject** (portfolio items)

#### Technical Checklist
- [ ] XML Sitemap (auto-generated, multilingual)
- [ ] robots.txt with sitemap reference
- [ ] Canonical URLs (prevent duplicate content)
- [ ] hreflang implementation (x-default = pt)
- [ ] 404 page (localized, helpful navigation)
- [ ] Proper HTTP status codes (301 redirects for lang changes)

### Performance SEO

#### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

#### Lighthouse Goals
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

#### Optimization Strategy
- **Images**:
  - Use Next.js `<Image>` component
  - Format: WebP/AVIF with fallbacks
  - Lazy loading (below fold)
  - Responsive srcset
  - Explicit width/height (prevent CLS)
  - Max width: 1920px for hero, 800px for content
- **Fonts**:
  - Self-host fonts (avoid Google Fonts GDPR issues)
  - Use `next/font` with `display: swap`
  - Subset fonts (only needed characters/weights)
- **Code Splitting**:
  - Dynamic imports for heavy components
  - Route-based splitting (automatic in Next.js)
- **Caching**:
  - Static assets: 1 year cache
  - HTML: Revalidate strategy (ISR)
  - API routes: Appropriate cache headers

### Content SEO Strategy

#### Keyword Research (Per Language)
- **Primary keywords**: "arte personalizada casamento", "convites personalizados", "ilustração ao vivo casamento", etc.
- **Long-tail**: "como escolher convite de casamento", "ideias menu casamento personalizado"
- **Local**: "convites casamento Lisboa", "wedding printables Madrid"

#### Content Types & Requirements
| Type | Min Words | H1 | Internal Links | Update Frequency |
|------|-----------|-----|----------------|------------------|
| Homepage | 300 | 1 | 5-10 | Quarterly |
| Service Page | 800 | 1 | 3-5 | As needed |
| Blog Post | 1200 | 1 | 3-7 | New content monthly |
| Portfolio Item | 400 | 1 | 2-4 | Per project |
| Guide (SEO) | 2000+ | 1 | 8-12 | Quarterly review |
| FAQ | 150/item | 1 (page) | - | Monthly review |

#### Content Guidelines
- **Heading hierarchy**: 1 H1 per page, logical H2→H6 structure
- **Keyword density**: Natural (1-2%), avoid stuffing
- **Alt text**: Descriptive, include keywords where relevant
- **Internal linking**: 3-5 contextual links per page minimum
- **CTAs**: Every page must have clear next action
- **E-E-A-T**: Demonstrate expertise (process, behind-scenes, credentials)

#### URL Structure Rules
- Lowercase only
- Use hyphens (not underscores)
- Max 3-5 words
- Include target keyword where natural
- No dates in URLs (evergreen content)

---

## 🎨 Design & UI (Shadcn Implementation)

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: Shadcn/ui (Tailwind-based components)
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io (headless CMS)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion (sparingly)
- **Image Optimization**: Next.js Image + Sanity Image CDN

### Shadcn Guidelines

#### Component Selection (Start Small)
Essential blocks to begin:
- Navigation (responsive menu, language switcher)
- Hero sections (homepage, service pages)
- Card grids (portfolio, services)
- Form blocks (contact, quote request)
- Testimonial carousels
- Footer (multi-column, localized)
- CTA sections

#### Implementation Best Practices
- **Accessibility First**:
  - Maintain ARIA labels from Shadcn defaults
  - Keyboard navigation for all interactive elements
  - Focus indicators visible
  - Color contrast WCAG AA (4.5:1 text, 3:1 UI)
  - Touch targets: min 44x44px

- **Performance**:
  - Import components individually: `import { Button } from "@/components/ui/button"`
  - Use `"use client"` directive only when needed (forms, animations)
  - Keep static pages SSG when possible
  - Lazy load heavy components (carousels, modals)

- **Customization**:
  - Override Shadcn defaults in `tailwind.config.ts` (colors, fonts, spacing)
  - Keep brand consistency (Clarearte color palette)
  - Create custom variants in component files
  - Document custom components separately from Shadcn defaults

- **Forms**:
  - Use Shadcn Form + React Hook Form + Zod
  - Show validation errors inline
  - Loading states on submission
  - Success/error feedback
  - Prevent double submissions
  - GDPR-compliant (checkbox for consent)

#### Mobile-First Requirements
- All layouts responsive (test 320px → 1920px)
- Touch-friendly spacing
- Hamburger menu < 768px
- Collapsible sections on mobile
- Sticky CTA on mobile (if needed)

---

## 🗄️ CMS: Sanity.io Integration

### Why Sanity
- **Multilingual-first**: Native support for i18n documents
- **Structured content**: Perfect for portfolio, services, blog
- **Real-time collaboration**: Multiple editors can work simultaneously
- **Portable Text**: Rich text with custom components (embeds, CTAs, galleries)
- **Image CDN**: Built-in optimization (WebP, responsive, hotspot/crop)
- **GROQ**: Powerful query language for precise data fetching
- **TypeScript**: Auto-generate types from schemas
- **Preview mode**: Draft content preview before publishing
- **Webhooks**: Trigger ISR revalidation on content changes

### Sanity Setup

#### Installation & Configuration
```bash
npm install sanity @sanity/client @sanity/image-url next-sanity
npx sanity init --project-plan free
```

#### Project Structure
```
sanity/
├── schema/
│   ├── documents/
│   │   ├── post.ts              # Blog posts
│   │   ├── project.ts           # Portfolio items
│   │   ├── service.ts           # Service pages
│   │   ├── page.ts              # Generic pages (About, Process, etc.)
│   │   └── faq.ts               # FAQ items
│   ├── objects/
│   │   ├── localizedString.ts   # Translatable string
│   │   ├── localizedText.ts     # Translatable rich text
│   │   ├── localizedSlug.ts     # Translatable slug
│   │   ├── seo.ts               # SEO meta fields
│   │   ├── imageWithAlt.ts      # Image with alt text + caption
│   │   └── cta.ts               # Call-to-action object
│   └── index.ts                 # Schema registry
├── lib/
│   ├── client.ts                # Sanity client config
│   └── queries.ts               # GROQ queries
├── env.ts                       # Environment validation
└── sanity.config.ts             # Studio configuration
```

### i18n Schema Pattern

**Localized String Object** (`localizedString.ts`):
```typescript
export default {
  name: 'localizedString',
  type: 'object',
  fields: [
    { name: 'pt', type: 'string', title: 'Portuguese' },
    { name: 'es', type: 'string', title: 'Spanish' },
    { name: 'en', type: 'string', title: 'English' },
  ],
}
```

**Blog Post Schema Example** (`post.ts`):
```typescript
export default {
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'contentId',
      type: 'string',
      title: 'Content ID',
      description: 'Unique ID shared across translations',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'localizedString',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'object',
      fields: [
        { name: 'pt', type: 'slug', options: { source: 'title.pt' } },
        { name: 'es', type: 'slug', options: { source: 'title.es' } },
        { name: 'en', type: 'slug', options: { source: 'title.en' } },
      ],
    },
    {
      name: 'excerpt',
      type: 'object',
      fields: [
        { name: 'pt', type: 'text', rows: 3 },
        { name: 'es', type: 'text', rows: 3 },
        { name: 'en', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'content',
      type: 'object',
      fields: [
        { name: 'pt', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', type: 'array', of: [{ type: 'block' }] },
        { name: 'en', type: 'array', of: [{ type: 'block' }] },
      ],
    },
    {
      name: 'mainImage',
      type: 'imageWithAlt',
    },
    {
      name: 'seo',
      type: 'object',
      fields: [
        { name: 'pt', type: 'seo' },
        { name: 'es', type: 'seo' },
        { name: 'en', type: 'seo' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.pt',
      media: 'mainImage',
    },
  },
}
```

### GROQ Queries

**Fetch Blog Posts by Language**:
```typescript
// lib/sanity/queries.ts
export const postsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    contentId,
    "slug": slug[$lang].current,
    "title": title[$lang],
    "excerpt": excerpt[$lang],
    "content": content[$lang],
    mainImage,
    publishedAt
  }
`

// Usage in Next.js
const posts = await client.fetch(postsQuery, { lang: 'pt' })
```

**Fetch Single Post with Translations**:
```typescript
export const postBySlugQuery = `
  *[_type == "post" && slug[$lang].current == $slug][0] {
    _id,
    contentId,
    "slug": {
      "pt": slug.pt.current,
      "es": slug.es.current,
      "en": slug.en.current,
    },
    "title": title[$lang],
    "content": content[$lang],
    mainImage,
    "seo": seo[$lang],
    publishedAt
  }
`
```

### TypeScript Types

Generate types from Sanity schemas:
```bash
npx sanity schema extract
npx sanity typegen generate
```

This creates `sanity.types.ts` with full type safety for queries.

### Image Optimization

**Using Sanity Image CDN**:
```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Usage in components
<Image
  src={urlFor(image).width(800).height(600).url()}
  alt={image.alt.pt}
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL={urlFor(image).width(20).blur(50).url()}
/>
```

**Image Schema with Hotspot**:
```typescript
{
  name: 'imageWithAlt',
  type: 'image',
  options: {
    hotspot: true, // Enable focal point selection
  },
  fields: [
    {
      name: 'alt',
      type: 'localizedString',
      title: 'Alternative Text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      type: 'localizedString',
      title: 'Caption',
    },
  ],
}
```

### Preview/Draft Mode

**Enable Preview Mode in Next.js**:
```typescript
// app/api/draft/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  draftMode().enable()
  redirect(slug || '/')
}
```

**Fetch Draft Content**:
```typescript
import { draftMode } from 'next/headers'

const client = createClient({
  useCdn: !draftMode().isEnabled,
  perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
})
```

### ISR Revalidation with Webhooks

**Setup Webhook in Sanity Studio**:
1. Go to Sanity Dashboard → API → Webhooks
2. Create webhook: `https://yoursite.com/api/revalidate`
3. Trigger on: Create, Update, Delete

**API Route for Revalidation**:
```typescript
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const secret = request.headers.get('x-sanity-webhook-secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }

  const { _type, slug } = await request.json()

  try {
    // Revalidate based on content type
    if (_type === 'post') {
      revalidatePath(`/pt/blog/${slug.pt}`)
      revalidatePath(`/es/blog/${slug.es}`)
      revalidatePath(`/en/blog/${slug.en}`)
      revalidatePath('/pt/blog')
      revalidatePath('/es/blog')
      revalidatePath('/en/blog')
    }

    return new Response('Revalidated', { status: 200 })
  } catch (err) {
    return new Response('Error revalidating', { status: 500 })
  }
}
```

### SEO Best Practices with Sanity

1. **Dedicated SEO Object**:
   - Custom meta title/description per page
   - OG image (different from main image if needed)
   - Keywords array (internal use)
   - Schema markup fields

2. **Slug Validation**:
   - Prevent duplicate slugs per language
   - Auto-generate from title with option to override
   - Lowercase, hyphenated format

3. **Content Relationships**:
   - Related posts/projects for internal linking
   - Category/tag system for topical clustering
   - Breadcrumb hierarchy

4. **Editorial Workflow**:
   - Draft → Review → Published states
   - Scheduled publishing
   - Translation status tracking (PT ✓, ES ✗, EN ✗)

### Sanity Studio Customization

**Deploy Sanity Studio**:
- Option 1: Deploy to `yoursite.com/studio` (same domain, better workflow)
- Option 2: Separate subdomain `studio.yoursite.com`
- Option 3: Use Sanity's hosted studio

**Custom Studio Features**:
- Desk structure for organized content navigation
- Custom input components (e.g., SEO preview)
- Validation rules (ensure PT translation always exists)
- Language indicator badges
- Bulk translation tools

---

## 📊 Analytics & Tracking

### Required Integrations
- **Google Analytics 4**:
  - Page views
  - Event tracking (form submits, downloads, external links)
  - Custom dimensions (language, content type)
- **Google Search Console**:
  - Indexed pages
  - Search queries
  - Manual actions monitoring
- **Microsoft Clarity** (optional): Heatmaps, session recordings

### Conversion Goals
1. Contact form submission
2. WhatsApp click
3. Catalog/price list download
4. Portfolio item view > 30s
5. Email newsletter signup (if implemented)

### GDPR/Privacy
- Cookie consent banner (opt-in for analytics)
- Privacy policy page (localized)
- Cookie policy page
- Data processing agreements if using 3rd party tools

---

## 🚀 Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Next.js 14 project setup
- [ ] Shadcn/ui installation & configuration
- [ ] **Sanity project initialization**
- [ ] **Sanity schema setup (localizedString, SEO objects)**
- [ ] i18n implementation (middleware, dictionaries)
- [ ] **Sanity client configuration (with/without CDN)**
- [ ] Homepage layout (desktop + mobile)
- [ ] Navigation & footer components
- [ ] Basic SEO meta tags setup
- [ ] Font & color system finalized

### Phase 2: Core Pages (Week 3-4)
- [ ] **Sanity schemas: Service, Project (portfolio), Page**
- [ ] **GROQ queries for services & portfolio**
- [ ] Services page + individual service templates (Sanity-powered)
- [ ] Portfolio grid + case study template (Sanity-powered)
- [ ] About page (Sanity CMS for easy editing)
- [ ] Contact page with form (API route + email service)
- [ ] 404 page (localized)
- [ ] Implement structured data (LocalBusiness, Service)
- [ ] **Sanity Image component integration**

### Phase 3: Content & SEO (Week 5-6)
- [ ] **Sanity schema: Blog Post with Portable Text**
- [ ] **Blog listing + detail pages (GROQ queries)**
- [ ] **Sanity schema: FAQ with FAQPage schema markup**
- [ ] FAQ page with schema (Sanity-powered)
- [ ] Process/How it works page
- [ ] **Create first 3 blog posts in Sanity (all 3 languages)**
- [ ] Internal linking strategy implemented
- [ ] **Sanity Image CDN optimization pipeline**
- [ ] **TypeScript types generation from Sanity schemas**
- [ ] XML sitemap generation (include Sanity content)

### Phase 4: Polish & Launch Prep (Week 7-8)
- [ ] **Sanity Preview/Draft mode setup**
- [ ] **ISR revalidation webhook configuration**
- [ ] **Sanity Studio customization (desk structure, custom inputs)**
- [ ] **Deploy Sanity Studio to /studio route**
- [ ] Performance optimization (Lighthouse > 90)
- [ ] Accessibility audit (WCAG AA)
- [ ] Analytics setup & testing
- [ ] Cookie consent implementation
- [ ] hreflang tags verified
- [ ] Social share images (OG/Twitter) - generate from Sanity
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (iOS, Android)

### Phase 5: Launch & Monitor (Week 9+)
- [ ] Deploy to production (Vercel recommended)
- [ ] Submit sitemap to Search Console
- [ ] Set up Google Analytics 4
- [ ] Monitor Core Web Vitals
- [ ] First SEO audit (1 month post-launch)
- [ ] Content calendar for blog (monthly posts)

---

## 📁 Project Structure (Reference)

```
clarearte-website/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── servicos/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── sobre/
│   │   ├── contacto/
│   │   ├── faq/
│   │   ├── processo/
│   │   └── guias/
│   ├── api/
│   │   ├── draft/              # Preview mode
│   │   ├── revalidate/         # ISR webhook
│   │   └── contact/            # Form handling
│   ├── studio/                 # Sanity Studio route
│   │   └── [[...tool]]/
│   │       └── page.tsx
│   ├── sitemap.ts              # Dynamic sitemap (with Sanity data)
│   └── robots.ts
├── sanity/
│   ├── schema/
│   │   ├── documents/
│   │   │   ├── post.ts
│   │   │   ├── project.ts
│   │   │   ├── service.ts
│   │   │   ├── page.ts
│   │   │   └── faq.ts
│   │   ├── objects/
│   │   │   ├── localizedString.ts
│   │   │   ├── localizedText.ts
│   │   │   ├── localizedSlug.ts
│   │   │   ├── seo.ts
│   │   │   ├── imageWithAlt.ts
│   │   │   └── cta.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── client.ts
│   │   ├── image.ts            # Image URL builder
│   │   └── queries.ts
│   ├── env.ts
│   └── sanity.config.ts
├── components/
│   ├── ui/                     # Shadcn components
│   ├── layout/                 # Header, Footer, Navigation
│   ├── sections/               # Reusable page sections
│   ├── forms/                  # Form components
│   ├── portfolio/              # Portfolio-specific components
│   └── sanity/                 # Sanity-specific components
│       └── PortableText.tsx    # Custom Portable Text renderer
├── lib/
│   ├── i18n.ts
│   ├── seo.ts
│   ├── analytics.ts
│   └── utils.ts
├── dictionaries/
│   ├── pt.json
│   ├── es.json
│   └── en.json
├── public/
│   ├── images/
│   ├── fonts/
│   └── og-images/
├── styles/
│   └── globals.css
├── sanity.types.ts             # Auto-generated types
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✅ Definition of Done (Quality Gates)

Every page must meet:
- [ ] **SEO**: Unique title/description, proper headings, alt text, schema markup
- [ ] **Performance**: Lighthouse > 90, LCP < 2.5s, CLS < 0.1
- [ ] **Accessibility**: WCAG AA, keyboard navigation, screen reader tested
- [ ] **i18n**: All 3 languages present, hreflang tags, language switcher works
- [ ] **Mobile**: Responsive design tested on 3+ devices
- [ ] **Content**: Min word count met, internal links present, CTA clear
- [ ] **Analytics**: Events tracked, conversions measurable

---

## 🔗 Key Resources

### Documentation
- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity + Next.js Guide](https://www.sanity.io/plugins/next-sanity)
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org)

### Tools
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Screaming Frog](https://www.screamingfrogseotool.com/) - SEO audit
- [Ahrefs/Semrush](https://ahrefs.com) - Keyword research
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring
- [Sanity Vision](https://www.sanity.io/docs/the-vision-plugin) - GROQ query testing

---

## 💡 Important Notes for AI Agent

### When Building:
1. **Always prioritize SEO**: Every component decision should consider SEO impact
2. **Start with Shadcn blocks**: Find existing templates before building custom
3. **Keep it multilingual**: Never hardcode strings, use dictionaries (UI) or Sanity (content)
4. **Performance matters**: Measure before/after any optimization
5. **Accessibility is non-negotiable**: Test with keyboard & screen reader
6. **Mobile-first**: Build for 375px first, then scale up
7. **Content structure**: Semantic HTML (nav, main, section, article, aside)
8. **Images**: Always use Next.js Image + Sanity CDN, include alt text with dimensions
9. **Forms**: Validate, sanitize, provide feedback, prevent spam
10. **Test localization**: Language switcher must preserve context (contentId in Sanity)
11. **Sanity schemas first**: Design content models before building page templates
12. **GROQ optimization**: Fetch only needed fields, use projections to reduce payload

### Quick Wins for SEO:
- Fast initial page load (preload critical fonts, optimize images)
- Clear heading hierarchy (H1 → H2 → H3, no skips)
- Descriptive link text (not "click here", but "view wedding invitation portfolio")
- FAQ with schema markup (instant rich results)
- Blog with internal links (build topical authority)
- Testimonials with Review schema (trust signals)

### Common Pitfalls to Avoid:
- ❌ Hardcoded text (breaks i18n)
- ❌ Missing alt text (accessibility + SEO)
- ❌ No error boundaries (bad UX on failures)
- ❌ Forgetting loading states (forms, data fetching)
- ❌ Ignoring mobile breakpoints (design breaks)
- ❌ No canonical URLs (duplicate content penalty)
- ❌ Missing hreflang (wrong language in search results)
- ❌ Heavy client-side JS (kills performance)
- ❌ Auto-playing media (bad UX + accessibility)
- ❌ Forms without validation (spam + bad data)
- ❌ Fetching entire Sanity documents (use GROQ projections)
- ❌ Using CDN client for draft content (breaks preview mode)
- ❌ Not validating contentId uniqueness in Sanity
- ❌ Forgetting to revalidate related pages on content updates

---

**Status**: Living document - update as architecture decisions are made.
**Last Updated**: 2025-10-04
**CMS Decision**: Sanity.io confirmed for all content management
