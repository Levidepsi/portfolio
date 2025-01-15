"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import {motion} from "framer-motion"
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";

const MultipleText = ({ title, text_items, padding_top_bottom, background, text_color, title_max_width, title_padding_bottom, layout }: any) => {

  const [opentab, setOpenTab] = useState(null)

   const handleClick = (index: any) => {
    setOpenTab(opentab == index ? null : index)
  }

    const [currentSlide, setCurrentSlide] = useState(1); // Default to the first slide

    const updateCurrentSlide = (swiper: any) => {
      setCurrentSlide(swiper.activeIndex + 1); // Swiper uses zero-based indexing
  };
  
  const desktop = useWindowWide(1024)


  return (
    <div style={{paddingTop: `${padding_top_bottom}px`, paddingBottom: `${padding_top_bottom}px`, background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      {title && 
        <h1 
      style={{color: `${text_color}`, maxWidth: `${title_max_width}px`, marginBottom: desktop ?`${title_padding_bottom}px` : `${title_padding_bottom - 50}px`}} 
          className={`text-[#30282A] mx-auto lg:mx-0 text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] text-center lg:text-left tracking-[1.3px] boing_thin mb-[45px]`}>{title}</h1>
        
      }
      <div className="lg:block hidden">
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
            onClick={() => handleClick(index)}
          className={`text_items item${index} ${opentab == index ? "active" : ""} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
            <div style={{ color: `${text_color}` }} className={`text-[13px] multipletext-title avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0`}>{item.title}</div>
            <div style={{ color: `${text_color}` }} className={`multipletext-body text-[13px] text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body} /></div>
            {item.apply_now &&
              <Link className="text-[#30282A] block w-full max-w-fit border-solid border-[1px] border-[#30282A] rounded-[17px] py-[9px] px-[19px] text-[13px] avenir_roman tracking-[1.56px] leading-[18px]" href={`${item.apply_now_link}`}>{item.apply_now}</Link>
            }
          </motion.div>
        )
      })}
      </div>
      {layout == "accordion" && 
        text_items && text_items.map((item: any, index: number) => {
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
            onClick={() => handleClick(index)}
          className={`text_items item${index} ${opentab == index ? "active" : ""} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
            <div style={{ color: `${text_color}` }} className={`text-[13px] multipletext-title avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0`}>{item.title}</div>
            <div style={{ color: `${text_color}` }} className={`multipletext-body text-[13px] text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body} /></div>
            {item.apply_now &&
              <Link className="text-[#30282A] block w-full max-w-fit border-solid border-[1px] border-[#30282A] rounded-[17px] py-[9px] px-[19px] text-[13px] avenir_roman tracking-[1.56px] leading-[18px]" href={`${item.apply_now_link}`}>{item.apply_now}</Link>
            }
          </motion.div>
        )
      })
      }

      {layout == "slider" && 
        <>
        <div className={`hidden lg:block ${layout}`}>
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
          onClick={() => handleClick(index)}
        className={`text_items item${index} ${opentab == index ? "active" : ""} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
          <div style={{ color: `${text_color}` }} className={`text-[13px]  avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0`}>{item.title}</div>
          <div style={{ color: `${text_color}` }} className={` text-[13px] multipletext-body text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body} /></div>
          {item.apply_now &&
            <Link className="text-[#30282A] block w-full max-w-fit border-solid border-[1px] border-[#30282A] rounded-[17px] py-[9px] px-[19px] text-[13px] avenir_roman tracking-[1.56px] leading-[18px]" href={`${item.apply_now_link}`}>{item.apply_now}</Link>
          }
        </motion.div>
      )
      })}
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={true}
          onSlideChange={updateCurrentSlide}
          onInit={updateCurrentSlide}
          className="multipleTextSlide"
        >
          {text_items && text_items.map((item: any, index: number) => {
      return (
        <SwiperSlide
      
        className={`text_items text-center item${index} ${opentab == index ? "active" : ""} flex flex-col lg:flex-row justify-between py-[17px] border-b-red-500`} key={index}>
          <div style={{ color: `${text_color}` }} className={`text-[13px]  multipletext-title avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-5 lg:mb-0`}>{item.title}</div>
          <div style={{ color: `${text_color}` }} className={` text-[13px] mt-[25px] text-[#30282A] avenir_roman tracking-[0.26px] leading-[18px] lg:w-[50%] `}><PortableText value={item.body} /></div>
          {item.apply_now &&
            <Link className="text-[#30282A] block w-full max-w-fit border-solid border-[1px] border-[#30282A] rounded-[17px] py-[9px] px-[19px] text-[13px] avenir_roman tracking-[1.56px] leading-[18px]" href={`${item.apply_now_link}`}>{item.apply_now}</Link>
          }
        </SwiperSlide>
      )
          })}
           <div style={{ color: `${text_color}` }} className="swiper-pagination text-center mt-4 avenir_roman pb-[10px] tracking-[0.26px] leading-[18px]">
            {currentSlide}/{text_items.length}
          </div>
        </Swiper>
      </>
        
      }
    </div>
  );
};

export default MultipleText;
