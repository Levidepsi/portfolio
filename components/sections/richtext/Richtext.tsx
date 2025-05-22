"use client"
import "./richtext.css"

import { PortableText } from "next-sanity";

const Richtext = (
  {
    title,
    description
  }
  :
  {
    title: string;
    description: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
  }>;
  }
) => {
  return (
    <div className="richtext_Container px-[14px] pt-[106px] max-w-[695px] mx-auto 2xl:max-w-[45.247vw]">
      <PortableText value={description} />
    </div>
  )
}

export default Richtext