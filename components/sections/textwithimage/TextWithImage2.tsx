"use client"

import { Items2 } from "@/components/global/components";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import {motion, useScroll, useTransform} from "motion/react"
import { useWindowWide } from "@/hooks/ScreenSize";

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

    const desktop = useWindowWide(1024);
  

  return (
    <div className="mx-[32px] lg:mx-[109px] lg:pt-[100px] ">
      {title && <h1 className="text-[20px] tracking-[1.4px] leading-[29px] 2xl:text-[1.302vw] 2x:leading-[1.888vw] 2xl:tracking-[0.091vw] text-[#000427] moinster_regular mb-[32px] lg:mb-[64px]">{title}</h1>}
      <div>
        {items && items.map((item: Items2, index: number) => {
          return (
            <div className="item flex flex-col justify-between lg:flex-row border-b-[0.5px] border-solid border-[#000427] pb-[38px] mb-[38px]" key={index}>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(-50px)"  }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  easing: [0.19, 1, 0.22, 1],
                }}
                viewport={{once: true}}
                className="lg:w-[50%] flex flex-col justify-end lg:max-w-[446px] mb-[30px] lg:mb-0">
                <h2 className="moinster_regular text-[20px] text-[#000427] tracking-[1.4px] leading-[23px] 2xl:text-[1.302vw] 2x:leading-[1.497vw] 2xl:tracking-[0.091vw] mb-[30px] lg:mb-[50px]">{item.title}</h2>
                <div className={`item_description forma_regular ${item.button_label ? "mb-[30px]" : ""}`}>
                  <PortableText value={item.body}/>
                </div>
                {item.button_label && 
                  <Link
                    className="border-solid button forma_regular border-[#0D0D0D] border-[0.5px] rounded-[5px] text-[12px] tracking-[0.24px] leading-[16px] 2xl:text-[0.781vw] 2x:leading-[1.042vw] 2xl:tracking-[0.016vw] text-[#0D0D0D] px-[10px] inline-flex justify-center py-[2px] w-[110px]"
                    href={`${item.button_url ? item.button_url : "/"}`}>
                    {item.button_label}
                  </Link>
                }
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(50px)"  }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  easing: [0.19, 1, 0.22, 1],
                }}
                viewport={{once: true}}

                className="lg:w-[50%] ">
                  <Image src={item.image} alt={title} width={1000} height={1000} className="w-full h-[500px] lg:h-auto object-cover rounded-[10px]" />
                </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextWithImage2