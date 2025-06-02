"use client"

import Image from "next/image"
import layout1 from "@/public/sanity/layout/layout1.png"
import layout2 from "@/public/sanity/layout/layout2.png"



export function MyPreviewLAOUTBG(props: any) {
  return (
    <div >
      {props.renderDefault(props)}
      {
        props.value == "layout1" ?
          <Image src={layout1} alt="layout1" width={700} height={700} />
          : props.value == "layout2" ?
          <Image src={layout2} alt="layout2" width={700} height={700} />
          :  ""
                  
      }
    </div>
  )
}