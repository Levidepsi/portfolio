"use client"

import { useWindowWide } from "@/hooks/ScreenSize";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import "./heading.css"


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
  descriptions_max_width: number
}

const Heading: React.FC<HeadingProps> =
  ({
    description,
    title,
    padding_top,
    descriptions_max_width
  }) => {
    const desktop = useWindowWide(1024)
  return (
    <div
      style={{
        paddingTop: desktop ? `${padding_top}px` : `${padding_top - 20}px`
      }}
      className={`pb-[70px] px-[14px] lg:px-[56px]`}>
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
    </div>
  )
}

export default Heading