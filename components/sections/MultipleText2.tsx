"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import Image from "next/image";

const MultipleText2 = ({ title, text_items, padding_top_bottom, background, image }: any) => {
  console.log(text_items)
  return (
    <div style={{paddingTop: `${padding_top_bottom}px`, paddingBottom: `${padding_top_bottom}px`, background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      {title && (
        <h1 className="text-[#30282A] text-center text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] tracking-[1.3px] boing_thin mb-[45px] lg:mb-[60px] lg:max-w-[451px] lg:mx-[auto]">{title}</h1>
      )}
      <div className="md:flex md:flex-wrap md:justify-between md:gap-y-[25px]">
        {text_items && text_items.map((item: any, index: number) => {
            return (
            <div className={`text_items item${index} flex md:w-[45%] lg:w-[32%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-4">
                    <div className="title_icon">
                        {item.image && (
                            <Image src={item.image} alt={item.title} width={2000} height={2000} priority className="object-contain mb-4 max-w-[50px] mx-[auto]" />
                        )}
                    </div>
                    {item.title}
                </div>
                <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] tracking-[0.26px] leading-[18px] lg:w-[80%] "><PortableText value={item.body}/></div>
            </div>
            )
        })}
      </div>
    </div>
  );
};

export default MultipleText2;
