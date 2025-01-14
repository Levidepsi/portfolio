import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'map_description',
  title: 'Map Description',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      description: "Map Image "
    }),
     

    defineField({
        name: "pointers",
        title: "Pointers",
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
                      name: 'body1',
                      title: 'body 1',
                      type: 'blockContent',
                    },
                    {
                      name: 'body2',
                      title: 'body 2',
                      type: 'blockContent',
                    },
                   
                ]
            }
        ]
    }),
  ],
})
