
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { PAGE_QUERY } from "../../sanity/lib/client";
import { loadQuery } from "../../sanity/lib/store";
import PagePreview from "../../components/Previews/PagePreview";
import Pages from "../../components/pages/Pages";


export default async function Page({
    params,
  }: {
    params: { slug: string,  }
  }) {
  const {isEnabled} = draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const { slug } = params
 
  const page = await loadQuery<SanityDocument>(PAGE_QUERY, {slug}, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  })


  return isEnabled ? (
    <PagePreview initial={page} params={params} />
  ) : (
    <Pages page={page.data} />
  );
}