import { defineType } from 'sanity'
import { Grid3x3 } from 'lucide-react'

export default defineType({
  name: 'galleryGrid',
  title: 'Gallery Grid',
  type: 'document',
  icon: Grid3x3,
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Internal title for organizing galleries (not displayed on site)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier to fetch this gallery',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Internal description (not displayed on site)',
      rows: 3,
    },
    {
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [{ type: 'galleryItem' }],
      validation: (Rule) => Rule.required().min(1).max(50),
      description: 'Add images and videos to this gallery',
    },
    {
      name: 'layout',
      title: 'Grid Layout',
      type: 'string',
      description: 'How the gallery should be displayed',
      options: {
        list: [
          { title: '2 Columns', value: 'grid-2' },
          { title: '3 Columns', value: 'grid-3' },
          { title: '4 Columns', value: 'grid-4' },
          { title: 'Masonry (Pinterest style)', value: 'masonry' },
        ],
      },
      initialValue: 'grid-3',
    },
    {
      name: 'gap',
      title: 'Gap Between Items',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
    },
    {
      name: 'enableLightbox',
      title: 'Enable Lightbox/Modal',
      type: 'boolean',
      description: 'Allow users to click items to view them larger',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      items: 'items',
      layout: 'layout',
    },
    prepare({ title, slug, items, layout }) {
      const itemCount = items?.length || 0
      const layoutLabel = layout === 'masonry' ? 'Masonry' : layout?.replace('grid-', '') + ' cols'
      return {
        title: title,
        subtitle: `${itemCount} items • ${layoutLabel} • ${slug}`,
      }
    },
  },
})

