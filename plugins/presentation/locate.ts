import { DocumentLocationResolver } from "sanity/presentation";
import { map } from "rxjs";
import home from "@/sanity/schemaTypes/home";

const doctypes: any = [
  home.name,
];

export const locations: DocumentLocationResolver = (params, context) => {
  if (doctypes.includes(params.type)) {
    // Sanitize params to ensure version is not undefined
    const sanitizedParams = {
      ...params,
      version: params.version ?? "", // or use a default version string
    };

    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      sanitizedParams,
      { perspective: "previewDrafts" }
    );

    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc.slug?.current) return null;

        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/${doc.slug.current}`,
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
};
