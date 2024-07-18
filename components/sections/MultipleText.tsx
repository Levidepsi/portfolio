"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";

const MultipleText = ({ title, text_items, padding_top }: any) => {
  let pt_moble = padding_top / 2
  const desktop = useWindowWide(1024)
  return (
    <div
      style={desktop ?{
        paddingTop: padding_top ? `${padding_top}px` : pt_moble ? `${pt_moble}px` : ""
      } : {
        paddingTop: pt_moble ?  `${pt_moble}px` : ""
      }}
      className="px-5 lg:px-[32px] pb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-5">
      {text_items && text_items.map((items: any, i: number) => {

        return (
          <div key={i} className={`bg-[#e6edf5] px-[30px] md:px-[50px] lg:px-[88px] py-[20px] lg:py-[40px]  `}>
            <h2 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] text-[#0D4BA0] pb-[20px] apercu">{items.title}</h2>
            <div className="[&>p]:text-[#0D4BA0] text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22px] pb-[40px] lg:pb-[70px] apercu">
              <PortableText value={items.body}/>
            </div>

            {items.show_link && 
            <Link
              className="text-[#E6ECF5] mb-[10px] border-solid border-[1px] apercu border-[#0D4BA0] block max-w-fit text-[13px] lg:text-[15px] hover:bg-[#E6ECF5] hover:text-[#0D4BA0] rounded-[29px] leading-[17px] lg:leading-[19px] bg-[#0D4BA0] py-[9px] px-[18px] transition-all duration-[0.7s]"
              href={items.link ? `/${items.link}` : "/"}
            >
              Learn more
            </Link>
            }
            
          </div>
        )
      })}
    </div>
  );
};

export default MultipleText;
