"use client";

import Image from "next/image";
import React from "react";
import "./banner.css";
import { motion } from "motion/react";
import anchorArrow from "@/public/Path 44.svg"
import { useWindowWide } from "@/hooks/ScreenSize";
import { PortableText } from "next-sanity";
import Link from "next/link";

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
    <div className={`BannerSection ${image ? "h-[100vh]" : "h-[100vh]"} ${video ? "z-50" : ""}`}>
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
          className="object-cover background-image w-full h-[100vh] "
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
      <div className={`contents_banner ${content_position} absolute `}>
        <div className={`title forma_regular moinster_regular text-[#FFF5EF] text-[30px]  lg:text-[40px] lg:tracking-[2.8px] lg:leading-[42px] max-w-[677px] mb-[25px]`}>
          {title}
        </div>
        <div className="banner_description mb-[22px]">
          <PortableText  value={description}/>
        </div>
        <Link href={"/"} className="border-solid forma_regular rounded-[5px] border-[#FFF5EF] text-[#FFF5EF] border-[0.5px] block py-[5px] px-[10px] text-[13px] tracking-[0.26px] leading-[16px] w-max">
          Get in touch
        </Link>
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
