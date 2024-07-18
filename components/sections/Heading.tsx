"use client"

import { PortableText } from "@portabletext/react";
import { useWindowWide } from "../../hooks/ScreenSize";

const Heading = ({ title, description, description2, padding_top,show_border, description2_max_width, description2_font_size,descriptions_max_width }: any) => {
  let pt_moble = padding_top / 2
  const desktop = useWindowWide(1024)

  let mobileFont = description2_font_size - 2

  return (
    <div
      style={desktop ?{
        paddingTop: padding_top ? `${padding_top}px` : pt_moble ? `${pt_moble}px` : ""
      } : {
        paddingTop: pt_moble ?  `${pt_moble}px` : ""
      }}
      className={`mx-[20px] lg:mx-[32px] py-[70px] flex flex-col lg:flex-row ${show_border ? "border-b-[1px] border-solid border-[#0D4BA0]" : ""}`}>
      <div className={`w-full flex flex-col ${description ? "lg:flex-col" : "lg:flex-row"} ${description2 ? "" : "md:max-w-[688px]"}`}>
        {title && <h1 className="text-[30px] max-w-[296px] leading-[40px] lg:text-[40px] lg:leading-[50px] text-[#0D4BA0] apercu pb-[20px]">{title}</h1>}
        <div
          style={{
            maxWidth: descriptions_max_width ? `${descriptions_max_width}px` : ""
          }}
          className="flex flex-col lg:flex-row justify-between max-w-[990px]">
           {description && 
              <div className={`[&>p]:text-[#0D4BA0]  ${description2 ? "md:max-w-[336px]" : ""} text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] apercu pb-5`}>
                <PortableText value={description} />
            </div>
          }
          {description2 && 
            <div
              style={{
                maxWidth: description2_max_width ? `${description2_max_width}px` : "",
                fontSize: desktop ? `${description2_font_size}px` : `${mobileFont}px`
              }}
              className={`[&>p]:text-[#0D4BA0] heading_description2 text-[16px] leading-[20px] lg:pl-[100px] lg:text-[18px] lg:leading-[22px] apercu max-w-[666px]`}>
              <PortableText value={description2} />
          </div>
          }
       </div>
      </div>
       
    </div>
  );
};

export default Heading;
