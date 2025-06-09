import { defineField, defineType } from "sanity";

export default defineType({
  name: "accordions",
  title: "Accordions",
  type: "object",
  fields: [
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
    defineField({
      name: "enablePaddingTop",
      title: "Enable Padding Top",
      type: "boolean",
    }),
    defineField({
      name: "accordionData",
      title: "Accordion Data",
      type: "array",
      of: [
        {
          type: "object",
          title: "Accordion Section",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "subtitle",
              title: "Sub Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "enableCheckBox",
              title: "Enable Check Box",
              type: "boolean",
            }),
            defineField({
              name: "alwaysActive",
              title: "Always Active",
              type: "boolean",
            }),
            defineField({
              name: "left_content",
              title: "Usage",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "right_content",
              title: "Sharing Data",
              type: "array",
              of: [{ type: "block" }],
            }),
            
            defineField({
              name: "cookieGroups",
              title: "Cookie Groups",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Cookie Group",
                  fields: [
                    defineField({
                      name: "groupTitle",
                      title: "Group Title",
                      type: "string",
                    }),
                    defineField({
                      name: "cookies",
                      title: "Cookies",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          title: "Cookie",
                          fields: [
                            defineField({
                              name: "name",
                              title: "Name",
                              type: "blockContent",
                              preview: {
                                select: {
                                  title: "groupTitle",
                                },
                                prepare(selection) {
                                  const { title,  } = selection;
                                  return {
                                    title: title || "Cookie",
                                  };
                                },
                              },
                            }),
                            defineField({
                              name: "expiration",
                              title: "Expiration",
                              type: "blockContent",
                              preview: {
                                select: {
                                  title: "groupTitle",
                                },
                                prepare(selection) {
                                  const { title,  } = selection;
                                  return {
                                    title: title || "Cookie",
                                  };
                                },
                              },
                            }),
                            defineField({
                              name: "function",
                              title: "Function",
                              type: "blockContent",
                              preview: {
                                select: {
                                  title: "groupTitle",
                                },
                                prepare(selection) {
                                  const { title,  } = selection;
                                  return {
                                    title: title || "Cookie",
                                  };
                                },
                              },
                            }),
                            defineField({
                              name: "externalLink",
                              title: "External Link",
                              type: "url",
                              description: "Optional link to cookie policy or more info",
                            }),
                          ],
                        },
                        
                      ],
                      
                    }),
                  ],
                },
              ],
            }),
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
