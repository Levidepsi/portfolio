"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowWide } from "../../hooks/ScreenSize";

const TextWithImage = ({ textwimage_items, padding_top }: any) => {

  let [imageWidth, setImageWidth] = useState<Number>(0)

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    };

    // Set initial width
    handleResize();

    // Update width on window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const desktop = useWindowWide(1024)
  
  return (
    <div style={{paddingTop: desktop ? `${padding_top}px` : `${padding_top + 20}px`}} className="px-5 pt-[50px] pb-5 lg:py-5">
      {textwimage_items && textwimage_items.map((item:
        {
          content_position: boolean;
          title: string;
          body_bottom_max_width: number
          body: Array<{
          _key: string;                
          markDefs: Array<any>;       
          children: Array<{
            _type: string;             
            
          }>;
          _type: string;               
          style: string;               
          }>,
          image: string,
          body_bottom: Array<{
          _key: string;                
          markDefs: Array<any>;       
          children: Array<{
            _type: string;             
            
          }>;
          _type: string;               
          style: string;               
          }> 
        }, index: number) => {
        return (
          <div key={index}>
            <div className={`flex flex-col-reverse ${item.content_position == true ? "lg:flex-row-reverse" : "lg:flex-row"}`} >
            <div className={`lg:w-[50%] ${item.content_position == true ? "flex justify-end" : ""}`}>
              <div className={` lg:flex flex-col h-full ${item.body ? "justify-between" : "justify-end"}`}>
              {item.title && <h1 className={`${item.body ? "mb-5" : ""}  text-[#30282A] text-[45px] mb-5 lg:text-[65px] tracking-[1.3px] lg:leading-[56px] lg:max-w-[480px]  boing_thin `}>{item.title}</h1>}
                <div className="avenir_book [&>p]:text-[#30282A] lg:max-w-[450px] text-[15px] tracking-[0.3px] leading-[22px]"><PortableText value={item.body} /></div>
                {item.body_bottom &&
                <div
                  className="avenir_book block lg:hidden pb-[47px] [&>p]:text-[#30282A] lg:max-w-[451px] text-[15px] tracking-[0.2px] leading-[22px]">
                  <PortableText value={item.body_bottom} />
                </div>}
            </div>  
            </div>
            <div className="lg:w-[50%]">
                <Image
                  ref={imageRef}
                  src={item.image}
                  alt={item.title ? item.title : "Text With Image"}
                  width={2000}
                  height={2000}
                  priority
                  className="object-cover xl:min-h-[47.461vw] mb-5 lg:mb-0" />
              
            </div>
            </div>
            <div
              style={{ maxWidth: `${imageWidth}px` }}
              className=" lg:mr-0 lg:ml-auto max-w-[700px]"
            >
              {item.body_bottom &&
                <div
                  style={{maxWidth: desktop ? `${item.body_bottom_max_width}px` : ""}}
                  className={` avenir_book hidden max-w-[700px]  lg:block pb-[69px] pt-[47px] [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
                  <PortableText value={item.body_bottom} />
                </div>}
            </div>
          </div>
          )
      })}
    </div>
  );
};

export default TextWithImage;
