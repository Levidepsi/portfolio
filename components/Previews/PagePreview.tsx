"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";
import Post from "../pages/posts/Post";
import { PAGE_QUERY, POST_QUERY } from "../../sanity/lib/client";


export default function PagePreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    PAGE_QUERY,
    params,
    { initial }
  );

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}