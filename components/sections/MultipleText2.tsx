"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";

const MultipleText2 = ({ title, text_items, padding_top_bottom, background }: any) => {
  return (
    <div style={{paddingTop: `${padding_top_bottom}px`, paddingBottom: `${padding_top_bottom}px`, background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      <h1 className="text-[#30282A] text-[65px] tracking-[1.3px] leading-[56px] boing_thin mb-[45px]">{title}</h1>
      {text_items && text_items.map((item: any, index: number) => {
        return (
          <div className={`text_items item${index} flex flex-col lg:flex-row justify-between py-[17px]`} key={index}>
            <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0">{item.title}</div>
            <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] tracking-[0.26px] leading-[18px] lg:w-[50%] "><PortableText value={item.body}/></div>


          </div>
        )
      })}
    </div>
  );
};

export default MultipleText2;
