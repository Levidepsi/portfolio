"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {motion} from "framer-motion"

const TextWithImage2 = ({ textwimage_items2 }: any) => {
  
  
    const variables2 = {
      initial: 
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
    <div className="">
      {textwimage_items2 && textwimage_items2.map((item: any, index: number) => {
        let color: string = item.color
        return (
          <motion.div
           
            style={{ background: `${item.background}` }}
            className={`flex p-5 lg:px-[181px] py-[98px] flex-col-reverse ${item.content_position == true ? "lg:flex-row-reverse" : "lg:flex-row"}`} key={index}>
            <motion.div
                initial={"initial"}
            whileInView={"whileInView"}
            variants={variables2}
            viewport={{ once: true }}
              className={`lg:w-[50%] ${item.content_position == true ? "lg:pl-[32px]" : ""}`}>
              <div className=" lg:flex flex-col h-full justify-between">
             {item.title &&  <h1 style={{color: `${item.color}`}} className="text-[#EFEBE5] text-[45px] mb-5 lg:text-[65px] tracking-[1.3px] lg:leading-[56px] lg:max-w-[480px]  boing_thin lg:mb-0">{item.title}</h1>}
              <div className={`avenir_book [&>p]:text-[${color ? `${color}` : `#EFEBE5`}] lg:max-w-[440px] text-[15px] tracking-[0.3px] leading-[22px]`}><PortableText value={item.body}/></div>
            </div>  
            </motion.div>
            <motion.div
                initial={"initial"}
                whileInView={"whileInView"}
                variants={variables2}
                viewport={{ once: true }}
              className="lg:w-[50%]">
            <Image src={item.image} alt={item.title ? item.title : "TExt With Image 2"} width={2000} height={2000} priority className="object-cover mb-5 lg:mb-0" />
            </motion.div>
          </motion.div>
          )
      })}
    </div>
  );
};

export default TextWithImage2;
