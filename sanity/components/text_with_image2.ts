import { defineField, defineType } from "sanity";

export default defineType({
  name: "text_with_image2",
  title: "Text With Image2",
  type: "object",
  fields: [
    defineField({
      name: "background_color",
      title: "Background Color",
      type: "string",
    }),

    defineField({
      name: "paddingTop",
      title: "paddingTop",
      type: "number",
    }),

    defineField({
      name: "paddingBottom",
      title: "paddingBottom",
      type: "number",
    }),

    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),

    defineField({
      name: "items",
      title: "items",
     type: 'array',
      of: [
        {
          name: "item",
          type: "object",
          fields: [
              {
              name: 'title',
              title: 'Title',
              type: 'string',
              },
              {
                name: 'body',
                title: 'Body',
                type: 'blockContent',
            },
            {
              name: 'image',
              title: 'image',
              type: 'image',
            },
            {
              name: "button_label",
              title: "button_label",
              type: "string",
            },
        
            {
              name: "button_url",
              title: "Button Url",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title", // Get the 'title' from the referenced 'projects' document
            },
            prepare({ title,  }) {
              return {
                title: title,
              };
            },
          },
        },
      ]
  }),
    
  ],

  preview: {
    select: {
      title: "title",
      sub_title: "sub_title",
      media: "image",
      content_title: "content_title"
    },
    prepare(selection) {
      const { title, media, sub_title, content_title } = selection;
      return {
        title: title || sub_title || content_title ||  "Text With Image Block",
        media: media || undefined,
      };
    },
  },
});
