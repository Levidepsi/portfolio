
"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { HOME_QUERY } from "../../sanity/lib/client";
import Homepage from "../pages/Homepage";


export default function HomePreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    HOME_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Homepage data={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}