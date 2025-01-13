
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import PostsPreview from "../../components/Previews/PostsPreview";
import Posts from "../../components/pages/posts/Posts";
import { POSTS_QUERY } from "../../sanity/lib/client";
import { loadQuery } from "../../sanity/lib/store";


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

export default async function PostsPage() {
  
	const { isEnabled } = await draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const postsData = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: isEnabled ? "previewDrafts" : "published",
    cache: "no-store"
  },);
	

  return isEnabled ? (
    <PostsPreview initial={postsData} />
  ) : (
    <Posts posts={postsData.data} />
  )
}




export const revalidate = 1;