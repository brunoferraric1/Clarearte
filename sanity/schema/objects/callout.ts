import { defineType } from 'sanity'

export default defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Success', value: 'success' },
          { title: 'Tip', value: 'tip' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Optional title for the callout',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.pt',
      content: 'content.pt',
      variant: 'variant',
    },
    prepare({ title, content, variant }) {
      return {
        title: title || `Callout (${variant})`,
        subtitle: content,
      }
    },
  },
})
