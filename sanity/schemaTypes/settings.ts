import { defineField, defineType } from "sanity";
import { SearchIcon } from "@sanity/icons";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: SearchIcon,
  
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "enablePopup",
      title: "Enable Popup Second",
      type: "boolean",
    }),
    defineField({
      name: "popup1_title",
      title: "First Popup Title",
      type: 'string',
    }),
    defineField({
      name: "popup2_title",
      title: "Second Popup Title",
      type: 'string',
    }),
    defineField({
      name: "popup1",
      title: "First Popup Description",
      type: 'blockContent',
    }),
    defineField({
      name: "popup2",
      title: "Second Popup Description",
      type: 'blockContent',
    }),
  ],
});
