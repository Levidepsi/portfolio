import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
    }),
    defineField({
      name: "image_title",
      title: "Image Title",
      type: "image",
    }),
    defineField({
      name: "max_width",
      title: "Max Width",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
    }),
    defineField({
      title: "Content Position",
      name: "content_position",
      type: "string",
      options: {
        list: [
          { title: "Top Right", value: "top_right" },
          { title: "Bottom Right", value: "bottom_right" },
          { title: "Top Left", value: "top_left" },
          { title: "Bottom Left", value: "bottom_left" },
          { title: "Center", value: "center" },
          { title: "Bottom Center", value: "bottom_center" },
          { title: "Top Center", value: "top_center" },
          { title: "Center Left", value: "center_left" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    }),
  ],
});
