import { defineField, defineType } from "sanity";

export default defineType({
  name: "multiple_text",
  title: "Multiple Text",
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
      name: "left_description",
      title: "Left Description",
      type: "blockContent",
      description: "this will be on left side ",

    }),
   
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "this will be on right side ",

    }),


    defineField({
        name: "texts_accordions",
        title: "Text Accordions",
       type: 'array',
        of: [
          {
                name: "accordions",
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


    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Gray", value: "gray" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    }),
   
    defineField({
      name: "paddingTop",
      title: "Padding Top",
      type: "number",
    }),

    defineField({
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "number",
    }),
    defineField({
      name: "descriptions_max_width",
      title: "Description Max Width",
      type: "number",
    }),

    
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title,  } = selection;
      return {
        title: title || "Multiple Text Block",
      };
    },
  },
});
