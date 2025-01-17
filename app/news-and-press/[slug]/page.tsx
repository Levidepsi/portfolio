
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";

import { Metadata } from "next";
import { loadQuery } from "../../../sanity/lib/store";
import { POST_QUERY, POSTS_QUERY } from "../../../sanity/lib/client";
import PostPreview from "../../../components/Previews/PostPreview";
import Post from "../../../components/pages/posts/Post";
import RelatedPosts from "../../../components/pages/posts/RelatedPosts";

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {
  params: Params
}): Promise<Metadata> {
    const params = await props.params
    const slug = params.slug
  const {isEnabled} = await draftMode()

  
  const page = await loadQuery<SanityDocument>(POST_QUERY, {slug}, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: isEnabled ? "previewDrafts" : "published",
    cache: "no-store"

  })

	const aspectRatio = 1.91; // The desired aspect ratio
	let width = 1200; // Default width

	let height = Math.round(width / aspectRatio);

	if (height > 630) {
		height = 630;
		width = Math.round(height * aspectRatio);
	}

	let metaTitle = `91 Group | ${slug}`;
	const metadata = {
		title: metaTitle,
		description: "",

		openGraph: {  
			title: metaTitle,
			description: page.data.meta_description ? page.data.meta_description : "91 Group",
			url: `hhttps://ninety-one-group.vercel.app/news-and-press/${slug}`,
			siteName: `${metaTitle}`,
			images: [
				{
					url: page.data.meta_image,
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


export default async function Page(props: {
  params: Params
}) {
  const {isEnabled} = await draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
   const params = await props.params
  const slug = params.slug
  
  const page = await loadQuery<SanityDocument>(POST_QUERY, {slug}, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: isEnabled ? "previewDrafts" : "published",
    cache: "no-store"

  })

    const postsData = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
      perspective: isEnabled ? "previewDrafts" : "published",
      cache: "no-store"
    },);

  return isEnabled ? (
    <>
      <PostPreview initial={page} params={params} />
      <RelatedPosts related={page} />
    </>
  ) : (
      <>
        <Post page={page.data} />
        <RelatedPosts related={page} />

      </>
  );
}


