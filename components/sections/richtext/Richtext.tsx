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
    <div className="richtext_Container px-[32px] lg:px-[109px] pt-[75px]  lg:pb-0 ">
      <PortableText value={description} />
    </div>
  )
}

export default Richtext