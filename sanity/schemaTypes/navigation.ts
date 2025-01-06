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
        name: "header_logo2",
        title: "Header Logo 2",
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
                      name: 'page',
                      type: 'object',
                      fields: [
                        {
                          title: 'slug',
                          name: 'slug',
                          type: 'reference',
                          to: [{type: 'page'}]
                        }
                      ]
                    },
                  {
                    name: "subMenu",
                    title: "Sub Menu",
                    type: "array",
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
                            name: 'custom_links',
                            title: 'Custom Links',
                            type: 'string',
                          },
                          {
                            name: 'page',
                            type: 'object',
                            fields: [
                              {
                                title: 'slug',
                                name: 'slug',
                                type: 'reference',
                                to: [{type: 'page'}]
                              }
                            ]
                          },
                        ]
                      }
                    ]
                  }
                   
                   
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
     defineField({
        name: "social_links",
        title: "social links",
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
