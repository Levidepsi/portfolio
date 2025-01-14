import {defineField, defineType} from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "string",
    }),

    defineField({
      name: "meta_image",
      title: "Meta Image",
      type: "image",
    }),
    defineField({
      name: "menu_image",
      title: "Menu Image",
      type: "image",
    }),

    defineField({
      name: "hamburger_color",
      title: "Hamburger Color",
      type: "string",
    }),

    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [
        {
          type: "slider",
          title: "Slider",
        },
        {
          type: "banner",
          title: "Banner",
        },
        {
          type: "heading",
          title: "Heading",
        },
        {
          type: "richtext",
          title: "Richtext",
        },
        {
          type: "multiple_text",
          title: "Multiple Text",
        },
        {
          type: "multiple_text2",
          title: "Multiple Text 2",
        },
        {
          type: "text_with_image",
          title: "Text With Image",
        },
        {
          type: "featured_banner",
          title: "Featured Banner",
        },
        {
          type: "text_with_image2",
          title: "Text With Image 2",
        },
        {
          type: "multiple_image",
          title: "Multiple Image",
        },
        {
          type: "people",
          title: "People",
        },
        {
          type: "timeline",
          title: "Timeline",
        },
        {
          type: 'map_description',
          title: 'Map Description',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
