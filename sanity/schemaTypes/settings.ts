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

    
  ],
});
