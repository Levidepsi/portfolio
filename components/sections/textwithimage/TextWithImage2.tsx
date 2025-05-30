"use client"

import { Items2 } from "@/components/global/components";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const TextWithImage2 = (
  {
    title,
    paddingBottom,
    paddingTop,
    items
  }
    :
  {
    title: string;
    paddingBottom: number;
    paddingTop: number;
    items: Items2[]
  }
) => {

  return (
    <div className="mx-[32px] lg:mx-[109px] lg:pt-[100px] ">
      {title && <h1 className="text-[20px] tracking-[1.4px] leading-[29px] text-[#000427] moinster_regular mb-[32px] lg:mb-[64px]">{title}</h1>}
      <div>
        {items && items.map((item: Items2, index: number) => {
          return (
            <div className="item flex flex-col justify-between lg:flex-row border-b-[0.5px] border-solid border-[#000427] pb-[38px] mb-[38px]" key={index}>
              <div className="lg:w-[50%] flex flex-col justify-end lg:max-w-[446px] mb-[30px] lg:mb-0">
                <h2 className="moinster_regular text-[20px] text-[#000427] tracking-[1.4px] leading-[23px] mb-[30px] lg:mb-[50px]">{item.title}</h2>
                <div className={`item_description ${item.button_label ? "mb-[30px]" : ""}`}>
                  <PortableText value={item.body}/>
                </div>
                {item.button_label && 
                  <Link
                    className="border-solid button forma_djr border-[#0D0D0D] border-[0.5px] rounded-[5px] text-[12px] tracking-[0.24px] leading-[16px] text-[#0D0D0D] px-[10px] py-[5px] w-max"
                    href={`${item.button_url ? item.button_url : "/"}`}>
                    {item.button_label}
                  </Link>
                }
              </div>
              <div className="lg:w-[50%] ">
                  <Image src={item.image} alt={title} width={1000} height={1000} className="w-full h-[500px] lg:h-auto object-cover rounded-[10px]" />
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextWithImage2