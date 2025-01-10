"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import Image from "next/image";

const Timeline = ({ title, timeline_items, background }: any) => {
  return (
    <div style={{ background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      {title && (
        <h1 className="text-[#30282A] text-center text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] tracking-[1.3px] boing_thin mb-[45px] lg:mb-[60px] lg:max-w-[451px] lg:mx-[auto]">{title}</h1>
      )}
      <div className="md:flex md:flex-wrap md:justify-start md:gap-y-[25px]">
        {timeline_items && timeline_items.map((item: any, index: number) => {
          // console.log(item.slug.slug)
            return (
            <div className={`text_items item${index} flex justify-between md:w-[45%] lg:w-[33.33%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-4">
                    <div className="title_icon">
                        {item.image && (
                            <Image src={item.image} alt={item.title} width={2000} height={2000} priority className="object-contain mb-4 max-w-[50px] mx-[auto]" />
                        )}
                    </div>
                    <PortableText value={item.title} />
                </div>
                <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] pb-[10px] tracking-[0.26px] leading-[18px] lg:w-[80%] "><PortableText value={item.body} /></div>
                <Link href={`${item.slug != null ? `/companies/${item.slug.slug}` : ""}`} className="text-[13px] avenir_roman text-[#30282A] tracking-[0.26px] leading-[18px] lg:w-[80%] ">{item.learn_more}</Link>
                
            </div>
            )
        })}
      </div>
    </div>
  );
};

export default Timeline;
