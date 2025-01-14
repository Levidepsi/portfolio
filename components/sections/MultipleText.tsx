"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import {motion} from "framer-motion"

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
          <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1,}}
          transition={{
            delay: index * 0.1,
            duration: 0.7,
            ease: [0.19, 1, 0.22, 1],
          }}
          viewport={{ once: true }}  
          style={{ 
            borderBottom: `1px solid ${text_color}`,
            borderTop: index === 0 ? `1px solid ${text_color}` : undefined,
          }} 
          className={`text_items item${index} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
            <div style={{ color: `${text_color}` }} className={`text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0`}>{item.title}</div>
            <div style={{ color: `${text_color}` }} className={`multipletext-body text-[13px] text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body} /></div>
            {item.apply_now &&
              <Link className="text-[#30282A] block w-full max-w-fit border-solid border-[1px] border-[#30282A] rounded-[17px] py-[9px] px-[19px] text-[13px] avenir_roman tracking-[1.56px] leading-[18px]" href={`${item.apply_now_link}`}>{item.apply_now}</Link>
            }
          </motion.div>
        )
      })}
    </div>
  );
};

export default MultipleText;
