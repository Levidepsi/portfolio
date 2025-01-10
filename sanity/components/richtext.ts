import {defineField, defineType} from "sanity";

export default defineType({
  name: "richtext",
  title: "Richtext",
  type: "object",
  fields: [
    defineField({
      name: "bgcolor",
      title: "Background color",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],
});
