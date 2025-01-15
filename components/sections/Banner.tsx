"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import {motion} from "framer-motion"
import { useWindowWide } from "../../hooks/ScreenSize";

const Banner = ({ image, description, max_width, content_position, video }: any) => {
  const desktop = useWindowWide(1024)
  return (
    <div className="relative">
      {video
        ? 
        <div className="relative h-[100vh] w-full">
          <video className="absolute left-0 top-0 w-full h-full object-cover" width="2000" height="2000" autoPlay muted>
            <source src={`${video}`} type="video/mp4" />
          </video>
        </div>
        : 
        <Image src={image} alt={"banner"} width={2000} height={2000} priority className="w-full h-[100vh] object-cover" />
      }
      

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className={`banner_content ${content_position}`} style={{ maxWidth: `${max_width ? max_width : ""}px` }}>
        <PortableText value={description} />
      </motion.div>
      <div className="arrow_down max-w-[35px] max-h-[35px] w-full h-full flex justify-center items-center absolute bottom-5 left-0 right-0 mx-auto rounded-[50px]  p-[5px] border-solid border-[1px] border-[#EFEBE5]relative">
        <span className="text-[14px] avenir_book">|</span>
      </div>
      
    </div>
  );
};

export default Banner;
