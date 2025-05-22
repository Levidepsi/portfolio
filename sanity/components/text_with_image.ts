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
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Multiple Images", value: "multiple_images" },
          { title: "Single Image", value: "single_image" },
        ],
        layout: "dropdown"
      }
    }),

    defineField({
      name: "title",
      title: "title",
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
       hidden: ({parent}) => parent?.layout != "single_image"

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
        name: "slideshow_images",
        title: "Slide Show Images",
       type: 'array',
       hidden: ({parent}) => parent?.layout != "multiple_images",
        of: [
          {
                name: "slides",
                type: "object",
                fields: [
                    
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                    },
                   
                ],
                preview: {
                  select: {
                    title: "title", // Get the 'title' from the referenced 'projects' document
                    media: "image", // Optional: Get the 'image' if available
                  },
                  prepare({ title, media }) {
                    return {
                      title: title,
                      media: media || undefined, // Use image if available
                    };
                  },
                },
            }
        ]
    }),
    
    defineField({
      name: "multipleText",
      title: "Multiple Text",
      type: 'array',
        of: [
          {
                name: "texts",
                type: "object",
                fields: [
                    
                  {
                    name: "body",
                    title: "Body",
                    type: "blockContent",
                  },
                  
                ],
                preview: {
                  select: {
                    title: "Multiple Text", // Get the 'title' from the referenced 'projects' document
                  },
                  prepare({ title  }) {
                    return {
                      title: title,
                    };
                  },
                },
            }
        ]
    }),
    
  ],

  preview: {
    select: {
      title: "title",
      sub_title: "sub_title",
      media: "image",
    },
    prepare(selection) {
      const { title, media, sub_title } = selection;
      return {
        title: title || sub_title ||  "Text With Image Block",
        media: media || undefined,
      };
    },
  },
});
