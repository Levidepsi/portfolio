"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import {motion} from "framer-motion"
import { useWindowWide } from "../../hooks/ScreenSize";

const Banner = ({ image, description, max_width, content_position }: any) => {
  const desktop = useWindowWide(1024)
  return (
    <div className="relative">
      <Image src={image} alt={"banner"} width={2000} height={2000} priority className="w-full h-[100vh] object-cover" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
        className={`banner_content ${content_position}`} style={{ maxWidth: `${max_width ? max_width : ""}px` }}>
        <PortableText value={description} />
      </motion.div>
    </div>
  );
};

export default Banner;
