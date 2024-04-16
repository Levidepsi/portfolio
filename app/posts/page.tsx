import Image from "next/image";
import styles from "./page.module.css";
import { draftMode } from "next/headers";
import { loadQuery } from "../../sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { POSTS_QUERY } from "../../sanity/lib/client";
import PostsPreview from "../../components/Previews/PostsPreview";
import Posts from "../../components/pages/posts/Posts";

export default async function Home() {
  const {isEnabled} = draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const posts = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });


  return draftMode().isEnabled ? (
    <PostsPreview initial={posts} />
  ) : (
    <Posts posts={posts.data} />
  )
}