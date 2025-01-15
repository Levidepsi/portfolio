"use client"

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";
import Image from "next/image";
import { motion } from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const MultipleText2 = ({ title, text_items, padding_top_bottom, background, image, titles_font_size, titles_lineheight }: any) => {
  let customFontSize: number = titles_font_size
  let customLineHeight: number = titles_lineheight

  const [currentSlide, setCurrentSlide] = useState(1); // Default to the first slide

  const updateCurrentSlide = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex + 1); // Swiper uses zero-based indexing
  };

  return (
    <div style={{paddingTop: `${padding_top_bottom}px`, paddingBottom: `${padding_top_bottom}px`, background: `${background}`}} className="py-[50px] px-5 multiple_text_wrapper">
      {title && (
        <h1 className="text-[#30282A] text-center text-[40px] leading-[46px] lg:text-[65px] lg:leading-[56px] tracking-[1.3px] boing_thin mb-[45px] lg:mb-[60px] lg:max-w-[451px] lg:mx-[auto]">{title}</h1>
      )}
      <div className="lg:flex hidden lg:flex-wrap lg:justify-start lg:gap-y-[25px]">
        {text_items && text_items.map((item: any, index: number) => {
          // console.log(item.slug.slug)
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
                className={`text_items item${index} flex justify-between md:w-[45%] lg:w-[33.33%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-4">
                    <div className="title_icon">
                        {item.image && (
                            <Image src={item.image} alt={item.title} width={2000} height={2000} priority className="object-contain mb-4 max-w-[50px] mx-[auto]" />
                        )}
                    </div>
                  <div style={{fontSize: `${customFontSize}px`, lineHeight: `${customLineHeight}px`}} className={`text-[${customFontSize}px] leading-[${customLineHeight}]`}>
                    <PortableText value={item.title} />
                    </div>
                </div>
                <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] pb-[10px] tracking-[0.26px] leading-[18px] lg:w-[80%] "><PortableText value={item.body} /></div>
                <Link href={`${item.slug != null ? `/company/${item.slug.slug}` : ""}`} className="text-[13px] avenir_roman text-[#30282A] tracking-[0.26px] leading-[18px] lg:w-[80%] ">{item.learn_more}</Link>
                
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
        className="lg:hidden multipleText2Slider lg:flex-wrap lg:justify-start lg:gap-y-[25px]">
        {text_items && text_items.map((item: any, index: number) => {
          // console.log(item.slug.slug)
            return (
              <SwiperSlide
               
                className={`text_items item${index} flex justify-between md:w-[45%] lg:w-[33.33%] md:items-center flex-col text-center lg:flex-col py-[17px]`} key={index}>
                <div className="text-[13px] avenir_roman text-[#30282A] tracking-[1.56px] leading-[18px] lg:w-[50%] mb-4">
                    <div className="title_icon">
                        {item.image && (
                            <Image src={item.image} alt={item.title} width={2000} height={2000} priority className="object-contain mb-4 max-w-[50px] mx-[auto]" />
                        )}
                    </div>
                  <div style={{fontSize: `${customFontSize}px`, lineHeight: `${customLineHeight}px`}} className={`text-[${customFontSize}px] leading-[${customLineHeight}]`}>
                    <PortableText value={item.title} />
                    </div>
                </div>
                <div className="text-[13px] avenir_roman [&>p]:text-[#30282A] pb-[10px] tracking-[0.26px] leading-[18px] lg:w-[80%] "><PortableText value={item.body} /></div>
                <Link href={`${item.slug != null ? `/company/${item.slug.slug}` : ""}`} className="text-[13px] avenir_roman text-[#30282A] tracking-[0.26px] leading-[18px] lg:w-[80%] ">{item.learn_more}</Link>
                
            </SwiperSlide>
            )
        })}
        <div className="swiper-pagination text-center mt-4 avenir_roman text-[#30282A] pb-[10px] tracking-[0.26px] leading-[18px]">
          {currentSlide}/{text_items.length}
        </div>
      </Swiper>
    </div>
  );
};

export default MultipleText2;
