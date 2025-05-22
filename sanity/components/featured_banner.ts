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
      name: 'backgroundColor',
      title: 'Background Color',
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
      type: "number",
      description: "Add by viewport Size"
    })

  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title ||  "Featured Banner",
        media: media || undefined,
      };
    },
  },

})
