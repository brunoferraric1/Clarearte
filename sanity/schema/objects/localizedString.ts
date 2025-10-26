import { defineType } from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'pt',
      title: 'Portuguese',
      type: 'string',
    },
    {
      name: 'es',
      title: 'Spanish',
      type: 'string',
    },
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
  ],
})
