"use client"

import Image from "next/image";

const FeaturedBanner = ({ image }: any) => {
  return (
    <div className="w-full h-full">
      <Image src={image} alt="Featured Banner" width={2000} height={2000} priority className="object-cover w-full h-[401px] lg:h-[401px] 2xl:h-[26.15vw]" />
    </div>
  );
};

export default FeaturedBanner;
