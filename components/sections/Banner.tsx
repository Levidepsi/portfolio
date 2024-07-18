"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const Banner = ({ image, description, max_width, content_position }: any) => {
  return (
    <div className="relative">
      <Image src={image} alt={"banner"} width={2000} height={2000} priority className="w-full h-[100vh] object-cover" />

      <div className={`banner_content ${content_position}`} style={{maxWidth: `${max_width ? max_width : ""}px`}}>
        <PortableText value={description} />
      </div>
    </div>
  );
};

export default Banner;
