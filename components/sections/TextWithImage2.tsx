"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const TextWithImage2 = ({ textwimage_items2 }:any) => {
  return (
    <div className="">
      {textwimage_items2 && textwimage_items2.map((item: any, index: number) => {
        let color: string = item.color
        return (
          <div style={{background: `${item.background}`}} className={`flex p-5 lg:px-[181px] py-[98px] flex-col-reverse ${item.content_position == true ? "lg:flex-row-reverse" : "lg:flex-row"}`} key={index}>
            <div className={`lg:w-[50%] ${item.content_position == true ? "lg:pl-[32px]" : ""}`}>
              <div className=" lg:flex flex-col h-full justify-between">
             {item.title &&  <h1 style={{color: `${item.color}`}} className="text-[#EFEBE5] text-[45px] mb-5 lg:text-[65px] tracking-[1.3px] lg:leading-[56px] lg:max-w-[480px]  boing_thin lg:mb-0">{item.title}</h1>}
              <div className={`avenir_book [&>p]:text-[${color ? `${color}` : `#EFEBE5`}] lg:max-w-[440px] text-[15px] tracking-[0.3px] leading-[22px]`}><PortableText value={item.body}/></div>
            </div>  
            </div>
            <div className="lg:w-[50%]">
            <Image src={item.image} alt={item.title ? item.title : "TExt With Image 2"} width={2000} height={2000} priority className="object-cover mb-5 lg:mb-0" />
            </div>
          </div>
          )
      })}
    </div>
  );
};

export default TextWithImage2;
