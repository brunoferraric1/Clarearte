import { defineType } from 'sanity'

export default defineType({
  name: 'divider',
  title: 'Divider',
  type: 'object',
  fields: [
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple Line', value: 'simple' },
          { title: 'Decorative', value: 'decorative' },
          { title: 'Dots', value: 'dots' },
        ],
        layout: 'radio',
      },
      initialValue: 'simple',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'spacing',
      title: 'Spacing',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      style: 'style',
      spacing: 'spacing',
    },
    prepare({ style, spacing }) {
      return {
        title: `Divider (${style})`,
        subtitle: `Spacing: ${spacing}`,
      }
    },
  },
})
