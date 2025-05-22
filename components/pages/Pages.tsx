
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import SpreadComponents from "../global/SpreadComponents";
// import SpreadComponents from "../global/SpreadComponents";



export default function Pages({ page }: any) {


  return (
    <>
   {page && page.components != null &&  <SpreadComponents components={page.components} />}

    </>
  );
}