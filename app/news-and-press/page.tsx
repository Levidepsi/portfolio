
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { Metadata } from "next";
import PostsPreview from "../../components/Previews/PostsPreview";
import Posts from "../../components/pages/posts/Posts";
import { POSTS_QUERY } from "../../sanity/lib/client";
import { loadQuery } from "../../sanity/lib/store";


export async function generateMetadata(): Promise<Metadata> {
  
	const { isEnabled } = await draftMode()



	const aspectRatio = 1.91; // The desired aspect ratio
	let width = 1200; // Default width

	let height = Math.round(width / aspectRatio);

	if (height > 630) {
		height = 630;
		width = Math.round(height * aspectRatio);
	}

	let metaTitle = `91 Group | News & Press`;
	const metadata = {
		title: metaTitle,
		description: "",

		openGraph: {  
			title: metaTitle,
			description: "Personalising a necklace adds an extra layer of sentiment and uniqueness to your jewellery. If you’re keen to create a custom piece that speaks volumes, you’re in the right place. Personalising a necklace…",
			url: `https://ninety-one-group.vercel.app/news-and-press`,
			siteName: `${metaTitle}`,
			images: [
				{
					url: "https://cdn.sanity.io/images/3wob2s2a/production/2be76f5b7e49a172288749e19a1b30507655f379-617x729.png",
					width: 1200,
					height: 630,
					aspectRatio: aspectRatio,
				},
			],
			type: "website",
		},
	};
	return metadata;
}

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