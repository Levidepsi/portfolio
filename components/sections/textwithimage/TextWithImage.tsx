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
  

  return (
    <div style={{
      background: `${background_color}`
    }} 
      className={`px-[32px] text_with_image_wrapper ${background_color ? "addPaddingTop" : ""} lg:px-[109px] flex flex-col-reverse ${section_position} ${section_position == "image_right" ? "lg:flex-row" : section_position == "image_left" ? "lg:flex-row-reverse" : "flex-row"} lg:justify-between relative`}>
      <div
        ref={divRef}
        className={`text_with_image_contents flex flex-col ${content_position == "top" ? "justify-end" : content_position == "top" ? "justify-end" : ""} mb-[40px] lg:pt-[50px] lg:mb-0 lg:w-[40%]`}>
        {content_title && 
      <h1 className=" moinster_regular text-[20px] lg:text-[40px] tracking-[2.8px] leading-[42x] mb-[30px] lg:mb-[50px]">{content_title}</h1>

        }
        {sub_title && 
          <h2 className=" moinster_regular text-[15px] lg:text-[20px] tracking-[1.4px] leading-[29px] mb-[30px] lg:mb-[50px]">{sub_title}</h2>
        }
        <div className={`description forma_regular  ${button_label ? "mb-[40px] lg:mb-[73px]" : ""}`}>
          <PortableText value={body}/>
        </div>
        {button_label && 
          <Link
            className="border-solid button forma_regular border-[#0D0D0D] border-[0.5px] rounded-[5px] text-[12px] tracking-[0.24px] leading-[16px] text-[#0D0D0D] px-[10px] py-[5px] w-max"
            href={`${button_url ? button_url : "/"}`}>
            {button_label}
          </Link>
        }
        
      </div>
      <div ref={imageRef} className="lg:w-[50%]">
        <Image src={image} alt={content_title} width={1000} height={1000} className={`rounded-[10px] mb-[30px] lg:mb-0 object-cover h-[500px] lg:h-auto ${image_size}`} />
      </div>
    </div>
  );
};

export default TextWithImage;
