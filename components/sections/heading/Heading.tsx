"use client"

import { useWindowWide } from "@/hooks/ScreenSize";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import "./heading.css"
import { MultipleTextArray } from "@/components/global/components";


type Description = {
  _type: string;
  style?: string;
  children?: Array<{
    _type: string;
    text?: string;
  }>;
};

interface HeadingProps {
  description: Description[];
  title: string;
  padding_top: number;
  multiple_text: MultipleTextArray[];
  descriptions_max_width: number
}

const Heading: React.FC<HeadingProps> =
  ({
    description,
    title,
    padding_top,
    descriptions_max_width,
    multiple_text
  }) => {
    const desktop = useWindowWide(1024)
  return (
    <div
      className={`py-[50px] lg:pt-[100px] lg:pb-[82px] px-[32px] lg:px-[109px]`}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        style={{ maxWidth: `${descriptions_max_width}px` }}
        className="heading_description aktiv_regular mx-auto text-center">
          <PortableText value={description} />
      </motion.div>
      <div className="flex flex-col multiple_text_wrapper max-w-[1100px] mx-auto px-[14px] lg:px-0">
        {multiple_text && multiple_text.map((item: MultipleTextArray, index: number) => {
          return (
            <div className={`flex w-auto multiple_textitem moinster_regular ${item.position == "start" ? " lg:justify-start " : item.position == "end" ? "  lg:justify-end" : ""}`}
              key={index}>
                {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Heading