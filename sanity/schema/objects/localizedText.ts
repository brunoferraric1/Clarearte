import { defineType } from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    {
      name: 'pt',
      title: 'Portuguese',
      type: 'text',
      rows: 3,
    },
    {
      name: 'es',
      title: 'Spanish',
      type: 'text',
      rows: 3,
    },
    {
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
    },
  ],
})
