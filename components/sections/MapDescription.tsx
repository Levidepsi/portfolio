"use client"

import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useState } from "react";


type Pointers = {
  pointers: Array<{
      title: string;
      body1: Array<{
        _type: string;
        style?: string;
        children?: Array<{
          _type: string;
          text?: string;
        }>;
      }>;
      body2: Array<{
        _type: string;
        style?: string;
        children?: Array<{
          _type: string;
          text?: string;
        }>;
      }>;
    }>
  };

type Props = {
  pointers: Pointers["pointers"];
  image: string; // Add background color
};

const MapDescription: React.FC<Props> = ({ pointers, image }) => {

  const [showdetails, setShowDetails] = useState(null)

  const hoverDetails = (index: any) => {
    setShowDetails(showdetails == index ? null : index)
  }

  return (
    <div className="relative lg:h-[100vh] overflow-hidden">
      <Image src={image} alt="Map" width={2000} height={2000} className="w-full h-auto object-cover relative" />
      <div>
        {pointers && pointers.map((pointer: any, index: number) => {
          return (
            <div
              key={index}
              className={`absolute link3 ${
                index == 0 ?
                "top-[41%] left-[17%] md:left-[16.5%] md:top-[45%] lg:top-[43%] lg:left-[17%] xl:top-[49%] 2xl:top-[54%] 2xl:left-[18%]"
                : index == 1 ?
                  "top-[50%] left-[59%] md:left-[61%] md:top-[53%] lg:top-[51%] lg:left-[62.5%] xl:top-[63%] 2xl:top-[67%] 2xl:left-[62.5%]"
                  : index == 2 ?
                  "top-[46%] left-[63%] md:left-[64%] md:top-[50%] lg:top-[48%] lg:left-[64%] xl:top-[60%] xl:left-[65%] 2xl:top-[65%] 2xl:left-[65%]"
                  : index == 3 ?
                  "top-[52%] left-[67%] md:left-[67%] md:top-[52%] lg:top-[52%] lg:left-[67%] xl:top-[63%] xl:left-[69%] 2xl:top-[67%] 2xl:left-[69%]"
                  : index == 4 ?
                  "top-[48%] left-[70%] md:left-[70%] md:top-[52%] lg:top-[48%] lg:left-[71%] xl:top-[61%] xl:left-[72%] 2xl:top-[65.5%] 2xl:left-[72%]"
                  : index == 5 ?
                  "top-[43%] left-[72%] md:left-[72%] md:top-[49%] lg:top-[45%] lg:left-[73%] xl:top-[58%] xl:left-[73%] 2xl:top-[63%] 2xl:left-[73%]"
                  : ""
                  
              } w-[20px] sm:w-[30px] h-[20px]  sm:h-[27px] lg:h-[30px]  translate-x-[50%] translate-y-[50%] 2xl:w-[2vw] 2xl:h-[2vw]`}>
              <span
                onMouseLeave={() => hoverDetails(null)}
                onMouseEnter={() => hoverDetails(index)}
                className={`flex  text-[#EFEBE5] justify-center h-[17px] w-[17px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] 2xl:w-[20px] 2xl:h-[20px] items-center bg-[#30282A] text-[11px] lg:text-[13px] tracking-[0.26px] leading-[18px] rounded-[50%] avenir_roman`}>91</span>
              <div className={`bg-[#30282A] map_contents hidden lg:block lg:top-[-150px] lg:left-0 w-[300px] rounded-[5px] p-[10px] absolute ${showdetails == index ? "visible opacity-[1] z-10" : "opacity-0 invisible"}`}>
                <div className="[&>p]:text-[#EFEBE5] mapbody1 text-[11px] tracking-[0.13px] leading-[18px] avenir_roman ">
                  <PortableText value={pointer.body1} />
                </div>
                <div className="[&>p]:text-[#EFEBE5] mapbody2 text-[11px] tracking-[0.13px] leading-[18px] avenir_roman ">
                  <PortableText value={pointer.body2} />
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
      <div>
        {pointers && pointers.map((pointer: any, index: number) => {
          return (
              <div key={index} className={`bg-[#30282A] map_contents lg:hidden lg:top-[-150px] lg:left-0 w-[300px] rounded-[5px] p-[10px] absolute ${showdetails == index ? "visible opacity-[1] z-10" : "opacity-0 invisible"}`}>
                <div className="[&>p]:text-[#EFEBE5] mapbody1 text-[11px] tracking-[0.13px] leading-[18px] avenir_roman ">
                  <PortableText value={pointer.body1} />
                </div>
                <div className="[&>p]:text-[#EFEBE5] mapbody2 text-[11px] tracking-[0.13px] leading-[18px] avenir_roman ">
                  <PortableText value={pointer.body2} />
                </div>
              </div>
          )
        })}
      </div>
  </div>
  );
};

export default MapDescription;
