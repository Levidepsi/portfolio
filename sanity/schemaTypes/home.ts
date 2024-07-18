import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [
        {
          type: "slider",
          title: "Slider",
        },
        {
          type: 'banner',
          title: 'Banner',
        },
        {
          type: 'heading',
          title: 'Heading',
        },
        {
          type: 'multiple_text',
          title: 'Multiple Text',
        },
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',

    },
   
  },
})
