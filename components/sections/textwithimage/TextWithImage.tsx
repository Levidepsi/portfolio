"use client";
import { useWindowWide } from "@/hooks/ScreenSize";
import "./textwithimage.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { MultipleTextProp, SlideShowImagesValues } from "@/components/global/components";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {motion, useScroll, useTransform} from "motion/react"


type Body = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface TextWithImageProps {
  title: string;
  image: string;
  body: Body[];
  background_color: string;
  layout: string;
  slideshow_images: SlideShowImagesValues[]
  content_position: string
  sub_title: string
  multipleText: MultipleTextProp[]
}

const TextWithImage: React.FC<TextWithImageProps> = ({
  title,
  image,
  body,
  background_color,
  layout,
  slideshow_images,
  content_position,
  sub_title,
  multipleText
}) => {
  const desktop = useWindowWide(1024);

  let [imageWidth, setImageWidth] = useState<Number>(563)

  const [currentSlide, setCurrentSlide] = useState(1)

  const imageRef = useRef<HTMLImageElement>(null);


useEffect(() => {
  const handleResize = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetHeight);
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }

   const prevSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  useEffect(() => {
    if (slideshow_images) {
      if (currentSlide < 1) {
      setCurrentSlide(slideshow_images.length)
      } else if (currentSlide > slideshow_images.length) {
        setCurrentSlide(1)
      }
    }
    
  }, [currentSlide])
  
  const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)

  const containerRef = useRef<HTMLDivElement>(null);
  const multipleTextRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const multipleTextDiv = multipleTextRef.current;
  
  //   if (!container || !multipleTextDiv) return;
  
  //   let ticking = false;
  //   let accumulatedDelta = 0;
  //   const scrollSpeed = 4;  // Adjust this number to control scroll speed
  
  //   const onWheel = (e: WheelEvent) => {
  //     if (!container.contains(e.target as Node)) return;
  
  //     const scrollTop = multipleTextDiv.scrollTop;
  //     const scrollHeight = multipleTextDiv.scrollHeight;
  //     const clientHeight = multipleTextDiv.clientHeight;
  
  //     const atTop = scrollTop === 0;
  //     const atBottom = scrollTop + clientHeight >= scrollHeight;
  
  //     if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
  //       e.preventDefault();
  
  //       accumulatedDelta += e.deltaY * scrollSpeed;
  
  //       if (!ticking) {
  //         window.requestAnimationFrame(() => {
  //           multipleTextDiv.scrollTop += accumulatedDelta;
  //           accumulatedDelta = 0;
  //           ticking = false;
  //         });
  //         ticking = true;
  //       }
  //     }
  //   };
  
  //   container.addEventListener("wheel", onWheel, { passive: false });
  
  //   return () => {
  //     container.removeEventListener("wheel", onWheel);
  //   };
  // }, []);


  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;
  
      const container = containerRef.current;
      const image = imageRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if the container is in the viewport

      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.top / windowHeight; // 0 to 1
        const translateY = scrollProgress * 30; // adjust this for intensity
        const roundedY = Math.round(translateY);
        image.style.transform = roundedY <= 5 ? `translateY(${translateY - 50}px)` : `translateY(${translateY + 50}px)`;
      } 
    };
  
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  

  return (
    <div style={{
      background: `${background_color}`
    }} 
    
    className="px-[14px] lg:px-[47px]  relative">
      {layout === "multiple_images" && (
        <div className="relative pt-[30px] lg:pt-[50px] flex flex-col lg:flex-row lg:gap-x-[20px] lg:justify-between">
          <div
           
            className="image-contents pb-[75px] lg:pb-0 lg:w-[40%] pr-[40px] 2xl:pr-0 relative">
            {title && 
            <motion.h2
              initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
              className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] leading-[18px] text-black mb-5">
              {title}
              </motion.h2>
            }
            
            {sub_title && 
             <motion.h3
              initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
              className="aktiv_medium text-[20px] leading-[24px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] max-w-[316px] text-black mb-5">{sub_title}</motion.h3>
           }
            <motion.div
               initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
              className="aktiv_regular max-w-[381px] 2xl:max-w-[24.805vw] mt-[30px]">
              <PortableText value={body} />
            </motion.div>
            {layout == "multiple_images"  &&
              <div className="flex  mt-5 lg:mt-0 justify-center z-[5] items-center gap-x-[10px] absolute  lg:top-full bottom-0 lg:bottom-[40px] lg:left-[0]">
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
                <span className="aktiv_regular text-[12px] leading-[15px] text-black">
                  {currentSlide} of {slideshow_images.length}
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
            }
        </div>
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
          className="w-full multiple_images lg:w-[60%]"
        >
          {slideshow_images?.map((item: SlideShowImagesValues, index: number) => {
            return (
              <SwiperSlide key={index}>
              <div className=" transition-all w-full duration-1000">
                <div className="">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                      height={1000}
                      priority
                    className="w-full lg:h-auto object-cover mt-[20px] h-[260px] lg:aspect-[16/8.4] xl:aspect-[16/11.4] 2xl:aspect-[16/10.4] lg:mt-0"
                  />
                </div>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    )}

      {layout == "single_image" && !multipleText &&
        <div
          ref={containerRef}
          className={`flex  lg:justify-between flex-col lg:gap-x-[20px] lg:flex-row pt-[50px] ${background_color == "#F5F7FA" ? "pb-[50px]" : ""}`}
        >
          <div className={`image-contents flex flex-col justify-between lg:w-[40%] ${content_position}`}>
            <div className="topContent">
              {title &&
              <motion.h2
                initial={{ opacity: 0, transform: "translateY(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  ease: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] leading-[18px] text-black mb-5"
              >
                {title}
              </motion.h2>
              }
              {sub_title && 
                <motion.h3
                  initial={{ opacity: 0, transform: "translateY(-50px)" }}
                  whileInView={{ opacity: 1, transform: "translateY(0)" }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  viewport={{ once: true }}
                  className="aktiv_medium text-[20px] leading-[24px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] max-w-[316px] text-black mb-5"
                >
                  {sub_title}
                </motion.h3>
              }

              <motion.div
                initial={{ opacity: 0, transform: "translateY(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  ease: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className="aktiv_regular lg:max-w-[381px] 2xl:max-w-[24.805vw] mt-[30px]"
              >
                <PortableText value={body} />
              </motion.div>
            </div>
          </div>

          <div className="parallax-image h-[120%] lg:w-[60%]">
            <Image
              src={image}
              alt={title ? title : "Text With Image"}
              width={1000}
              height={1000}
              priority
              className="w-full h-auto object-cover mt-[20px] lg:aspect-[16/8.4] xl:aspect-[16/11.4] 2xl:aspect-[16/10.4] lg:mt-0"
            />
          </div>
        </div>
      }

{layout == "single_image" &&  multipleText && (
  <div
    ref={containerRef}
    className={`parallax-container flex flex-col lg:flex-row-reverse pt-[50px] ${background_color == "#F5F7FA" ? "pb-[50px]" : ""}`}
  >
    {/* Sticky Image Side */}
    <div className="image-wrapper lg:w-[60%] w-full lg:h-[90vh] lg:sticky top-5 overflow-hidden">
      <div ref={imageRef} className="parallax-image lg:h-auto w-full">
        <img src={image} className="w-full h-full object-cover" alt="Parallax" />
      </div>
    </div>

    {/* Scrollable Text Side */}
    <div className="text-content mt-[25px] flex flex-col justify-between lg:w-[40%] w-full  overflow-y-auto">
      {title && 
        <motion.h2
          
          className="aktiv_regular text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] leading-[18px] text-black mb-5"
        >
          {title}
        </motion.h2>
      
      }

      {sub_title && (
        <motion.h3
         
          className="aktiv_medium text-[20px] leading-[24px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] max-w-[316px] text-black mb-5"
        >
          {sub_title}
        </motion.h3>
      )}
      
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className="aktiv_regular lg:max-w-[381px] 2xl:max-w-[24.805vw] mt-[30px]"
      >
        <PortableText value={body} />
      </motion.div>

            {/* Long text content */}
        {multipleText && (
          <div
            ref={multipleTextRef}
            className="multipleText space-y-6 lg:max-w-[379px] 2xl:max-w-[24.674vw]"
          >
            {multipleText.map((texts: MultipleTextProp, index: number) => (
              <motion.div
                initial={{ opacity: 0, transform: "translateX(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0)" }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  ease: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className="multipleText_Item mb-[50px] "
                key={index}
              >
                <PortableText value={texts.body} />
              </motion.div>
            ))}
          </div>
        )}
      
    </div>
  </div>
)}


    </div>
  );
};

export default TextWithImage;
