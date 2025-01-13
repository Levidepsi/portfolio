
"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { POSTS_QUERY } from "../../sanity/lib/client";
import Page from "../pages/posts/Posts";


export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  console.log(data)

  return data ? (
    <Page posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}