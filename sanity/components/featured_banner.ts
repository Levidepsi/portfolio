import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured_banner',
  title: 'Featured Banner',
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
      name: "image_height",
      title: "Image Height",
      type: "number"
    })

  ],


})
