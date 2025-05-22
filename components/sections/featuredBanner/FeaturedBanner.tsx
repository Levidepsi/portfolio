"use client"

import Image from "next/image";

const FeaturedBanner = ({ image, image_height, backgroundColor }: { image: string;  image_height: number, backgroundColor: string}) => {
  return (
    <div 
      style={{
        backgroundColor: `${backgroundColor}`
      }}
      className="px-[14px] lg:px-[47px] pt-[50px]">
      <Image
        style={{
          height: `${image_height}vh`
        }}
        src={image} alt="Featured Banner" width={1000} height={1000} priority className="w-full h-auto object-cover object-center" />
    </div>
  )
}

export default FeaturedBanner