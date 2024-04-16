
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";



export default function Pages({ post }: any) {
  const { title, mainImage, body } = post;


  return (
    <main className="container mx-auto prose prose-lg p-4">
      {title ? <h1>{title}</h1> : null}
     
    </main>
  );
}