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
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                  },
                    
                    {
                      name: 'show_border_bottom',
                      title: 'Show Border Bottom',
                      type: 'boolean',
                  },
                    {
                      name: 'show_border_right',
                      title: 'Show Border Right',
                      type: 'boolean',
                  },
                    {
                      name: 'margin_top',
                      title: 'Margins Top',
                      type: 'number',
                  },
                    {
                      name: 'width',
                      title: 'width',
                      type: 'number',
                  },
                    {
                      name: 'height',
                      title: 'height',
                      type: 'number',
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
