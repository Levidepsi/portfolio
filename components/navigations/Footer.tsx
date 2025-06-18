"use client"

import { FooterMenuItem, FooterValues } from "@/types/header"
import { PortableText, SanityDocument } from "next-sanity"
import Image from "next/image"
import "./header.css"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"


const Footer = ({ footer }: { footer: FooterValues }) => {
  const path = usePathname()

  const isAdmin = path?.includes("/admin") ? true : false;

  if (isAdmin) {
    return null
  }

  const [openAccordion, setOpenAccordion] = useState<number | null>(null)


  const handleClickAcc = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }
  
  return (
    <div className={`flex overflow-hidden justify-center md:justify-between gap-x-[50px] px-[32px] lg:pr-[32px] lg:pl-[102px]  py-[30px] lg:py-[74px]  flex-col md:flex-col bg-[#412A24]`}>
      <div className="flex lg:gap-x-[102px] justify-between lg:flex-row flex-col">
        <div className="lg:w-[10%]  lg:gap-y-[139px] flex flex-col justify-between mb-5 lg:mb-0">
          <Link className="text-center flex flex-col justify-center items-center" href={"/"}>
            <Image src={footer.footer_logo} alt="RuthBerg" width={500} height={500} className="w-[50px] lg:w-[94px] h-auto lg:h-[181px] object-cover mb-[12.85px] lg:mr-auto" />
            {/* <Image src={footer.header_logo} alt="RuthBerg" width={500} height={500} className="w-[142px] h-[15.78px] md:h-auto object-cover" /> */}
          </Link>
          <div className="copywrite hidden lg:block forma_regular text-[13px] tracking-[0.26px] leading-[21px] text-[#F8F3E9] aktiv_regular  w-max">
                &copy;2025, JD SPIRITS
          </div>
        </div>
        <div className="footer_menus gap-[10px] justify-center flex flex-wrap">
          <div 
          className={`${openAccordion == 0 ? "underline" : ""} text-[13px] forma_regular block md:hidden uppercase text-[#F8F3E9] tracking-[0.26px] leading-[21px]`}
          onClick={() => handleClickAcc(0)}>Contact</div>
          <div 
          className={`${openAccordion == 1 ? "underline" : ""} text-[13px] forma_regular block md:hidden uppercase text-[#F8F3E9] tracking-[0.26px] leading-[21px]`}
          onClick={() => handleClickAcc(1)}>Services</div>
          <div 
          className={`${openAccordion == 2 ? "underline" : ""} text-[13px] forma_regular block md:hidden uppercase text-[#F8F3E9] tracking-[0.26px] leading-[21px]`}
          onClick={() => handleClickAcc(2)}>About</div>
          <div 
          className={`${openAccordion == 3 ? "underline" : ""} text-[13px] forma_regular block md:hidden uppercase text-[#F8F3E9] tracking-[0.26px] leading-[21px]`}
          onClick={() => handleClickAcc(3)}>Legal</div>
        </div>
        <div className=" flex footer_descriptions flex-col md:gap-x-[30px] relative lg:gap-x-[52px] lg:w-[50%] lg:justify-between  md:flex-row mb-[20px] lg:mb-[0px]">
          <div className={`relative descriptions_relative ${openAccordion != null ? "active" : ""}`}></div>
          <div  className={`contact ${openAccordion == 0 ? "active" : ""}  md:w-[25%] forma_regular lg:w-auto mb-5 lg:mb-0 relative`}>
            <PortableText value={footer.contact_email} />
            <div className="absolute md:hidden right-[5px] top-[5px]">
                {/* <svg
                className="w-[5.98px] rotate-[90deg]"
                xmlns="http://www.w3.org/2000/svg"
                width="5.98"
                height="11.343"
                viewBox="0 0 5.98 11.343">
                <path
                  id="Path_64"
                  data-name="Path 64"
                  d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
                  transform="translate(-16296.321 1662.301) rotate(-90)"
                  fill="none"
                  stroke="#F8F3E9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.7" />
              </svg> */}
            </div>
          </div>
          <div  className={`services ${openAccordion == 1 ? "active" : ""}  md:w-[25%] forma_regular relative flex-col lg:flex justify-between lg:w-auto mb-5 lg:mb-0`}>
            <div className="forma_regular">
              <PortableText value={footer.services} />
            </div>
            <div className="absolute md:hidden right-[5px] top-[5px]">
                {/* <svg
                className="w-[5.98px] rotate-[90deg]"
                xmlns="http://www.w3.org/2000/svg"
                width="5.98"
                height="11.343"
                viewBox="0 0 5.98 11.343">
                <path
                  id="Path_64"
                  data-name="Path 64"
                  d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
                  transform="translate(-16296.321 1662.301) rotate(-90)"
                  fill="none"
                  stroke="#F8F3E9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.7" />
              </svg> */}
            </div>
            <Link href={"/imprint"} className="text-[13px] forma_regular hidden lg:block text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
              Imprint
            </Link>
          </div>
          <div  className={`about ${openAccordion == 2 ? "active" : ""}  md:w-[25%] relative forma_regular lg:w-auto flex-col lg:flex justify-between mb-5 lg:mb-0`}>
            <div className="forma_regular">
              <PortableText value={footer.about} />
            </div>
            <div className="absolute md:hidden right-[5px] top-[5px]">
                {/* <svg
                className="w-[5.98px] rotate-[90deg]"
                xmlns="http://www.w3.org/2000/svg"
                width="5.98"
                height="11.343"
                viewBox="0 0 5.98 11.343">
                <path
                  id="Path_64"
                  data-name="Path 64"
                  d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
                  transform="translate(-16296.321 1662.301) rotate(-90)"
                  fill="none"
                  stroke="#F8F3E9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.7" />
              </svg> */}
            </div>
            <Link href={"/privacy-policy"} className="text-[13px] forma_regular hidden lg:block text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
              Privacy Policy
            </Link>
          </div>
          <div  className={`info ${openAccordion == 3 ? "active" : ""}  md:w-[25%] relative forma_regular lg:hidden lg:w-auto mb-5 lg:mb-0`}>
            <PortableText value={footer.company_info} />
            <div className="absolute md:hidden right-[5px] top-[5px]">
                {/* <svg
                className="w-[5.98px] rotate-[90deg]"
                xmlns="http://www.w3.org/2000/svg"
                width="5.98"
                height="11.343"
                viewBox="0 0 5.98 11.343">
                <path
                  id="Path_64"
                  data-name="Path 64"
                  d="M1651.453,16296.816l5.2,5.135,5.151-5.135"
                  transform="translate(-16296.321 1662.301) rotate(-90)"
                  fill="none"
                  stroke="#F8F3E9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.7" />
              </svg> */}
            </div>
          </div>
        </div>
        <div className="info hidden lg:flex forma_regular justify-between flex-col lg:w-[20%] ">
          <div className="forma_regular">
           <PortableText value={footer.company_info} />
          </div>
          <Link href={"/cookie-policy"} className="text-[13px] forma_regular  text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Cookie Policy
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-between lg:justify-start md:flex-row items-center">
        <div className="copywrite forma_regular text-[13px] md:w-[20%] tracking-[0.26px] leading-[21px] text-[#F8F3E9] aktiv_regular lg:w-[30%]">
              &copy;2025, JD SPIRITS
        </div>
        <div className="footer_links flex flex-col md:flex-row items-center w-full md:justify-between md:w-[70%] lg:w-[62.5%] 2xl:w-[62.5%]">
          <Link href={"/imprint"} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Imprint
          </Link>
          <Link href={"/privacy-policy"} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Privacy Policy
          </Link>
          <Link href={"/cookie-policy"} className="text-[13px] forma_regular md:w-[20%] text-[#F8F3E9] tracking-[0.26px] leading-[21px]">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer