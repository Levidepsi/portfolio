"use client";

import Image from "next/image";
import React from "react";
import "./banner.css";
import { motion } from "motion/react";
import anchorArrow from "@/public/Path 44.svg"
import { useWindowWide } from "@/hooks/ScreenSize";

type Description = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface BannerProps {
  image: string;
  video: string;
  image_title: string;
  description: Description[];
  content_position: string;
  max_width: number;
  anchor_id: string
  title: string;
}

const Banner: React.FC<BannerProps> = ({
  image,
  video,
  description,
  image_title,
  content_position,
  max_width,
  anchor_id,
  title
}) => {

  const desktop = useWindowWide(1024)


  return (
    <div className={`BannerSection ${image ? "xl:h-[48.5vh] 2xl:h-[48.5vh]" : "h-[100vh]"} ${video ? "z-50" : ""}`}>
      {image && (
        <motion.div
          initial={{ opacity: 0,}}
          whileInView={{ opacity: 1,}}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.19, 1, 0.22, 1],
          }}
          viewport={{ once: true }}
        >
          <Image
          priority
          src={image}
          alt="Title"
          width={2000}
          height={2000}
          className="object-cover background-image w-full h-[40.1vh] xl:h-[48.5vh] 2xl:h-[48.5vh]"
        />
        </motion.div>
      )}
      {video && (
        <video autoPlay loop playsInline muted title="">
          <source src={`${video}`} type="video/mp4" /> <track kind="captions" />
        </video>
      )}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className={`content px-[25px] w-full h-auto ${content_position && content_position}`}
      >
        {image_title && 
        <Image
          priority
          src={image_title}
          alt="image title"
          width={1000}
          height={1000}
          className="w-[100%] max-w-[375px] h-auto"
          />
        }
        
      </motion.div>
      <div className={`title  ${video ? "thin_italic bottom-[88px] left-0 right-0 text-[25px] leading-[30px] lg:text-[30px] lg:leading-[36px]" : "titleOnImage uppercase aktiv_medium left-[25px] lg:left-[55px] text-[40px] lg:text-[40px] leading-[48px]"} text-[#FFFFFF]  absolute  mx-auto text-center z-10 w-auto`}>
        {title}
      </div>
      {video && 
      <div onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })} className="anchorArrow absolute bottom-[36px] left-0 right-0 mx-auto w-max cursor-pointer">
        <Image src={anchorArrow} alt="" width={100} height={100} className="w-[13px] h-auto"/>
      </div>
      }

    </div>
  );
};

export default Banner;
