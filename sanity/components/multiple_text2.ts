import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'multiple_text2',
  title: 'Multiple Text 2',
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
      name: 'padding_top_bottom',
      title: 'Padding TOp Bottom',
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
