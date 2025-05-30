import { defineField, defineType } from "sanity";

export default defineType({
  name: "image_with_text_block",
  title: "Image with Text Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "background_color",
      title: "Background Color",
      type: "string",
    }),
    defineField({
      name: "padding_top",
      title: "Padding Top",
      type: "number",
    }),
    defineField({
      name: "padding_bottom",
      title: "Padding Bottom",
      type: "number",
    }),

    defineField({
      name: "allowSliderMobile",
      title: "Allow Slider Mobile",
      type: "boolean",
      initialValue: true
    }),

    defineField({
      name: "largePaddingLeftRight",
      title: "Large Padding Lefft & Right",
      type: "boolean",
      initialValue: true
    }),

    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Text Within Image", value: "text_within_image" },
          { title: "Text Below Image", value: "text_below_image" },
        ],
        layout: "dropdown"
      }
    }),

    defineField({
      name: "image_size",
      title: "Image Size",
      type: "string",
      options: {
        list: [
          { title: "medium", value: "medium" },
          { title: "large", value: "large" },
        ],
        layout: "dropdown"
      }
    }),

    defineField({
      name: "textblock_items",
      title: "Text Block Items",
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
              name: "sub_title",
              title: "Sub Title",
              type: "string",
            },
            {
              name: "data",
              title: "Data",
              type: "number",
            },
            {
              name: "body",
              title: "Body",
              type: "blockContent",
            },

            {
              name: "button_url",
              title: "Button URL",
              type: "string",
            },
            {
               name: "image",
                title: "Image",
                type: "image",
            }
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Image With Text Block",
        media: media || undefined,
      };
    },
  },
});
