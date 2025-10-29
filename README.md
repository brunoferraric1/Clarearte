# Clarearte

> Wedding invitation design studio website with multi-language support and Sanity CMS integration.

## Stack
- **Next.js 15** (App Router) with TypeScript
- **Sanity CMS** (headless CMS with embedded Studio at `/studio`)
- **Tailwind CSS 4** + shadcn/ui components
- **i18n** (ES, PT, EN locales with middleware-based routing)
- **Framer Motion** for animations
- **React Hook Form** + Zod for form validation

## Environment Setup

Copy `.env.example` to `.env.local` and fill in your Sanity credentials:

```bash
cp .env.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your dataset name (e.g., "production")
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (default: "2025-01-26")

Get these values from [sanity.io/manage](https://www.sanity.io/manage)

## Scripts
```bash
npm install
npm run dev      # Start dev server on port 5174
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
