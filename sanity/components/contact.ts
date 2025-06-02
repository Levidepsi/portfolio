import { defineField, defineType } from "sanity";
import { MyPreviewLAOUTBG } from "./layout/LayoutComponentBG";

  export default defineType({
	name: "contact",
	title: "Contact",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Layout 1", value: "layout1" },
          { title: "Layout 2", value: "layout2" },
        ],
      },
      components: {
        input: MyPreviewLAOUTBG,
      },
    }),
    defineField({
			name: "api",
			title: "Api",
      type: "string",
      hidden: ({parent}) => parent?.layout != "layout1",
    }),
    defineField({
			name: "image",
			title: "image",
      type: "image",
      hidden: ({parent}) => parent?.layout != "layout2",
		}),
		defineField({
			name: "description",
			title: "Description",
      type: "array",
      of: [{type: "block"}]
    }), 
		defineField({
			name: "telephone",
			title: "Telephone",
      type: "array",
      of: [{type: "block"}]
    }), 
    defineField({
			name: "email",
			title: "Email",
      type: "array",
      of: [{type: "block"}]
    }),
    defineField({
			name: "address",
			title: "Address",
      type: "array",
      of: [{type: "block"}]
		}),

    defineField({
      name: "socials",
      title: "socials",
      type: "array",
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
          preview: {
            select: {
              media: "image", // ✅ correct path to nested image
              title: "url",   // ✅ optional: shows URL as the title
            },
            prepare({ media, title }) {
              return {
                title: title || "Social URL",
                media,
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "requests",
      title: "requests",
      type: "array",
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            
          ],
          preview: {
            select: {
              title: "title",   // ✅ optional: shows URL as the title
            },
            prepare({  title }) {
              return {
                title: title || "Social URL",
              };
            },
          },
        },
      ],
    })
	],
});