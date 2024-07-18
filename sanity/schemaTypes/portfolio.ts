import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
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
      name: 'image',
      title: 'Image',
      type: 'image',
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
          type: 'imageblock_text',
          title: 'Image Block Text',
        },
        {
          type: 'multiple_image',
          title: 'Multiple Image',
        },
        {
          type: 'maptwithtext',
          title: 'Map With text',
        },
        {
          type: 'feature_portfolio',
          title: 'Feature Portfolio',
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
