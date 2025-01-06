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
      name: 'meta_description',
      title: 'Meta Description',
      type: 'string',
    }),

    defineField({
      name: 'meta_image',
      title: 'Meta Image',
      type: 'image',
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
        {
          type: 'text_with_image',
          title: 'Text With Image',
        },
        {
          type: 'featured_banner',
          title: 'Featured Banner',
        },
         {
          type: 'text_with_image2',
          title: 'Text With Image 2',
        },
         {
          type: 'multiple_image',
          title: 'Multiple Image',
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
