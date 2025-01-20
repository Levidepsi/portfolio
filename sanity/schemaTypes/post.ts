import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
   
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      
    }),
 
  
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'body2',
      title: 'Body 2',
      type: 'blockContent',
    }),
    defineField({
      name: 'category',
      title: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Category 1', value: 'category1'},
          { title: 'Category 2', value: 'category2' },
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      initialValue: "category1"
    }),

    defineField({
      name: 'section',
      title: 'section',
      type: 'string',
      options: {
        list: [
          {title: 'section 1', value: 'section1'},
          { title: 'section 2', value: 'section2' },
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      initialValue: "section1"
    }),

     defineField({
        name: "related_post",
        title: "Related Post",
        type: 'array',
        of: [
            {
                type: "object",
                fields: [
                   {
                      title: 'post',
                      name: 'post',
                      type: 'reference',
                      to: [{type: 'post'}]
                    }
                   
                ]
            }
        ]
     }),
    
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
