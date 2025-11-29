export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About the Author',
      type: 'text',
      description: 'A brief bio of the author.',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
