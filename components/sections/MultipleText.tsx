"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";

const MultipleText = ({ title, text_items, padding_top_bottom, background, text_color, title_max_width, title_padding_bottom }: any) => {
  return (
    <div style={{paddingTop: `${padding_top_bottom}px`, paddingBottom: `${padding_top_bottom}px`, background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      {title && 
        <h1 
      style={{color: `${text_color}`, maxWidth: `${title_max_width}px`, marginBottom: `${title_padding_bottom}px`}} 
      className={`text-[#30282A] text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] tracking-[1.3px] boing_thin mb-[45px]`}>{title}</h1>
      }
      {text_items && text_items.map((item: any, index: number) => {
        return (
          <div 
          style={{ 
            borderBottom: `1px solid ${text_color}`,
            borderTop: index === 0 ? `1px solid ${text_color}` : undefined,
          }} 
          className={`text_items item${index} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
            <div style={{ color: `${text_color}` }} className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0">{item.title}</div>
            <div style={{ color: `${text_color}` }} className={`multipletext-body text-[13px] text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body}/></div>
          </div>
        )
      })}
    </div>
  );
};

export default MultipleText;
