import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
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
  preview: {
    select: {
      title: 'title',
    },
  },
});
