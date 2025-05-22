import { defineField, defineType } from "sanity";
import { HomeIcon, BookIcon } from "@sanity/icons";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: BookIcon,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "content",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "string",
      group: "seo",
    }),

    defineField({
      name: "meta_image",
      title: "Meta Image",
      type: "image",
      group: "seo",

    }),
    defineField({
      name: "components",
      title: "Components",
      type: "array",
      group: "content",
      of: [
        { type: "slider" },
        { type: "banner" },
        { type: "heading" },
        { type: "multiple_text" },
        { type: "text_with_image" },
        { type: "featured_banner" },
        { type: "contact" },
        { type: "image_with_text_block" },
        { type: "richtext" },
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "hero",
              title: "Hero",
              of: ["slider", ],
            },
            {
              name: "text",
              title: "Text Blocks",
              of: [
                "heading",
                "multiple_text",
                "richtext",
                "text_with_image",
              ],
            },
            {
              name: "banner",
              title: "Banners",
              of: ["banner", "featured_banner"],
            },
            {
              name: "contact",
              title: "Contact",
              of: ["contact"],
            },
            {
              name: "image",
              title: "Images",
              of: ["image_with_text_block"],
            },
          ],
          views: [
            {
              name: "grid",
              previewImageUrl: (block: any) => `/sanity/preview/${block}.png`,
            },
            { name: "list" },
          ],
        },
      },
    })
    
  ],
  
 orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
    {
      title: 'Popularity',
      name: 'popularityDesc',
      by: [
        {field: 'popularity', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
