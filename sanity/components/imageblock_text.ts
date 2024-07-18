import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageblock_text',
  title: 'Image Block Text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    

    defineField({
        name: "imageblock_items",
        title: "Image Block Items",
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
                      name: "sub_title",
                      title: "Sub Title",
                      type: "string"
                    },
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'blockContent',
                  },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                    },
                   
                ]
            }
        ]
    }),
  ],
})
