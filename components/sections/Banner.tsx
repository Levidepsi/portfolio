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
  url: string
  title: string;
  content_titleArray: Description[]
}

const Banner: React.FC<BannerProps> = ({
  image,
  video,
  description,
  image_title,
  content_position,
  max_width,
  url,
  title,
  content_titleArray
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
        <div className={`title lg:hidden  moinster_regular text-[#FFF5EF] text-[30px]  lg:text-[40px] lg:tracking-[2.8px]  lg:leading-[42px] 2xl:text-[2.604vw] 2x:leading-[2.734vw] 2xl:tracking-[0.182vw] max-w-[677px] mb-[25px]`}>
          {title}
        </div>
        {content_titleArray && 
          <div className="content_title hidden lg:block mb-[25px]">
            <PortableText value={content_titleArray}/>
          </div>
        }
        <div className="banner_description mb-[22px]">
          <PortableText  value={description}/>
        </div>
        {url && 
            <Link href={url ? `${url}` :"/"} className="border-solid bannerLink forma_regular rounded-[5px] border-[#FFF5EF] text-[#FFF5EF] border-[0.5px]  text-[13px] tracking-[0.26px] leading-[16px] 2xl:text-[0.846vw] 2x:leading-[1.042vw] 2xl:tracking-[0.017vw] px-[10px] inline-flex justify-center py-[2.5px] w-[110px]">
            Get in touch
          </Link>
        }

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
