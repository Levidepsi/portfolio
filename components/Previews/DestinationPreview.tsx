"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";
import { DESTINATION_QUERY, PAGE_QUERY } from "../../sanity/lib/client";
import Pages from "../pages/Pages";
import Destinations from "../pages/destinations/Destinations";


export default function DestinationPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    DESTINATION_QUERY,
    params,
    { initial }
  );

  return data ? (
    <Destinations page={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}