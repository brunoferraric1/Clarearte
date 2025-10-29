import { defineType } from 'sanity'

export default defineType({
  name: 'localizedBlockContent',
  title: 'Localized Block Content',
  type: 'object',
  fields: [
    {
      name: 'pt',
      title: 'Portuguese',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageWithAlt' },
        { type: 'imageGallery' },
        { type: 'twoColumn' },
        { type: 'callout' },
        { type: 'videoEmbed' },
        { type: 'cta' },
        { type: 'divider' },
      ],
    },
    {
      name: 'es',
      title: 'Spanish',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageWithAlt' },
        { type: 'imageGallery' },
        { type: 'twoColumn' },
        { type: 'callout' },
        { type: 'videoEmbed' },
        { type: 'cta' },
        { type: 'divider' },
      ],
    },
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageWithAlt' },
        { type: 'imageGallery' },
        { type: 'twoColumn' },
        { type: 'callout' },
        { type: 'videoEmbed' },
        { type: 'cta' },
        { type: 'divider' },
      ],
    },
  ],
})
