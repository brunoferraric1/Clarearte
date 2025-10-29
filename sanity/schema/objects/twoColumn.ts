import { defineType } from 'sanity'
import { Columns2 } from 'lucide-react'

export default defineType({
  name: 'twoColumn',
  title: 'Two Column Layout',
  type: 'object',
  icon: Columns2,
  fields: [
    {
      name: 'leftColumn',
      title: 'Left Column',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Content Type',
          type: 'string',
          options: {
            list: [
              { title: 'Text', value: 'text' },
              { title: 'Image', value: 'image' },
            ],
          },
          initialValue: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'text',
          title: 'Text Content',
          type: 'array',
          of: [{ type: 'block' }],
          hidden: ({ parent }) => parent?.type !== 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'imageWithAlt',
          hidden: ({ parent }) => parent?.type !== 'image',
        },
      ],
    },
    {
      name: 'rightColumn',
      title: 'Right Column',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Content Type',
          type: 'string',
          options: {
            list: [
              { title: 'Text', value: 'text' },
              { title: 'Image', value: 'image' },
            ],
          },
          initialValue: 'image',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'text',
          title: 'Text Content',
          type: 'array',
          of: [{ type: 'block' }],
          hidden: ({ parent }) => parent?.type !== 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'imageWithAlt',
          hidden: ({ parent }) => parent?.type !== 'image',
        },
      ],
    },
    {
      name: 'columnRatio',
      title: 'Column Ratio',
      type: 'string',
      description: 'Ratio of left to right column width',
      options: {
        list: [
          { title: '50% / 50%', value: '1:1' },
          { title: '60% / 40%', value: '3:2' },
          { title: '40% / 60%', value: '2:3' },
        ],
      },
      initialValue: '1:1',
    },
    {
      name: 'verticalAlign',
      title: 'Vertical Alignment',
      type: 'string',
      description: 'How content aligns vertically in columns',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
        ],
      },
      initialValue: 'center',
    },
    {
      name: 'gap',
      title: 'Gap Between Columns',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
    },
    {
      name: 'reverseOnMobile',
      title: 'Reverse Column Order on Mobile',
      type: 'boolean',
      description: 'Stack right column first on mobile devices',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      leftType: 'leftColumn.type',
      rightType: 'rightColumn.type',
      ratio: 'columnRatio',
    },
    prepare({ leftType, rightType, ratio }) {
      const ratioLabel = ratio === '1:1' ? '50/50' : ratio === '3:2' ? '60/40' : '40/60'
      return {
        title: `Two Columns (${ratioLabel})`,
        subtitle: `${leftType || 'empty'} | ${rightType || 'empty'}`,
      }
    },
  },
})

