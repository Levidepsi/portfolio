import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Multiple text", value: "multiple_text" },
          { title: "Single text", value: "single_text" },
        ],
        layout: "dropdown"
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      hidden: ({parent}) => parent?.layout != "single_image"

    }),

    defineField({
      name: "multiple_text",
      title: "Multiple Text",
      type: 'array',
      hidden: ({parent}) => parent?.layout != "multiple_text",
      of: [
        {
          name: "texts",
          type: "object",
          fields: [
              {
              name: 'title',
              title: 'Title',
              type: 'string',
              },
              {
                name: "position",
                title: "Position",
                type: "string",
                options: {
                  list: [
                    { title: "start", value: "start" },
                    { title: "end", value: "end" },
                  ],
                  layout: "dropdown"
                }
              }
              
          ],
          preview: {
            select: {
              title: "title", // Get the 'title' from the referenced 'projects' document
            },
            prepare({ title,  }) {
              return {
                title: title,
              };
            },
          },
        },
      ]
    }),
     
     defineField({
      name: 'padding_top',
      title: 'Padding Top',
      type: 'number',
     }),
      
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title ||  "Heading",
        media: media || undefined,
      };
    },
  },

})
