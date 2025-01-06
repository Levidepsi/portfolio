
import { draftMode } from "next/headers";
import { ALLPAGE_QUERY, HOME_QUERY } from "../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../sanity/lib/store";
import Homepage from "../components/pages/Homepage";
import HomePreview from "../components/Previews/HomePreview";
import { Metadata } from "next";


// export async function generateMetadata(): Promise<Metadata> {
  
// 	const { isEnabled } = await draftMode()


// 	const page: any = await loadQuery<SanityDocument[]>(HOME_QUERY, {}, {
//     perspective: isEnabled ? "previewDrafts" : "published",
//     cache: "no-store"
//   },);

// 	const aspectRatio = 1.91; // The desired aspect ratio
// 	let width = 1200; // Default width

// 	let height = Math.round(width / aspectRatio);

// 	if (height > 630) {
// 		height = 630;
// 		width = Math.round(height * aspectRatio);
// 	}

// 	let metaTitle = `Osprey`;
// 	const metadata = {
// 		title: metaTitle,
// 		description: "",

// 		openGraph: {  
// 			title: metaTitle,
// 			description: page.data.meta_description ? page.data.meta_description : "Osprey",
// 			url: `https://osprey-one.vercel.app/`,
// 			siteName: `${metaTitle}`,
// 			images: [
// 				{
// 					url: page.data.meta_image,
// 					width: 1200,
// 					height: 630,
// 					aspectRatio: aspectRatio,
// 				},
// 			],
// 			type: "website",
// 		},
// 	};
// 	return metadata;
// }

export default async function Home() {
  
	const { isEnabled } = await draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const homedata = await loadQuery<SanityDocument[]>(HOME_QUERY, {}, {
    perspective: isEnabled ? "previewDrafts" : "published",
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