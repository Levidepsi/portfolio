"use client"

import { FooterMenuItem, FooterValues } from "@/types/header"
import { PortableText, SanityDocument } from "next-sanity"
import Image from "next/image"
import "./header.css"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Footer = ({ footer }: { footer: FooterValues }) => {
  const path = usePathname()

  const isAdmin = path?.includes("/admin") ? true : false;

  if (isAdmin) {
    return null
  }
  
  return (
    <div className={`flex justify-center md:justify-between gap-x-[50px] px-[32px] lg:pr-[32px] lg:pl-[102px]  py-[30px] lg:py-[74px]  flex-col md:flex-col bg-[#67231E]`}>
      <div className="flex lg:gap-x-[102px] justify-between lg:flex-row flex-col">
        <div className="lg:w-[10%] mb-5 lg:mb-0">
          <Link className="text-center flex flex-col justify-center items-center" href={"/"}>
            <Image src={footer.footer_logo} alt="RuthBerg" width={500} height={500} className="w-[94px] h-[181px] object-cover mb-[12.85px] lg:mr-auto" />
            {/* <Image src={footer.header_logo} alt="RuthBerg" width={500} height={500} className="w-[142px] h-[15.78px] md:h-auto object-cover" /> */}
          </Link>
        </div>
        <div className=" flex footer_descriptions flex-col md:gap-x-[30px]  lg:gap-x-[52px] lg:w-[50%] lg:justify-between  md:flex-row mb-[50px] lg:mb-[113px]">
          <div className="contact md:w-[25%] forma_regular lg:w-auto mb-5 lg:mb-0">
            <PortableText value={footer.contact_email}/>
          </div>
          <div className="services md:w-[25%] forma_regular lg:w-auto mb-5 lg:mb-0">
            <PortableText value={footer.services}/>
          </div>
          <div className="about md:w-[25%] forma_regular lg:w-auto mb-5 lg:mb-0">
            <PortableText value={footer.about}/>
          </div>
          <div className="info md:w-[25%] forma_regular lg:hidden lg:w-auto mb-5 lg:mb-0">
            <PortableText value={footer.company_info}/>
          </div>
        </div>
        <div className="info hidden lg:flex forma_regular flex-col lg:w-[20%] ">
          <PortableText value={footer.company_info}/>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:justify-start md:flex-row items-center">
        <div className="copywrite forma_regular text-[13px] md:w-[20%] tracking-[0.26px] leading-[21px] text-[#F8F3E9] aktiv_regular lg:w-[30%]">
              &copy;2025, JD SPIRITS
        </div>
        <div className="footer_links flex flex-col md:flex-row items-center w-full md:justify-between md:w-[70%] lg:w-[62.5%] 2xl:w-[62.5%]">
          <Link href={""} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Imprint
          </Link>
          <Link href={""} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Privacy Policy
          </Link>
          <Link href={""} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer