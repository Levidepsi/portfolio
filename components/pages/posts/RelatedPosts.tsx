"use client"

import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import TruncatedPortableText from "../../../hooks/TruncatedText";

const RelatedPosts = ({ related }: any) => {
  return (
    <div className="px-[18px] mb-[100px]">
      <h1 className="w-full text-[45px] text-center lg:text-[65px] leading-[56px] tracking-[1.3px] uppercase text-[#30282A] boing_thin my-[50px] lg:my-[92px]">MORE ARTICLES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {related.data.related_post && related.data.related_post.map((item: any, index: number) => {
          return (
            <Link key={index} href={`/news-and-press/${item.post.slug}`}>
              <Image src={item.post.mainImage} alt={`${item.post.title}`} width={1000} height={1000} className="object-cover w-full h-auto mb-[23px]" />
              <h1 className="text-[13px] tracking-[1.56px] leading-[20px] text-[#30282A] uppercase avenir_roman mb-[23px]">{item.post.title}</h1>
              <div className="[&>p]:text-[#30282A] text-[15px] tracking-[0.15px] leading-[20px] ">
                <TruncatedPortableText blocks={item.post.body} maxLength={205} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
