import { defineField, defineType } from "sanity";

export default defineType({
  name: "text_with_image",
  title: "Text With Image",
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
      name: "content_title",
      title: "Content title",
      type: "string",
    }),

    defineField({
      name: "sub_title",
      title: "Sub title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "button_label",
      title: "button_label",
      type: "string",
    }),

    defineField({
      name: "button_url",
      title: "Button Url",
      type: "string",
    }),

    defineField({
      name: "content_position",
      title: "Content Position",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio"
      }
    }),

    defineField({
      name: "section_position",
      title: "Section Position",
      type: "string",
      options: {
        list: [
          { title: "image_right", value: "image_right" },
          { title: "image_left", value: "image_left" },
        ],
        layout: "radio"
      }
    }),

    defineField({
      name: "image_size",
      title: "Image Size",
      type: "string",
      options: {
        list: [
          { title: "small", value: "small",  },
          { title: "medium", value: "medium" },
          { title: "large", value: "large" },
        ],
        layout: "radio"
      }
    }),

    defineField({
      name: "enable_border",
      title: "Enable Border",
      type: "boolean",
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
