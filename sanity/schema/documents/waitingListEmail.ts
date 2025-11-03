import { defineType } from 'sanity'

export default defineType({
  name: 'waitingListEmail',
  title: 'Waiting List Email',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Spanish', value: 'es' },
          { title: 'Portuguese', value: 'pt' },
          { title: 'English', value: 'en' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' },
        ],
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Internal notes about this subscriber',
    },
  ],
  preview: {
    select: {
      email: 'email',
      language: 'language',
      subscribedAt: 'subscribedAt',
      status: 'status',
    },
    prepare(selection) {
      const { email, language, subscribedAt, status } = selection
      const date = subscribedAt ? new Date(subscribedAt).toLocaleDateString() : 'No date'
      return {
        title: email,
        subtitle: `${language?.toUpperCase() || 'N/A'} • ${date} • ${status || 'active'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Subscribed At, Newest',
      name: 'subscribedAtDesc',
      by: [{ field: 'subscribedAt', direction: 'desc' }],
    },
    {
      title: 'Subscribed At, Oldest',
      name: 'subscribedAtAsc',
      by: [{ field: 'subscribedAt', direction: 'asc' }],
    },
    {
      title: 'Email, A-Z',
      name: 'emailAsc',
      by: [{ field: 'email', direction: 'asc' }],
    },
  ],
})

