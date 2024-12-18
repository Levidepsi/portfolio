"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const ImageBlockText = ({imageblock_items}: any) => {
  return (
    <div className="imageblock_items_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] lg:px-[32px] mb-[50px]">
      {imageblock_items && imageblock_items.map((item: any, i: number) => {
        return (
          <div key={i} className="relative wrapper_imageitem overflow-hidden">
            <Image src={item.image} priority alt={item.title} width={1000} height={1000} className="w-full h-full object-cover relative overflow-hidden" />
            <div className="bg-[#E6ECF5] w-full h-full p-5">
              <h2 className="apercu text-[#0D4BA0] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] pb-[10px]">{item.title}</h2>
              <p className="apercu text-[#0D4BA0] text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] pb-[20px]">{item.sub_title}</p>
              <div className="apercu text-[#0D4BA0] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px]"><PortableText value={item.body}/></div>
              
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ImageBlockText;
