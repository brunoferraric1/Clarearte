import { defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'contentId',
      title: 'Content ID',
      type: 'string',
      description: 'Unique ID shared across translations (used for language switching)',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localizedText',
      description: 'Short summary for blog listing page',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localizedBlockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'imageWithAlt',
      description: 'Hero image for the blog post',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Paola',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese SEO',
          type: 'seo',
        },
        {
          name: 'es',
          title: 'Spanish SEO',
          type: 'seo',
        },
        {
          name: 'en',
          title: 'English SEO',
          type: 'seo',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.pt',
      subtitle: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        ...selection,
        subtitle: subtitle ? `by ${subtitle}` : 'No author',
      }
    },
  },
})
