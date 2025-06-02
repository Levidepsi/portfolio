"use client";
import { useWindowWide } from "@/hooks/ScreenSize";
import "./imagewithtextblock.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import { inView } from "motion";
import Link from "next/link";
import { ImageTextBlocks } from "@/components/global/components";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRef, useState } from "react";


interface ImagewithTextBlockProps {
  title: string;
  background_color: string;
  image: string;
  padding_top: number;
  padding_bottom: number;
  textblock_items: ImageTextBlocks[];
  sub_title: string
  allowSliderMobile: boolean;
  largePaddingLeftRight: boolean
}

const ImagewithTextBlock: React.FC<ImagewithTextBlockProps> = ({
  title,
  image,
  background_color,
  textblock_items,
  padding_top,
  padding_bottom,
  sub_title,
  allowSliderMobile,
  largePaddingLeftRight
}) => {
  const sectionPT: number = padding_top;
  const desktop = useWindowWide(1024);

  const [currentSlide, setCurrentSlide] = useState(1)

    const prevRef = useRef<HTMLDivElement | null>(null)
    const nextRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`image-with-text-block--section ${largePaddingLeftRight ? "px-[32px] md:px-[32px] lg:px-[109px]" : "px-[32px] md:px-[32px]"}  flex flex-col justify-between `}
      style={{
        backgroundColor: background_color,
        paddingTop: `${padding_top}px`,
        paddingBottom: desktop ? `${padding_bottom}px` : "",
      }}
    >

      {title && <h2 className="text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] leading-[18px] mb-[20px] text-black uppercase aktiv_regular">{title}</h2>}
      {sub_title && <h2 className="text-[20px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] leading-[24px] mb-[30px] text-black  aktiv_medium">{sub_title}</h2>}

      <div className="text-block-container  relative">
        <div className={`text-block-scroll-wrapper gap-[14px] hidden lg:flex lg:flex-row ${largePaddingLeftRight ? "lg:flex-wrap" : ""}  flex-col w-full h-auto justify-center`}>
          {textblock_items &&
            textblock_items.map((item: ImageTextBlocks, index: number) => {
              return (
                <motion.div
                  className={`text-block-item relative w-full ${largePaddingLeftRight ? "lg:w-[32.3333%]" : ""}  h-auto  ${item.data ? "bg-[#F5F7FA] min-h-[235px] rounded-[10px]" : ""}`}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }} // 👈 Re-triggers on every scroll into view
                >
                  {item.data ? 
                    <div className="absolute image-block-content text-center px-[42px] py-[48px] top-0 left-0 right-0 bottom-0 max-w-fit max-h-fit m-auto ">
                      <div className="aktiv_medium text-[30px] leading-[36px] 2xl:text-[1.953vw] 2xl:leading-[2.344vw] mb-[26px]">{item.data}+</div>
                      <div className="aktiv_medium text-[14px] leading-[16px] 2xl:text-[0.911vw] 2xl:leading-[1.042vw] mb-[27px]">{item.sub_title}</div>
                      <div className="aktiv_regular"><PortableText value={item.body}/></div>
                    </div>
                    : 
                    <div className="image-block-content w-full h-auto">
                      <Image src={item.image} alt={item.title} width={500} priority height={500} className="w-full rounded-[10px] h-auto lg:aspect-[16/20.7] xl:aspect-[16/23.65] 2xl:aspect-[16/18.85] mb-[25px] object-cover" />
                      <h2 className="aktiv_regular text-[#000427] text-[20px] tracking-[1.4px] leading-[29px] 2xl:text-[1.302vw] 2xl:leading-[1.888vw] uppercase mb-[20px]">{item.title}</h2>
                      <div className="aktiv_regular mb-[25px]"><PortableText value={item.body} /></div>
                      {item.button_url && 
                        <Link className="text-[13px] button_url relative leading-[16px] 2xl:text-[0.846vw] 2xl:leading-[1.042vw] text-[#FFF5EF] aktiv_regular " href={`${item.button_url}`}>Read more</Link>
                      }
                    </div>
                  }
                  
                </motion.div>
              );
            })}
        </div>
      </div>


      {/* mobile */}
      {allowSliderMobile ? 
      
      <div className="imagewithtextBlock_Slider lg:hidden pb-[50px]">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        speed={1000}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
        }}
        className="w-full "
      >
        {textblock_items &&
          textblock_items.map((item: ImageTextBlocks, index: number) => {
            return (
              <SwiperSlide key={index}>
                <motion.div
                  className={`text-block-item relative w-full h-auto  ${item.data ? "bg-[#F5F7FA] min-h-[235px]" : ""}`}
                  
                  initial={{ opacity: 0,  }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }} // 👈 Re-triggers on every scroll into view
                >
                  {item.data ? 
                    <div className="absolute image-block-content text-center px-[42px] py-[48px] top-0 left-0 right-0 bottom-0 max-w-fit max-h-fit m-auto ">
                      <div className="aktiv_medium text-[30px] leading-[36px] mb-[26px]">{item.data}+</div>
                    <div className="aktiv_medium text-[14px] leading-[16px] 2xl:text-[0.911vw] 2xl:leading-[1.042vw] mb-[27px]">{item.sub_title}</div>
                      <div className="aktiv_regular"><PortableText value={item.body}/></div>
                    </div>
                    : 
                    <div className="image-block-content w-full h-auto">
                      <Image src={item.image} alt={item.title} priority width={500} height={500} className="w-full rounded-[10px] h-[561px] lg:aspect-[16/20.7] xl:aspect-[16/23.65] 2xl:aspect-[16/25.65] mb-[30px] object-cover" />
                      <h2 className="aktiv_regular text-[#000427] text-[20px] tracking-[1.4px] leading-[29px] 2xl:text-[1.302vw] 2xl:leading-[1.888vw] uppercase mb-[20px]">{item.title}</h2>
                      <div className="aktiv_regular mb-[25px]"><PortableText value={item.body} /></div>
                      <Link className="text-[13px] button_url relative leading-[16px] 2xl:text-[0.846vw] 2xl:leading-[1.042vw] text-[#FFF5EF] aktiv_regular " href={`${item.button_url}`}>Read more</Link>
                    </div>
                  }
                  
                </motion.div>
              </SwiperSlide>
            );
          })}
      </Swiper>
        <div className="lg:hidden flex mt-5 lg:mt-0 justify-center z-[5] items-center gap-x-[10px] lg:absolute bottom-[40px] left-[47px]">
          <div ref={prevRef}  className="prev cursor-pointer">
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
          <span>
            {currentSlide} of {textblock_items.length}
          </span>

            <div ref={nextRef}  className="next cursor-pointer">
              <svg
                className="w-[5.98px]"
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
      </div>
        :
        <div className="text-block-container  relative">
          <div className="text-block-scroll-wrapper gap-[20px] lg:hidden flex lg:flex-row flex-col w-full h-auto justify-center">
            {textblock_items &&
              textblock_items.map((item: ImageTextBlocks, index: number) => {
                return (
                  <motion.div
                    className={`text-block-item relative w-full h-auto  ${item.data ? "bg-[#F5F7FA] min-h-[235px]" : ""}`}
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }} // 👈 Re-triggers on every scroll into view
                  >
                    {item.data ? 
                      <div className="absolute image-block-content text-center px-[42px] py-[48px] top-0 left-0 right-0 bottom-0 max-w-fit max-h-fit m-auto ">
                        <div className="aktiv_medium text-[30px] leading-[36px] 2xl:text-[1.953vw] 2xl:leading-[2.344vw] mb-[26px]">{item.data}+</div>
                        <div className="aktiv_medium text-[14px] leading-[16px] 2xl:text-[0.911vw] 2xl:leading-[1.042vw] mb-[27px]">{item.sub_title}</div>
                        <div className="aktiv_regular"><PortableText value={item.body}/></div>
                      </div>
                      : 
                      <div className="image-block-content w-full h-auto">
                        <Image src={item.image} alt={item.title} width={500} priority height={500} className="w-full h-auto lg:aspect-[16/10.7] xl:aspect-[16/8.1] 2xl:aspect-[16/10.1] mb-[30px] object-cover" />
                        <h2 className="aktiv_regular text-[#000] text-[16px] leading-[21px] 2xl:text-[1.042vw] 2xl:leading-[1.367vw] uppercase mb-5">{item.title}</h2>
                        <div className="aktiv_regular max-w-[300px] mb-[30px]"><PortableText value={item.body} /></div>
                        <Link className="text-[14px] button_url relative leading-[18px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] text-black aktiv_regular pb-[10px]" href={`${item.button_url}`}>Find out more</Link>
                      </div>
                    }
                    
                  </motion.div>
                );
              })}
          </div>
        </div>
      }
    </div>
  );
};

export default ImagewithTextBlock;
