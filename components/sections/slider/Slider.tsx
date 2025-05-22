"use client"

import { SliderArrayValues } from "@/types/slider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import "./slider.css" // We'll add custom CSS here
import { PortableText } from "next-sanity"
import { useWindowWide } from "@/hooks/ScreenSize"
import Link from "next/link"
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/mousewheel';

const Slider = ({
  title,
  slider_items,
}: {
  title: string
  slider_items: SliderArrayValues[]
}) => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const desktop = useWindowWide(1024)

const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)
  
const desktopprevRef = useRef<HTMLDivElement | null>(null)
const desktopnextRef = useRef<HTMLDivElement | null>(null)

const swiperRef = useRef<HTMLDivElement>(null)
  const [lockScroll, setLockScroll] = useState(false)
  const [slidesSeen, setSlidesSeen] = useState<Set<number>>(new Set())
  const [allSeen, setAllSeen] = useState(false)

  const [navigationReady, setNavigationReady] = useState(false)

useEffect(() => {
  // Wait until refs are set
  if (desktop) {
    if (desktopprevRef.current && desktopnextRef.current) {
      setNavigationReady(true)
    }
  } else {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true)
    }
  }
}, [desktop])
  

  const scrollDownTop = () => {
    if (currentSlide == 1) {
      window.scrollBy({ top: -500, behavior: 'smooth' })
    } else {
      window.scrollBy({ top: 500, behavior: 'smooth' })

    }
  }

  return (
    <div
      ref={swiperRef}
      
      className="mb-[50px] pb-5 xl:pb-[20px] px-[14px] bg-[#F5F7FA] lg:px-0 relative">
      
      {navigationReady && (
        <Swiper
          loop={true}
          // mousewheel={true}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
        navigation={{
          prevEl: desktop ? desktopprevRef.current : prevRef.current,
          nextEl: desktop ? desktopnextRef.current : nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = desktop ? desktopprevRef.current : prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = desktop ? desktopnextRef.current : nextRef.current

        }}
        // onReachEnd={() => {
        //   // Swiper reached the last slide, scroll down body
        //   window.scrollBy({ top: 500, behavior: 'smooth' })
        // }}
        // onReachBeginning={() => {
        //   // Swiper reached the first slide, scroll up body
        //   window.scrollBy({ top: -500, behavior: 'smooth' })
        // }}
        draggable={true}
        slidesPerView={2.6}
        speed={1000}
        modules={[Autoplay, Navigation, Mousewheel]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 2.6,
          },
          1536: {
            slidesPerView: 2,

          }
        }}

        className="mySwiper text_with_slider  h-auto md:h-[60vw] lg:h-[60vw] xl:h-[40vw] 2xl:h-[50vw]"
      >
        {slider_items &&
          slider_items.map((item: SliderArrayValues, index: number) => (
            <SwiperSlide key={index}>
              <div className="slide-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  priority
                  className="slide-image mb-5 object-cover
                  "
                />
                <div className="slide-text">
                  <h3 className="text-[16px] leading-[21px] mb-5 2xl:text-[1.042vw] 2xl:leading-[1.367vw] text-black aktiv_regular">{item.title}</h3>
                  <div className="aktiv_regular max-w-[324px] text-[14px] leading-[18px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] 2xl:max-w-[21.094vw] mb-[30px]"><PortableText value={item.body} /></div>
                  <Link
                    className="aktiv_regular sliderReadmore relative text-[14px] leading-[18px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] text-black block w-max mb-[30px]"
                    href={item.link ?`/${item.link}` : "#"}>Read More</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper> 
      )}
      
      {!desktop && 
        <div className="text-center max-w-[90px] flex justify-center items-center mx-auto slider_pagination relative lg:hidden mt-4 pb-[50px]">
        <div ref={prevRef} className="swiper-button-prev  h-auto w-auto">
          <svg
            className="w-[5.98px] rotate-[180deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="5.98"
            height="11.343"
            viewBox="0 0 5.98 11.343">
            <path
              id="Path_64"
              data-name="Path 64"
              d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
              transform="translate(-16296.321 1662.301) rotate(-90)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.7" />
          </svg>
        </div>
                  
        <span className="aktiv_regular text-[12px] leading-[16px]">{currentSlide} of {slider_items.length}</span>
        <div ref={nextRef} className="swiper-button-next  h-auto w-auto">
          <svg
            className="w-[5.98px] "
            xmlns="http://www.w3.org/2000/svg"
            width="5.98"
            height="11.343"
            viewBox="0 0 5.98 11.343">
            <path
              id="Path_64"
              data-name="Path 64"
              d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
              transform="translate(-16296.321 1662.301) rotate(-90)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.7" />
          </svg>
        </div>
      </div>
      }

      {desktop && 
        <div className="slider_pagination desktop">
        <div ref={desktopprevRef} className="swiper-button-prev  h-auto w-auto">
          <svg
            className="w-[5.98px] rotate-[180deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="5.98"
            height="11.343"
            viewBox="0 0 5.98 11.343">
            <path
              id="Path_64"
              data-name="Path 64"
              d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
              transform="translate(-16296.321 1662.301) rotate(-90)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.7" />
          </svg>
        </div>
                  
        <div ref={desktopnextRef} className="swiper-button-next  h-auto w-auto">
          <svg
            className="w-[5.98px] "
            xmlns="http://www.w3.org/2000/svg"
            width="5.98"
            height="11.343"
            viewBox="0 0 5.98 11.343">
            <path
              id="Path_64"
              data-name="Path 64"
              d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
              transform="translate(-16296.321 1662.301) rotate(-90)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.7" />
          </svg>
        </div>
      </div>
      }
    </div>
  )
}

export default Slider
