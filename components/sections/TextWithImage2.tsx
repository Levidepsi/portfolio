"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const TextWithImage2 = ({ textwimage_items2 }:any) => {
  return (
    <div className="">
      {textwimage_items2 && textwimage_items2.map((item: any, index: number) => {
        return (
          <div style={{background: `${item.background}`}} className={`flex p-5 lg:px-[181px] py-[98px] flex-col-reverse ${item.content_position == true ? "lg:flex-row-reverse" : "lg:flex-row"}`} key={index}>
            <div className={`lg:w-[50%] ${item.content_position == true ? "lg:pl-[32px]" : ""}`}>
              <div className=" lg:flex flex-col h-full justify-between">
              <h1 className="text-[#EFEBE5] text-[65px] lg:max-w-[480px] tracking-[1.3px] leading-[56px] boing_thin mb-5 lg:mb-0">{item.title}</h1>
              <div className="avenir_book [&>p]:text-[#EFEBE5] lg:max-w-[440px] text-[15px] tracking-[0.3px] leading-[22px]"><PortableText value={item.body}/></div>
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

export default TextWithImage2;
