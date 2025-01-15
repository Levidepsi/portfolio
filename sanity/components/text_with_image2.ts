import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text_with_image2',
  title: 'Text With Image 2',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: "textwimage_items2",
        title: "Text W Image Items 2",
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
                  },
                  {
                        name: 'body_mobile1',
                        title: 'Body Mobile 1',
                        type: 'blockContent',
                  },
                  {
                        name: 'body_mobile2',
                        title: 'Body Mobile 2',
                        type: 'blockContent',
                  },
                  {
                         name: 'body_mobile3',
                        title: 'Body Mobile 3',
                        type: 'blockContent',
                  },
                    {
                      name: 'content_position',
                      title: 'Content Position',
                      type: 'boolean',
                      description: "If true image on left"
                  },
                    {
                      name: 'background',
                      title: 'Background',
                      type: 'string',
                  },
                    {
                      name: 'color',
                      title: 'Color',
                      type: 'string',
                    },
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
