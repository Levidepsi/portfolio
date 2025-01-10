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
      
    </div>
  );
};

export default Banner;
