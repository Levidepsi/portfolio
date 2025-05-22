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
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'link',
                      title: 'link',
                      type: 'string',
                    },
                    {
                      name: 'image',
                      title: 'image',
                      type: 'image',
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
    preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title,  } = selection;
      return {
        title: title ||  "Slider",
      };
    },
  },
})
