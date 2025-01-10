import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner2',
  title: 'Banner 2',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sub',
      title: 'sub',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'heading',
      type: 'heading',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
    }),

     defineField({
      name: 'description',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
        name: "image",
        title: "Image",
        type: 'image',
        
    }),
   
    defineField({
      name: "max_width",
      title: "Max Width",
      type: "number",
    }),
  
  ],


})
