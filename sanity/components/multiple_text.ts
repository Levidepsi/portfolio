import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'multiple_text',
  title: 'Multiple Text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
     defineField({
      name: 'padding_top',
      title: 'Padding TOp',
      type: 'number',
    }),

    defineField({
        name: "text_items",
        title: "Text Items",
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
                      name: "link",
                      title: "link",
                      type: "string"
                    },
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'blockContent',
                  },
                    {
                      name: 'show_link',
                      title: 'Show Link',
                      type: 'boolean',
                      initialValue: true
                    },
                   
                ]
            }
        ]
    }),
  ],
})
