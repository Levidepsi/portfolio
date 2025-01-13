
import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import TruncatedPortableText from "../../../hooks/TruncatedText";



export default function Post({ page }: any) {
  // const { title, mainImage, body } = post;


  return (
    <div className="lg:mt-[47px] mt-[100px] mb-[90px]">
      <div className={`flex flex-col-reverse lg:flex-row mb-[20px] lg:mb-[109px]`} >
        <div className={`lg:w-[50%] px-[18px]`}>
          <div className={` lg:flex flex-col h-full justify-end`}>
          {page.title && <h1 className={`  text-[#30282A] text-[45px] mb-5 lg:text-[65px] tracking-[1.3px] lg:leading-[56px] lg:max-w-[480px]  boing_thin `}>{page.title}</h1>}
            
        </div>  
        </div>
        <div className="lg:w-[50%]">
            <Image
              src={page.mainImage}
              alt={page.title ? page.title : "Text With Image"}
              width={2000}
              height={2000}
              priority
              className="object-cover xl:min-h-[47.461vw] mb-5 lg:mb-0" />
          
        </div>
      </div>
      <div className="mx-[18px] border-b-[1px] border-solid border-[#2D2E33] pb-[92px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div>
            {page.body &&
            <div
              className={` avenir_book singleposttext lg:max-w-[790px]  pt-[20px] [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
              <PortableText value={page.body} />
              </div>
            }
            <Image src={page.image2} alt={`${page.title}`} width={1000} height={1000} className="object-cover w-full h-auto 2xl:h-[35.547vw] mt-[33px] mb-[55px]" />
              {page.body2 &&
                <div
                  className={` avenir_book singleposttext lg:max-w-[790px]  pt-[20px] [&>p]:text-[#30282A] text-[15px] tracking-[0.2px] leading-[22px]`}>
                  <PortableText value={page.body} />
              </div>
            }
          </div>
          <div>
            <span
              className="flex w-full max-w-[308px] mb-[20px] pb-[11px] text-[#30282A] text-[11px] tracking-[1.32px] leading-[15px] lg:justify-end border-b-[1px] border-solid border-[#30282A] avenir_roman">
              {page.date}
            </span>
            <span
              className="flex w-full max-w-[308px] pb-[11px] text-[#30282A] text-[11px] tracking-[1.32px] leading-[15px] lg:justify-end border-b-[1px] border-solid border-[#30282A] avenir_roman"
            >
              {page.author}
            </span>
          </div>
        </div>
          
        
      </div>
    </div>
  );
}