import { defineField, defineType } from "sanity";

export default defineType({
  name: "quote_with_richtext",
  title: "Quote with Richtext",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "quote_content",
      title: "Quote content",
      type: "blockContent",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "button_label",
      title: "Button label",
      type: "string",
    }),
    defineField({
      name: "button_url",
      title: "Button URL",
      type: "string",
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
        title: title || "Text With Image Block",
        media: media || undefined,
      };
    },
  },
});
