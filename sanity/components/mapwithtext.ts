import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'maptwithtext',
  title: 'Map With text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),

     defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
     }),
     
      defineField({
      name: 'map_api',
      title: 'Map Api',
      type: 'string',
    }),

    
  ],
})
