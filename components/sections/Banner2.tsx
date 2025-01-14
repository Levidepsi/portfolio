"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import {delay, motion} from "framer-motion"
import { useWindowWide } from "../../hooks/ScreenSize";

const Banner2 = ({ image, description, max_width, sub, website, title }: any) => {
  const desktop = useWindowWide(1024)

 const variables = {
  initial: {
    opacity: 0,
    x: desktop ? -50 : 0, // Slide from the left on desktop, no slide on mobile
  },
  whileInView: {
    opacity: 1,
    x: 0, // Reset position to default
    transition: {
      duration: 0.3,
      delay: 0.7 ,
      ease: "easeInOut", // Ease in and out animation
    },
  },
  };
  
   const variables2 = {
  initial: desktop ? {
    opacity: 0,
    x:50, // Slide from the left on desktop, no slide on mobile
     } :
       {
    opacity: 0,
    x:  0, // Slide from the left on desktop, no slide on mobile
  },
  whileInView: {
    opacity: 1,
    x: 0, // Reset position to default
    transition: {
      duration: 0.3,
      delay: 0.7 ,
      ease: "easeInOut", // Ease in and out animation
    },
  },
};
  
  return (
    <motion.div
      
      className="relative ">
        <Image src={image} alt={"banner2"} width={2000} height={2000} priority className="w-full h-[100vh] object-cover" />
      <div className="flex flex-col lg:flex-row justify-between px-[18px] py-[50px] lg:py-[100px]">
        <motion.div
           initial={"initial"}
          whileInView={"whileInView"}
          variants={variables}
          viewport={{ once: true }}
          className="lg:w-[55%] mb-5">
          <h1 className="text-[#30282A] text-[45px] lg:text-[65px] tracking-[1.3px] leading-[56px] boing_thin">{title}</h1>
          <h2 className="avenir_book text-[#30282A] text-[15px] tracking-[1.3px] leading-[45px]">{sub}</h2>
        </motion.div>
        <motion.div
           initial={"initial"}
          whileInView={"whileInView"}
          variants={variables2}
          viewport={{ once: true }}
          className="lg:w-[60%]">
          <h2 className="avenir_book mb-[21px] lg:mb-[41px] text-[#30282A] text-[15px] tracking-[0.3px] leading-[22px]">{website}</h2>
          <div className="avenir_book [&>p]:text-[#30282A] text-[15px] tracking-[0.3px] leading-[22px]"><PortableText value={description} /></div>
        </motion.div>
        </div>
    </motion.div>
  );
};

export default Banner2;
