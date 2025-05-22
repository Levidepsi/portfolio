import { defineField, defineType } from "sanity";


  export default defineType({
  name: "mapwithimage",
  title: "mapwithimage",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    

     defineField({
        name: "destinations",
        title: "destinations",
        type: 'array',
        of: [
            {
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
                    {
                      name: 'mapUrl',
                      title: 'Map Url',
                      type: 'string',
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                    },
                ]
            }
        ]
    }),
  ],
});