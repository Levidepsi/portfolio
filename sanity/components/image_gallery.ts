import { defineField, defineType } from "sanity";

export default defineType({
  name: "image_gallery",
  title: "Image Gallery",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Image gallery",
    }),

    defineField({
      name: "gallery_row",
      title: "Gallery Row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              initialValue: "Gallery row",
            },
            {
              name: "vimeo_url",
              title: "Vimeo URL",
              type: "string",
            },
            {
              name: "youtube_url",
              title: "Youtube URL",
              type: "string",
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                    },
                  ],
                },
              ],
            },
            {
              name: "column",
              title: "Column",
              type: "string",
              options: {
                list: [
                  { title: "1 Column", value: "col_1" },
                  { title: "2 Column", value: "col_2" },
                  { title: "3 Column", value: "col_3" },
                  { title: "Width 30/100", value: "width_30" },
                  { title: "Width 60/100", value: "width_60" },
                  { title: "Width 70/100", value: "width_70" },
                  { title: "Width 80/100", value: "width_80" },
                ], // <-- predefined values
                layout: "radio", // <-- defaults to 'dropdown'
              },
            },
            {
              name: "body",
              title: "Caption",
              type: "blockContent",
            },
          ],
        },
      ],
    }),
  ],
});
