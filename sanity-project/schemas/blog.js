export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    // slug field
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    // Rich Text Field (Portable Text)
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          // Add annotations correctly
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{type: 'blog'}], // change to article/blog as per your need
                  },
                ],
              },
            ],
          },
        },
        // Allow images inside your rich editor
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },

    // Meta Description Field
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: 'A brief description of the blog post for SEO purposes.',
      options: {
        maxLength: 155,
      },
    },

    // Image Field
    {
      name: 'blogImage',
      title: 'Blog Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    // Author reference field
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },

    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}
