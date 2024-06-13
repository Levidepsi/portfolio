import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text_with_image',
  title: 'Text With Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: "textwimage_items",
        title: "Text W Image Items",
        type: 'array',
        of: [
            {
                type: "object",
                fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image"
                    },
                    {
											name: 'title',
											title: 'Title',
											type: 'string',
                    },
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'blockContent',
                    }
                ]
            }
        ]
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',

    },
   
  },
})
