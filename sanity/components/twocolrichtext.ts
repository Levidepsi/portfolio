import { defineField, defineType } from "sanity";

export default defineType({
  name: "two_col_richtext",
  title: "Two Column Richtext",
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
      name: "margin_top",
      title: "Margin Top",
      type: "number",
    }),
    defineField({
      name: "margin_bottom",
      title: "Margin Bottom",
      type: "number",
    }),
    defineField({
      name: "left_content",
      title: "Left content",
      type: "blockContent",
    }),
    defineField({
      name: "right_content",
      title: "Right content",
      type: "blockContent",
    }),
    defineField({
      name: "tableData",
      title: "Table Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "column1", type: "string", title: "Column 1" },
            { name: "column2", type: "string", title: "Column 2" },
            { name: "column3", type: "string", title: "Column 3" },
          ],
        },
      ],
    }),
    defineField({
      name: "add_border_bottom",
      title: "Add border_bottom",
      type: "boolean",
      description: "If true add border bottom",
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
