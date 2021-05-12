
export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'hero' }, // hero.js (same applies for the other types)
        { type: 'textWithIllustration' },
        { type: 'callToAction' },
        { type: 'gallery' },
        { type: 'form' },
        { type: 'video' },
      ],
    },
  ],
}
