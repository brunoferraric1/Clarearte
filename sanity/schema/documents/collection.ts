import { defineType } from 'sanity'
import { Palette } from 'lucide-react'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: Palette,
  fields: [
    {
      name: 'contentId',
      title: 'Content ID',
      type: 'string',
      description:
        'Unique identifier to link translations of this content across languages',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localizedSlug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
      description: 'Short tagline (e.g., "romántica y botánica")',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Main description for collection listing page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithAlt',
      description: 'Large top image for collection detail page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      description: 'Additional images for the collection gallery',
    },
    {
      name: 'content',
      title: 'Detailed Content',
      type: 'localizedBlockContent',
      description: 'Rich text content sections for detail page (optional)',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'localizedString',
      description: 'Optional call-to-action button text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this collection appears (lower numbers first)',
      validation: (Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this collection was published',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'seo',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'seo',
        },
        {
          name: 'en',
          title: 'English',
          type: 'seo',
        },
      ],
    },
  ],
  preview: {
    select: {
      titlePt: 'title.pt',
      titleEs: 'title.es',
      titleEn: 'title.en',
      media: 'heroImage',
      order: 'order',
    },
    prepare({ titlePt, titleEs, titleEn, media, order }) {
      const title = titleEs || titlePt || titleEn || 'Untitled'
      return {
        title: `${order}. ${title}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
