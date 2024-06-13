
import { draftMode } from "next/headers";
import { HOME_QUERY } from "../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../sanity/lib/store";
import Homepage from "../components/pages/Homepage";
import HomePreview from "../components/Previews/HomePreview";

export default async function Home() {
  const {isEnabled} = draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const homedata = await loadQuery<SanityDocument[]>(HOME_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    cache: "no-store"
  },);

  return isEnabled ? (
    <HomePreview initial={homedata} />
  ) : (
    <Homepage data={homedata.data} />
  )
}


export async function generateStaticParams() {
	return [
		{ slug: "/" }, // -> lets cache these pages as they will never change!
	];
}

export const revalidate = 1;