import { defineType } from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or other video URL',
      validation: (Rule) =>
        Rule.required().custom((url) => {
          if (!url || typeof url !== 'string') return true
          const validDomains = ['youtube.com', 'youtu.be', 'vimeo.com']
          const isValid = validDomains.some((domain) => url.includes(domain))
          return isValid || 'Please use a YouTube or Vimeo URL'
        }),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'localizedString',
      description: 'Optional caption for the video',
    },
    {
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: '16:9 (Default)', value: '16/9' },
          { title: '4:3', value: '4/3' },
          { title: '1:1 (Square)', value: '1/1' },
        ],
      },
      initialValue: '16/9',
    },
  ],
  preview: {
    select: {
      url: 'url',
      caption: 'caption.pt',
    },
    prepare({ url, caption }) {
      return {
        title: caption || 'Video Embed',
        subtitle: url,
      }
    },
  },
})
