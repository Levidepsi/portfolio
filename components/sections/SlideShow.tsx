"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useWindowWide } from "../../hooks/ScreenSize";
import Arrow from "../../public/Arrow";
import Link from "next/link";

const SlideShow = ({ slider_items, padding_top, title }: { slider_items: any, padding_top: number, title: string }) => {
  let pt_moble = padding_top / 2
  const desktop = useWindowWide(1024)

  return (
    <div
       style={desktop ?{
        paddingTop: padding_top ? `${padding_top}px` : pt_moble ? `${pt_moble}px` : ""
      } : {
        paddingTop: pt_moble ?  `${pt_moble}px` : ""
      }}
      className=" sliderContainer px-5 lg:px-[32px] mb-[50px]">
      <h2 className="text-[#0D4BA0] text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] apercu pb-[50px] lg:pb-[70px]">{title}</h2>
      
      <div className="swiper_news_wrapper px-[50px] lg:px-[100px] relative">
        <div className="swipper-arrow-wrapper">
          <div className="swiper-button-prev"><Arrow /></div>
          <div className="swiper-button-next rotate-180"><Arrow /></div>
        </div>

         <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper_news relative "

      >
          {slider_items && slider_items.map((item: any, i: number) => {
          return (
            <SwiperSlide
              className="bg-[#e6edf5] py-[70px] px-[30px] lg:h-[32vw] news_item_swiper flex justify-center flex-col text-center"
              key={i}
              >
              <div className="[&>p]:text-[#0D4BA0] pb-[50px] lg:pb-[80px] text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] apercu text-center">
                <PortableText value={item.body} />
              </div>
              <Link
                className="text-[16px] news_link items-center justify-center flex leading-[20px] lg:text-[18px] lg:leading-[22px] apercu text-[#0D4BA0]"
                href={item.url ? `${item.url}` : "/"}>
                
                {item.link}
                <div className="w-[12.21px]  h-[12.21px] ">
                    <svg className="rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" width="12.21" height="12.21" viewBox="0 0 24.154 24.983">
                      <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(1 1.414)">
                        <g id="Icon_feather-arrow-down-2" data-name="Icon feather-arrow-down" transform="translate(0 22.154) rotate(-90)">
                          <path id="Path_36" data-name="Path 36" d="M0,22.154V0" transform="translate(11.077)" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                          <path id="Path_37" data-name="Path 37" d="M22.154,11.077,11.077,0,0,11.077" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                        </g>
                      </g>
                    </svg>
                </div>
              </Link>
            </SwiperSlide>
            )
          })}
        </Swiper>
       </div>
    </div>
  )
};

export default SlideShow;
