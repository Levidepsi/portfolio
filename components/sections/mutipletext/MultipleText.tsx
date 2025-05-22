"use client"

import { PortableText } from "next-sanity";
import "./multipletext.css"
import { useWindowWide } from "@/hooks/ScreenSize";
import { MultipleTextProp, TextAccordions } from "@/components/global/components";
import {motion} from "motion/react"

const MultipleText = (
  {
    title,
    body,
    backgroundColor,
    paddingTop,
    paddingBottom,
    descriptions_max_width,
    left_description,
    texts_accordions,
    sub_title,
  }
    :
    {
      body:
      Array<{
        _type: string;
        style?: string;
        children?: Array<{
          _type: string;
          text?: string;
        }>;
      }>;
      backgroundColor: string;
      paddingTop: number;
      paddingBottom: number;
      title: string
      descriptions_max_width: number;
      left_description:
      Array<{
        _type: string;
        style?: string;
        children?: Array<{
          _type: string;
          text?: string;
        }>;
      }>;
      texts_accordions: TextAccordions[];
      sub_title: string;
    }) => {
  
  const desktop = useWindowWide(1024)
  const tablet = useWindowWide(768)

  return (
    <div
      style={{
        paddingTop: desktop ? `${paddingTop}px` : ``,
        paddingBottom: desktop ? `${paddingBottom}px` : ``
      }}
      className={`px-[14px] ${backgroundColor} lg:px-[47px] 2xl:px-[3.06vw] py-[50px] flex flex-col lg:gap-[27px] lg:justify-between md:flex-row`}>
      <motion.div
      initial={{ opacity: 0, transform: "translateY(-50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className={`${left_description ? "w-full lg:max-w-[50%]" : ""} mb-[30px] lg:mb-0`}>
        {title && <h2 className={`text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] ${sub_title ? "mb-5" : texts_accordions ? "mb-5" : left_description  ? "mb-[30px]" : "*:"} lg:mb-[20px] aktiv_regular leading-[18px] text-[#000000] w-full max-w-[400px]`}>{title}</h2>}
        {sub_title && <h2 className={`text-[20px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] ${left_description ? "mb-5" : texts_accordions ? "mb-5" : ""}  aktiv_medium leading-[24px] text-[#000000] w-full max-w-[400px]`}>{sub_title}</h2>}
        {left_description && 
          <div
            style={{
              maxWidth: tablet ? `${descriptions_max_width}px` : title ? "379px" : ""
            }}
            className={`left-description ${title ? "mb-[30px]" : ""} lg:mb-0 aktiv_regular`}>
            <PortableText value={ left_description} />
          </div>  
        }
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className={`right-description aktiv_regular  ${left_description ? "w-full lg:max-w-[50%]" : "w-full lg:max-w-[60%]"}`}>
        {body && 
         <div className={`${texts_accordions ? "mb-[30px]" : ""} lg:mb-0`}>
          <PortableText value={body} />
        </div>
        }

        {texts_accordions && 
          <div className={`accordions ${body ? "pt-[30px]" : ""}`}>
          {texts_accordions && texts_accordions.map((item: TextAccordions, index: number) => {
            return (
              <div
                className="flex accordion_item_wrapper md:flex-row flex-col pb-5 mb-5 justify-between md:gap-x-[20px] gap-y-[20px] md:gap-y-0"
                key={index}>
                <div className="title text-[14px] leading-[16px] aktiv_medium text-[#000]">
                  {item.title}
                </div>
                <div className="body md:max-w-[458px] aktiv_regular">
                  <PortableText value={item.body} />
                </div>
              </div>
            )
          })}
        </div>
        }

      </motion.div>
    </div>
  )
}

export default MultipleText