import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'blogContent',
      title: 'Blog Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    }
  ],
  fields: [
    defineField({
      group: 'meta',
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      group: 'blogContent',
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
    }),
    defineField({
      group: 'blogContent',
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'author',
      },
      fields: [
        // Add the "image" field here
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      group: 'blogContent',
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      group: 'blogContent',
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'category' }
      }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      group: 'blogContent',
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'url',
                    type: 'url'
                  }
                ]
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                icon: LinkIcon,
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [
                      { type: 'author' }
                      // other types you may want to link to
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image'
        },
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
