import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'people',
  title: 'People',
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
      name: 'background_color',
      title: 'Background Color',
      type: 'string',
    }),

    defineField({
        name: "profiles",
        title: "Profile",
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
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                  },
                    {
                    name: 'type',
                    title: 'Type',
                    type: 'string',
                  },
                    {
                    name: 'description',
                    title: 'Description',
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
