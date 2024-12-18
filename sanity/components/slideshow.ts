import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
    defineField({
      name: 'padding_top',
      title: 'Padding Top',
      type: 'number',
    }),

    defineField({
        name: "slider_items",
        title: "Slider Items",
        type: 'array',
        of: [
              {
                type: "object",
                fields: [
                    {
                    name: 'link',
                    title: 'link',
                    type: 'string',
                    },
                    {
                      name: "url",
                      title: "url",
                      type: "string"
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
