# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Clarearte** is a website for a small business creating personalized art and printables for weddings (invitations, menus, save the date, live illustration, signage). Built with **Next.js 15 (App Router)** for optimal SEO and performance.

**Key Business Requirements:**
- SEO-first approach (organic traffic, search rankings via SSG/SSR)
- Multi-language support planned: Portuguese (PT - default), Spanish (ES), English (EN)
- Target audiences: Couples, wedding planners, event designers in Spain, Portugal, Brazil, EU
- Future CMS: Sanity.io for content management

## Commands

### Development
```bash
npm i                  # Install dependencies
npm run dev            # Start Next.js dev server (default port 3000, auto-increments if in use)
npm run dev -- -p 5174 # Use specific port
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run Next.js linter
```

## Architecture

### Current Stack (Next.js)
- **Framework:** Next.js 15 with App Router
- **Rendering:** Server-side rendering (SSR) + Static Site Generation (SSG)
- **Language:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + custom design tokens
- **UI Components:** Shadcn/ui (Radix UI primitives)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Animations:** tw-animate-css
- **Images:** Next.js Image component with automatic optimization

### Project Structure
```
app/
├── layout.tsx           # Root layout (fonts, metadata)
├── page.tsx             # Homepage
├── globals.css          # Global styles + design tokens
├── colecciones/
│   └── page.tsx         # Collections page
├── personalizadas/
│   └── page.tsx         # Personalized invitations page
└── sobre-mi/
    └── page.tsx         # About page
src/
├── components/
│   ├── ui/              # Shadcn components (button, form, card, etc.)
│   ├── navbar.tsx       # Main navigation (uses Next.js Link)
│   ├── hero.tsx         # Homepage hero section
│   └── [feature]-*.tsx  # Feature-specific components
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── images/              # Legacy image imports (being phased out)
public/
└── images/              # Static images for Next.js Image
```

### Routing (Current)
Spanish-only routes (i18n structure to be implemented):
- `/` - Homepage
- `/colecciones` - Collections page
- `/personalizadas` - Personalized invitations page
- `/sobre-mi` - About page
- `/contacto` - Contact page (to be created)

**Next Phase:** Migrate to `/[lang]/...` structure for multi-language support.

### Design System

**Typography System:**
- **Fonts:**
  - Sans: Zen Kaku Gothic New (body text)
  - Serif: Playfair Display (headings, display)
  - Mono: Roboto Mono (code/labels)
  - Loaded via Google Fonts in `app/layout.tsx`
- **Fluid Typography:** Uses `clamp()` for responsive scaling (320px → 1440px)
- **Scale Classes:**
  - `text-display-3`, `text-display-2`, `text-display-1` - Large hero text
  - `text-title-3`, `text-title-2`, `text-title-1` - Semantic headings (h1-h3)
  - `text-body-xl`, `text-body-lg`, `text-body`, `text-body-sm`, `text-body-xs` - Body text
  - `text-label` - Small labels/overlines

**Custom Tokens** (defined in `app/globals.css`):
- CSS custom properties for colors, spacing, shadows, letter-spacing
- Dark mode support via `.dark` class
- All tokens use OKLCH color space for better color interpolation

**Component Patterns:**
- Import from `@/components/ui/*` for Shadcn components
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Navigation uses Next.js Link with Radix UI Navigation Menu
- Images use Next.js Image component from `/public/images/`

### Path Alias
- `@/` maps to `./src/` (configured in `tsconfig.json`)

### Client vs Server Components
- **Server Components (default):** All page components, static layouts
- **Client Components ('use client'):** Components with interactivity (useState, event handlers)
  - `navbar.tsx` - uses useState for menu open/close
  - Form components - use React Hook Form
  - Any component using browser-only APIs

## Next.js Specifics

### Image Optimization
```typescript
// DO THIS (Next.js Image):
import Image from 'next/image'
<Image
  src="/images/photo.webp"
  alt="Description"
  width={800}
  height={600}
  className="..."
/>

// NOT THIS (regular img):
<img src="/images/photo.webp" alt="..." />
```

**Benefits:**
- Automatic format conversion (AVIF, WebP)
- Responsive images (multiple sizes)
- Lazy loading by default
- Better Core Web Vitals

### Links
```typescript
// DO THIS:
import Link from 'next/link'
<Link href="/path">Text</Link>

// NOT THIS:
<a href="/path">Text</a>
```

