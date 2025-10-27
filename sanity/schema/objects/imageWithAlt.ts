import { defineType } from 'sanity'

export default defineType({
  name: 'imageWithAlt',
  title: 'Image with Alt Text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'localizedString',
    },
    {
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      description:
        'Controls how this image should be framed on the page. "Auto" uses the original image ratio.',
      options: {
        list: [
          { title: 'Auto (natural)', value: 'auto' },
          { title: '16:9', value: '16/9' },
          { title: '4:3', value: '4/3' },
          { title: '1:1 (Square)', value: '1/1' },
          { title: '3:4 (Vertical)', value: '3/4' },
          { title: '2:3 (Vertical)', value: '2/3' },
        ],
        layout: 'radio',
      },
      initialValue: 'auto',
    },
    {
      name: 'fit',
      title: 'Fit Mode',
      type: 'string',
      description: 'Cover may crop to fill the frame; Contain never crops.',
      options: {
        list: [
          { title: 'Contain (no crop)', value: 'contain' },
          { title: 'Cover (may crop)', value: 'cover' },
        ],
        layout: 'radio',
      },
      initialValue: 'contain',
    },
  ],
})
