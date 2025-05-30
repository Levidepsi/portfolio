import { defineField, defineType } from "sanity";
import { ListIcon } from "@sanity/icons";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: ListIcon,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "logo",
      title: "LOGO",
    },
    {
      name: "links",
      title: "LINKS",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content"
    }),

    defineField({
      name: "header_logo",
      title: "Header Logo",
      type: "image",
      group: "logo"

    }),
    defineField({
      name: "header_logo2",
      title: "Header Logo 2",
      type: "image",
      group: "logo"

    }),

    defineField({
      name: "footer_logo",
      title: "Footer Logo",
      type: "image",
      group: "logo"

    }),

    defineField({
      name: "header_menu",
      title: "Header Menu",
      type: "array",
      group: "links",

      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "page",
              type: "object",
              fields: [
                {
                  title: "slug",
                  name: "slug",
                  type: "reference",
                  to: [{ type: "page" },{ type: "home" }],
                },
              ],
            },
            {
              name: "subMenu",
              title: "Sub Menu",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "custom_links",
                      title: "Custom Links",
                      type: "string",
                    },
                    {
                      name: "page",
                      type: "object",
                      fields: [
                        {
                          title: "slug",
                          name: "slug",
                          type: "reference",
                          to: [{ type: "destinations" }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: "footer_menu",
      title: "Footer Menu",
      type: "array",
      group: "links",

      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
              initialValue: "about",
            },
          ],
        },
      ],
    }),

      defineField({
        name: "contact_email",
        title: "Contact Email",
        type: "array",
        of: [{ type: "block" }],
      group: "content",

      }),
      defineField({
        name: "services",
        title: "services",
        type: "array",
        of: [{ type: "block" }],
      group: "content",

      }),
      defineField({
        name: "about",
        title: "about",
        type: "array",
        of: [{ type: "block" }],
      group: "content",

      }),
      defineField({
        name: "company_info",
        title: "Company Info",
        type: "array",
        of: [{ type: "block" }],
      group: "content",

      }),


    // defineField({
    //   name: "social_links",
    //   title: "social links",
    //   type: "array",
    //   group: "links",

    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         },
    //         {
    //           name: "link",
    //           title: "Link",
    //           type: "string",
    //           initialValue: "about",
    //         },
    //       ],
    //     },
    //   ],
    // }),
  ],
});
