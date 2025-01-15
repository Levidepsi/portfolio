"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import Image from "next/image";

const Timeline = ({ title, timeline_items, background }: any) => {
  return (
    <div style={{ background: `${background}` }} className="py-[50px] px-5 md:pl-[0]">
      
      {title && (
        <h1 className="text-[#30282A] text-center text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] tracking-[1.3px] boing_thin mb-[45px] lg:mb-[60px] lg:max-w-[451px] lg:mx-[auto]">{title}</h1>
      )}
      <div style={{ background: `${background}`}} className=" multiple_text_wrapper ">
        <div className="timeline-arrow">
          <div className="arrow"></div>
        </div>
      <div className="timeline-wrapper left-[30%] md:left-[50%] lg:left-0 flex-row-reverse md:mr-[30px] flex md:flex-col md:flex-wrap relative md:justify-start md:gap-y-[25px]">
        
        <div className="timeline-items flex lg:justify-center md:pr-[100px] lg:pr-[120px]">
            {timeline_items && timeline_items.map((item: any, index: number) => {
                return (
                <div className={`timeline-item min-h-[200px] lg:min-h-[100px] justify-center items-center flex gap-y-[10px] md:w-[16.66%] lg:w-[16.66%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                    <div className="arrow_wrap"></div>
                    <div className="timeline-item-content flex flex-col items-center gap-[10px]">
                      
                      <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[100%]">
                          {item.title}
                      </div>
                      {item.body && (
                          <div className="timeline-text-content text-[13px] avenir_roman [&>p]:text-[#30282A] mb-[0] tracking-[0.26px] leading-[18px] lg:w-100%] "><PortableText value={item.body} /></div>
                      )}
                    </div>
                </div>
                )
            })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Timeline;