### Metadata (SEO)
Each page exports metadata:
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | ClareArte',
  description: 'Page description for SEO',
}
```

## Key Considerations

### SEO Requirements (Critical)
- Every page has unique metadata (title, description)
- Proper heading hierarchy (single H1, logical H2-H6)
- Descriptive alt text for all images
- Semantic HTML (use `<nav>`, `<main>`, `<section>`, `<article>`)
- Internal linking strategy (3-5 links per page minimum)
- Performance: Target Lighthouse > 90 (all metrics)
- Server-side rendering ensures content visible to crawlers

### Typography Guidelines
- Use fluid typography classes for responsive text
- Map semantic headings to appropriate `text-title-*` classes
- Body text should use `text-body` or `text-body-lg` for readability
- Display text (`text-display-*`) for large hero sections only

### Styling Best Practices
- Tailwind v4 syntax (uses `@import "tailwindcss"` + `@theme`)
- Custom utilities in `@layer utilities` (see `app/globals.css`)
- Use design tokens from `:root` for consistency
- Mobile-first responsive design (test 320px → 1920px)

### Component Development
- Follow Shadcn patterns for new UI components
- Use Radix UI primitives for accessibility
- Keep components in `src/components/` (features) or `src/components/ui/` (reusable UI)
- Add 'use client' directive only when needed (interactivity, hooks, browser APIs)

### Performance Best Practices
- Use Server Components by default (faster initial load)
- Only use Client Components when necessary
- Optimize images with Next.js Image component
- Use `loading="lazy"` for below-fold images
- Minimize client-side JavaScript

## Development Workflow

### Adding a New Page
1. Create `app/new-page/page.tsx`
2. Export metadata for SEO
3. Import and use existing components
4. Update navbar with new link (if needed)

### Adding a New Component
1. Create in `src/components/feature-name.tsx`
2. Add 'use client' if it needs interactivity
3. Use TypeScript for props
4. Follow existing patterns (Shadcn style)

### Working with Images
1. Add images to `public/images/`
2. Use Next.js Image component with proper width/height
3. Always include descriptive alt text
4. Use `fill` prop for unknown dimensions with `relative` parent

## Future Roadmap

### i18n Implementation (Next Phase)
- Convert pages to `/[lang]/page.tsx` structure
- Create language middleware for detection
- Add dictionaries for UI translations (`dictionaries/pt.json`, etc.)
- Integrate Sanity for content localization

### CMS Integration (Sanity.io)
- Install `next-sanity` and related packages
- Create Sanity schemas with localized content
- Build GROQ queries for data fetching
- Deploy Sanity Studio to `/studio` route
- Configure ISR revalidation webhooks

### Planned Features
- Contact form page (`/contacto`)
- Blog functionality (`/blog`)
- Portfolio/case studies
- FAQ page with structured data
- Testimonials with Review schema

## Important Files

- `PRD.md` - Comprehensive product requirements (SEO strategy, CMS integration, full roadmap)
- `app/globals.css` - Design tokens, typography scale, custom utilities
- `tailwind.config.js` - Tailwind configuration with fluid typography helpers
- `next.config.mjs` - Next.js configuration (image optimization, etc.)
- `app/layout.tsx` - Root layout (fonts, global metadata)
- `src/components/navbar.tsx` - Navigation component (reference for patterns)

## Migration Notes

This project was recently migrated from Vite/React to Next.js 15. Legacy patterns:
- Old `src/images/` folder (being phased out) - use `/public/images/` instead
- Some components may still need 'use client' directive added
- All routing now uses Next.js App Router (no React Router)

## Performance Tips

### Core Web Vitals Targets (from PRD)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

### How to Achieve This
1. Use Next.js Image for all images (automatic optimization)
2. Minimize Client Components (keep most as Server Components)
3. Use proper width/height on images (prevents CLS)
4. Lazy load below-fold content
5. Optimize fonts (self-host in future, currently Google Fonts)
6. Use ISR for dynamic content (fast like static, fresh like dynamic)

## Notes

- **Language:** Content is currently in Spanish (will add PT, EN later)
- **No tests yet:** Testing infrastructure to be added
- **No CMS yet:** Content is hardcoded, will integrate Sanity.io soon
- **Branch:** Main development happens on `development` branch
- **Port:** Dev server runs on port 3000 by default. If already in use, Next.js automatically uses the next available port (3001, 3002, etc.). Check terminal output for the actual URL.
