// ./sanity/presentation/locate.ts

import { DocumentLocationResolver } from "sanity/presentation";
import { map } from "rxjs";
import home from "../../sanity/schemaTypes/home";
import post from "../../sanity/schemaTypes/post";
import page from "../../sanity/schemaTypes/page";
import companies from "../../sanity/schemaTypes/companies";


const doctypes: any =  [home.name, post.name, page.name, companies.name ]


// Pass 'context' as the second argument
export const locations: DocumentLocationResolver = (params, context) => {
  // Set up locations for post documents
  if (doctypes.includes(params.type)) {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      { perspective: "previewDrafts" } // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/${doc.slug.current}`,
            },
            {
              title: doc.title || "Untitled",
              href: `/companies/${doc.slug.current}`,
            },
            {
              title: "Posts",
              href: "/",
            },
            {
              title: "Home",
              href: "/",
            },
          ],
        };
      })
    );
  }
  return null;
}