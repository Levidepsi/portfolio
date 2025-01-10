"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import {motion} from "framer-motion"
import { useWindowWide } from "../../hooks/ScreenSize";

const Banner2 = ({ image, description, max_width, sub, website, title }: any) => {
  const desktop = useWindowWide(1024)
  return (
    <div className="relative ">
        <Image src={image} alt={"banner2"} width={2000} height={2000} priority className="w-full h-[100vh] object-cover" />
      <div className="flex flex-col lg:flex-row justify-between px-[18px] py-[50px] lg:py-[100px]">
        <div className="lg:w-[55%] mb-5">
          <h1 className="text-[#30282A] text-[45px] lg:text-[65px] tracking-[1.3px] leading-[56px] boing_thin">{title}</h1>
          <h2 className="avenir_book text-[#30282A] text-[15px] tracking-[1.3px] leading-[45px]">{sub}</h2>
        </div>
        <div className="lg:w-[60%]">
          <h2 className="avenir_book mb-[21px] lg:mb-[41px] text-[#30282A] text-[15px] tracking-[0.3px] leading-[22px]">{website}</h2>
          <div className="avenir_book [&>p]:text-[#30282A] text-[15px] tracking-[0.3px] leading-[22px]"><PortableText value={description} /></div>
        </div>
        </div>
    </div>
  );
};

export default Banner2;
