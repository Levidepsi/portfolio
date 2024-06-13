import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
     defineField({
      name: 'positions',
      title: 'Position',
       type: 'string',
      description: "Position of title & description",
      options: {
        list: [
          {title: 'Center', value: 'Center'},
          { title: 'Bottom Center', value: 'bottom_center' },
          { title: 'Top Left', value: 'top_left' },
          { title: 'Top Right', value: 'top_right' },  
          { title: 'Bottom Right', value: 'bottom_right' },
          { title: 'Bottom Left', value: 'bottom_left' },  
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
       },
      initialValue: "center"
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
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    },
                    {
                      name: "image",
                      title: "Image",
                      type: "image"
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
