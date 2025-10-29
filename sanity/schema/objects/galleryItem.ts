import { defineType } from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video (YouTube/Vimeo)', value: 'video' },
        ],
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
      hidden: ({ parent }) => parent?.type !== 'image',
      validation: (Rule) =>
        Rule.custom((image, context) => {
          const parent = context.parent as any
          if (parent?.type === 'image' && !image) {
            return 'Image is required when type is Image'
          }
          return true
        }),
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo video URL',
      hidden: ({ parent }) => parent?.type !== 'video',
      validation: (Rule) =>
        Rule.custom((url, context) => {
          const parent = context.parent as any
          if (parent?.type === 'video' && !url) {
            return 'Video URL is required when type is Video'
          }
          if (url && parent?.type === 'video') {
            const youtubeRegex = /(?:youtube\.com|youtu\.be)/
            const vimeoRegex = /vimeo\.com/
            if (typeof url === 'string' && !youtubeRegex.test(url) && !vimeoRegex.test(url)) {
              return 'Please provide a valid YouTube or Vimeo URL'
            }
          }
          return true
        }),
    },
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'imageWithAlt',
      description: 'Optional custom thumbnail for video (auto-generated if not provided)',
      hidden: ({ parent }) => parent?.type !== 'video',
    },
  ],
  preview: {
    select: {
      type: 'type',
      image: 'image',
      thumbnail: 'thumbnail',
      videoUrl: 'videoUrl',
    },
    prepare({ type, image, thumbnail, videoUrl }) {
      return {
        title: type === 'image' ? 'Image' : 'Video',
        subtitle: type === 'video' ? videoUrl : undefined,
        media: type === 'image' ? image : thumbnail,
      }
    },
  },
})

