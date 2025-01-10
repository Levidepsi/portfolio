import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
    }),

    defineField({
        name: "timeline_items",
        title: "Timeline Items",
        type: 'array',
        of: [
            {
                type: "object",
                fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'blockContent',
                    },
                ]
            }
        ]
    }),
  ],
})
