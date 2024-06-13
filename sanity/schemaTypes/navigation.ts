import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: "header_logo",
        title: "Header Logo",
        type: "image"
    }),

    defineField({
      name: "footer_logo",
      title: "Footer Logo",
      type: "image"
    }),
   
    defineField({
        name: "header_menu",
        title: "Header Menu",
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
                      name: "link",
                      title: "Link",
                      type: "string",
                      initialValue: "about"
                    },
                   
                   
                ]
            }
        ]
    }),

     defineField({
        name: "footer_menu",
        title: "Footer Menu",
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
                      name: "link",
                      title: "Link",
                      type: "string",
                      initialValue: "about"
                    },
                   
                   
                ]
            }
        ]
    }),
  ],
})
