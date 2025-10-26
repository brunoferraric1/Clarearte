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
      of: [{ type: 'block' }],
    },
    {
      name: 'es',
      title: 'Spanish',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
