import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
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
