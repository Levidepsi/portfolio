"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const TextWithImage = ({ textwimage_items, padding_top }:any) => {
  return (
    <div style={{paddingTop: `${padding_top}px`}} className="px-5 py-5">
      {textwimage_items && textwimage_items.map((item: any, index: number) => {
        return (
          <div className={`flex  flex-col-reverse ${item.content_position == true ? "lg:flex-row-reverse" : "lg:flex-row"}`} key={index}>
            <div className={`lg:w-[50%] ${item.content_position == true ? "flex justify-end" : ""}`}>
              <div className={` lg:flex flex-col h-full ${item.body ? "justify-between" : "justify-end"}`}>
              <h1 className="text-[#30282A] text-[65px] lg:max-w-[480px] tracking-[1.3px] leading-[56px] boing_thin mb-5">{item.title}</h1>
              <div className="avenir_book [&>p]:text-[#30282A] lg:max-w-[450px] text-[15px] tracking-[0.3px] leading-[22px]"><PortableText value={item.body}/></div>
            </div>  
            </div>
            <div className="lg:w-[50%]">
            <Image src={item.image} alt={item.title} width={2000} height={2000} priority className="object-cover mb-5 lg:mb-0" />
            </div>
          </div>
          )
      })}
    </div>
  );
};

export default TextWithImage;
