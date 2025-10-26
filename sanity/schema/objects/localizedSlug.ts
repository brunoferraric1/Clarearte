import { defineType } from 'sanity'

export default defineType({
  name: 'localizedSlug',
  title: 'Localized Slug',
  type: 'object',
  fields: [
    {
      name: 'pt',
      title: 'Portuguese',
      type: 'slug',
      options: {
        source: 'title.pt',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'es',
      title: 'Spanish',
      type: 'slug',
      options: {
        source: 'title.es',
        maxLength: 96,
      },
    },
    {
      name: 'en',
      title: 'English',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
  ],
})
