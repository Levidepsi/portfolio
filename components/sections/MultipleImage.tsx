"use client"

import Image from "next/image";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";

const MultipleImage = ({ multiple_image_items, title }: any) => {

  const tablet = useWindowWide(768)
  const desktop = useWindowWide(768)


  return (
    <div className="px-[20px] mt-[100px] mb-5 lg:mt-[150px] lg:mb-[20px] lg:px-[20px] h-full">
      <div className="multipleimage_wrapper relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {multiple_image_items && multiple_image_items.map((item: any, i: number) => {
        return (
          <Link 
            href={item.link ? `${item.link}`:"/"}
            key={i}
            className={`block w-full h-full overflow-hidden`} >
            <h2 className="mb-[11px] text-[#30282A] tracking-[1.56px] leading-[18px] avenir_roman uppercase">{item.title}</h2>
            <Image
              src={item.image} alt={item.link} width={1000} height={1000} className="h-full w-full object-cover" />
          </Link>
        )
      })}
    </div>
    </div>
  );
};

export default MultipleImage;
