import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature_portfolio',
  title: 'Feature Portfolio',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: "image",
        title: "Image",
        type: 'image',
        
    }),

    defineField({
      name: 'image_width',
      title: 'Image Width',
      type: 'number',
    }),
    defineField({
      name: 'image_height',
      title: 'Image Height',
      type: 'number',
    }),

    defineField({
      name: 'subtitle',
      title: 'Sub title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Body',
      type: 'blockContent',
    }),
    
    defineField({
        name: "details",
        title: "Details",
        type: 'array',
        of:
        [
          {
            type: "object",
            fields: [
                {
                name: 'key',
                title: 'Key',
                type: 'string',
                },
                {
                  name: "value",
                  title: "Value",
                  type: "string"
                },
                
                
            ]
          }
        ]
    }),

  ],


})
