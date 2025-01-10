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
      <div className="timeline-wrapper flex-row-reverse flex md:flex-row md:flex-wrap md:justify-start md:gap-y-[25px]">
        <div className="timeline-arrow"></div>
        <div className="timeline-items">
            {timeline_items && timeline_items.map((item: any, index: number) => {
                return (
                <div className={`timeline-item w-[100%] flex  md:w-[16.66%] lg:w-[16.66%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                    <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%]">
                        {item.title}
                    </div>
                    {item.body && (
                        <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] pb-[10px] tracking-[0.26px] leading-[18px] lg:w-[80%] "><PortableText value={item.body} /></div>
                    )}
                </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
