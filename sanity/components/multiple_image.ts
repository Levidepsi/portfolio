import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'multiple_image',
  title: 'Multiple Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
     

    defineField({
        name: "multiple_image_items",
        title: "Multiple image Items",
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
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                  },
                    {
                      name: 'link',
                      title: 'link',
                      type: 'string',
                      initialValue: "/"
                    },
                   
                ]
            }
        ]
    }),
  ],
})
