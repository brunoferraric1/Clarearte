import { defineType } from 'sanity'

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      validation: (Rule) => Rule.required().min(2).max(12),
      description: 'Add 2-12 images for the gallery',
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid (2 columns)', value: 'grid-2' },
          { title: 'Grid (3 columns)', value: 'grid-3' },
          { title: 'Masonry', value: 'masonry' },
        ],
        layout: 'radio',
      },
      initialValue: 'grid-2',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Gallery Caption',
      type: 'localizedString',
      description: 'Optional caption for the entire gallery',
    },
  ],
  preview: {
    select: {
      images: 'images',
      caption: 'caption.pt',
      layout: 'layout',
    },
    prepare({ images, caption, layout }) {
      const imageCount = images?.length || 0
      return {
        title: caption || 'Image Gallery',
        subtitle: `${imageCount} images - ${layout}`,
        media: images?.[0],
      }
    },
  },
})
