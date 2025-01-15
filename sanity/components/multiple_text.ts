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
      name: 'title_max_width',
      title: 'Title Max Width',
      type: 'number',
    }),
    defineField({
      name: 'title_padding_bottom',
      title: 'Title Padding Bottom',
      type: 'number',
    }),
     defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
    }),
    defineField({
      name: 'text_color',
      title: 'Text Color',
      type: 'string',
    }),
     defineField({
      name: 'padding_top_bottom',
      title: 'Padding Top Bottom',
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
                    {
                      name: 'apply_now',
                      title: 'Apply Now',
                      type: 'string',
                      initialValue: "Apply Now"
                  },
                    {
                      name: 'apply_now_link',
                      title: 'Apply Now Link',
                      type: 'string',
                      initialValue: "/contact-us"
                    },
                    
                   
                ]
            }
        ]
    }),
    defineField({
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'Accordion', value: 'accordion'},
          { title: 'Slider', value: 'slider' },
          
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }),
  ],
})
