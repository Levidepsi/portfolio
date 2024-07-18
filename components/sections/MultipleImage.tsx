"use client"

import Image from "next/image";
import Link from "next/link";
import { useWindowWide } from "../../hooks/ScreenSize";

const MultipleImage = ({ multiple_image_items, title }: any) => {

  const tablet = useWindowWide(768)
  const desktop = useWindowWide(768)


  return (
    <div className="px-[20px] lg:px-[32px]">
      <h2>{title}</h2>
      <div className="multipleimage_wrapper relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {multiple_image_items && multiple_image_items.map((item: any, i: number) => {
        return (
          <Link 
            href={item.link ? `${item.link}`:"/"}
            key={i}
            className={`flex ${item.show_border_right && "multipleimage_item-borderRight"} ${item.show_border_bottom && "multipleimage_item-borderBottom"} justify-center items-center relative`} >
            <Image
               style={{
                width: item.width ? `${item.width}px` : "132px",
                height: item.height ? `${item.height}px` : "132px"

              }}
              src={item.image} alt={item.link} width={500} height={500} className="h-full w-full " />
          </Link>
        )
      })}
    </div>
    </div>
  );
};

export default MultipleImage;
