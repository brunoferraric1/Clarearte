import { defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese URL',
          type: 'string',
          description: 'Can be relative (/pt/contacto) or absolute (https://...)',
        },
        {
          name: 'es',
          title: 'Spanish URL',
          type: 'string',
          description: 'Can be relative (/es/contacto) or absolute (https://...)',
        },
        {
          name: 'en',
          title: 'English URL',
          type: 'string',
          description: 'Can be relative (/en/contact) or absolute (https://...)',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
      description: 'Open link in a new browser tab',
    },
  ],
  preview: {
    select: {
      text: 'text.pt',
      url: 'url.pt',
      variant: 'variant',
    },
    prepare({ text, url, variant }) {
      return {
        title: text || 'Call to Action',
        subtitle: `${variant} - ${url}`,
      }
    },
  },
})
