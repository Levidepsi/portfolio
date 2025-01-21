import Image from "next/image";
import styles from "./page.module.css";
import { draftMode } from "next/headers";
import { loadQuery } from "../../../sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { POSTS_QUERY, POST_QUERY } from "../../../sanity/lib/client";
import PostPreview from "../../../components/Previews/PostPreview";
import Post from "../../../components/pages/posts/Post";


export default async function Page({
    params,
  }: {
    params: { slug: string,  }
  }) {
  const {isEnabled} = draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const { slug } = params
 
  const post = await loadQuery<SanityDocument>(POST_QUERY, {slug}, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  })


  return isEnabled ? (
    <PostPreview initial={post} params={params} />
  ) : (
    <Post post={post.data} />
  );
}