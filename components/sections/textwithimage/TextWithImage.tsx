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
import Link from "next/link";


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
  content_title: string;
  section_position: string;
  image_size: string;
  enable_border: boolean;
  content_position: string
  sub_title: string;
  button_label: string
  button_url: string
}

const TextWithImage: React.FC<TextWithImageProps> = ({
  title,
  image,
  body,
  background_color,
  content_position,
  sub_title,
  enable_border,
  section_position,
  content_title,
  button_label,
  button_url,
  image_size
}) => {
  const desktop = useWindowWide(1024);

  let [imageWidth, setImageWidth] = useState<Number>(563)

  const [currentSlide, setCurrentSlide] = useState(1)

  const imageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);


  const variants = {
    hidden: {
      opacity: 0,
      y: !desktop ? 0 : 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  

  return (
    <div style={{
      background: `${background_color}`
    }}
      className={`px-[32px] text_with_image_wrapper ${background_color && image != null ? "addPaddingTop mt-[75px]" : background_color ? "randomPY" : "py-[]"} lg:px-[109px] flex flex-col-reverse ${section_position} ${section_position == "image_right" ? "lg:flex-row" : section_position == "image_left" ? "lg:flex-row-reverse" : "flex-row"} lg:justify-between relative`}>
      <motion.div
        initial={{ opacity: 0, transform: section_position == "image_right"? "translateX(-50px)" : "translateX(50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          easing: [0.19, 1, 0.22, 1],
        }}
        viewport={{once: true}}
        ref={divRef}
        className={`text_with_image_contents ${image == null ? "lg:w-[60%] mx-auto center_contents" : "lg:w-[40%] lg:pt-[50px] "} flex flex-col ${content_position} ${content_position == "bottom" ? "justify-end" : content_position == "top" ? "justify-start" : ""} mb-[40px] lg:mb-0 `}>
        {content_title && 
      <h1 className=" moinster_regular text-[20px] lg:text-[40px] tracking-[2.8px] leading-[42px] 2xl:text-[2.604vw] 2x:leading-[2.734vw] 2xl:tracking-[0.182vw]  mb-[30px] lg:mb-[50px]">{content_title}</h1>

        }
        {sub_title && 
          <h2 className=" moinster_regular text-[15px] lg:text-[20px] tracking-[1.4px] leading-[29px] 2xl:text-[1.302vw] 2x:leading-[1.888vw] 2xl:tracking-[0.091vw] mb-[30px] lg:mb-[50px]">{sub_title}</h2>
        }
        <div className={`description forma_regular  ${button_label ? "mb-[40px] lg:mb-[73px]" : ""}`}>
          <PortableText value={body}/>
        </div>
        {button_label && 
          <Link
            className="border-solid button forma_regular border-[#0D0D0D] border-[0.5px] rounded-[5px] text-[12px] tracking-[0.24px] leading-[16px] 2xl:text-[0.781vw] 2x:leading-[1.042vw] 2xl:tracking-[0.016vw] text-[#0D0D0D] px-[10px] inline-flex justify-center py-[2px] pt-[4px] w-[110px] 2xl:w-[7.161vw]"
            href={`${button_url ? button_url : "/"}`}>
            {button_label}
          </Link>
        }
        
      </motion.div>
      {image && 
        <motion.div
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            easing: [0.19, 1, 0.22, 1],
          }}
          viewport={{ once: true }}
          ref={imageRef}
          className="lg:w-[50%]">
          <Image src={image} alt={content_title} width={1000} height={1000} className={`rounded-[10px] mb-[30px] lg:mb-0 object-cover h-[500px] lg:h-auto ${image_size}`} />
        </motion.div>
      }
    </div>
  );
};

export default TextWithImage;
