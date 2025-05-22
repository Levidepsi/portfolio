"use client"

import { Destinations } from "@/components/global/components"
import "./mapwithimage.css"
import Image from "next/image"
import { PortableText } from "next-sanity"
import {motion} from "motion/react"

const MapWithImage = (
  {
   destinations
  }:
  {
    destinations: Destinations[]
  }) => {
    return (
      <div className="">
        {destinations && destinations.map((item: Destinations, index: number) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="destination-item-wrapper px-[14px] lg:px-[56px] py-[50px]" key={index}>
              <div className="img-map-wrapper flex flex-col gap-[16px] lg:flex-row mb-[30px] overflow-hidden">
                <div className="map_wrapper lg:w-[40%] overflow-hidden mt-[-64px]">
                  <iframe
                    src={`${item.mapUrl}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy"
                    className=" lg:h-full h-[486px]"
                  ></iframe>
                </div>
                <div className="image_wrapper lg:w-[60%]">
                  <Image src={item.image} alt={item.title} width={1000} height={1000} className="w-full h-auto" />
                </div>
              </div>
              <div className="content-wrapper flex justify-between flex-col lg:flex-row ">
                <div className="title mb-[30px] lg:w-[44%]">
                  <h2 className="text-[14px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] mb-5 leading-[18px] text-black aktiv_regular uppercase">Itenerary</h2>
                  <h2 className="text-[20px] leading-[24px] 2xl:text-[1.302vw] 2xl:leading-[1.563vw] text-black aktiv_medium">{item.title}</h2>
                </div>
                <div className="contents-wrapper lg:w-[60%]">
                  <PortableText value={item.body}/>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    )
}

export default MapWithImage