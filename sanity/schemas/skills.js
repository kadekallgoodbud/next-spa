import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'stack',
              title: 'Stack',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});
