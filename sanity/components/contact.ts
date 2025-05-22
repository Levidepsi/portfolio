import { defineField, defineType } from "sanity";


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
			name: "description",
			title: "Description",
      type: "array",
      of: [{type: "block"}]
    }), 
    defineField({
			name: "api",
			title: "Api",
			type: "string",
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
        name: "interests",
        title: "Interests",
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
                ]
            }
        ]
    }),
	],
});