import { defineField, defineType } from "sanity";

export default defineType({
  name: "landing_banner",
  title: "Landing Banner",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image_mobile",
      title: "Image Mobile",
      type: "image",
    }),
    defineField({
      name: "image_desktop",
      title: "Image Desktop",
      type: "image",
    }),
    defineField({
      name: "logo_title",
      title: "Logo Title",
      type: "image",
    }),
    defineField({
      name: "text_items",
      title: "Text Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "title_url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
