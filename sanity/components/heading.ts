import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

  
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),

     defineField({
      name: 'description2',
      title: 'Description 2',
      type: 'blockContent',
     }),
     
     defineField({
      name: 'show_border',
      title: 'Show Border',
      type: 'boolean',
     }),
     defineField({
      name: 'padding_top',
      title: 'Padding Top',
      type: 'number',
     }),
     
      defineField({
      name: 'description2_max_width',
      title: 'Description2 Max Width',
      type: 'number',
      }),
      
      defineField({
      name: 'descriptions_max_width',
      title: 'Descriptions Max Width',
        type: 'number',
      
      }),
      
      
      defineField({
        name: 'description2_font_size',
        title: 'Description 2 Font Size',
        type: 'number',
      
      }),
  ],


})
