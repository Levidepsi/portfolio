"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const FeaturePortfolio = ({ title, image, description, details, image_width, image_height }: any) => {
  return (
    <div className="px-5 lg:px-[32px]">
       <Image
        style={{
              width: image_width ? `${image_width}px` : "132px",
              height: image_height ? `${image_height}px` : "132px"

            }}
        src={image}
        alt={title}
        width={500}
        height={500}
        priority
        className="mb-[20px] lg:mb-[40px] ml-[-20px]" />
      
      <h2 className="text-[28px] leading-[35px] lg:text-[30px] lg:leading-[37px] text-[#0D4BA0] apercu mb-5">{title}:</h2>
      

      <div className=" flex flex-col lg:flex-row lg:justify-between">
         <div className="lg:w-[60%] lg:pr-5 mb-[30px] lg:mb-0">
            <div className="lg:max-w-[600px]">
              <div className="text-[13px] portfolio_description leading-[17px] lg:text-[15px] lg:leading-[19px] [&>p]:text-[#0D4BA0] apercu"><PortableText value={description}/></div>
            </div>
          </div>
        <div className="lg:w-[40%]">
          {details && details.map((item: any, i: number) => {
            return (
              <div className="flex  pb-5" key={i}>
                <p className="text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] text-[#0D4BA0] apercu">{item.key}:</p>
                <p className="apercu_italic text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px] text-[#0D4BA0] pl-5 lg:pl-[30px]">{item.value}</p>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturePortfolio;
