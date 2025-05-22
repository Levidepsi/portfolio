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
    <div className={`flex justify-center md:justify-between gap-x-[50px] px-[15px] md:px-[47px] m py-[30px] mt-[50px] flex-col md:flex-row bg-[#F5F7FA]`}>
      <div className="footerLogo md:w-[12%] text-center flex flex-col justify-center lg:justify-start items-center mb-[50px] md:mb-0">
      <Link className="text-center flex flex-col justify-center items-center" href={"/"}>
        <Image src={footer.footer_logo} alt="RuthBerg" width={500} height={500} className="w-[49px] h-auto object-cover mb-[12.85px]" />
        <Image src={footer.header_logo} alt="RuthBerg" width={500} height={500} className="w-[142px] h-[15.78px] md:h-auto object-cover" />
      </Link>
      </div>
      <div className="md:w-[80%] text-center md:text-left gap-x-5 flex flex-col justify-center md:flex-row md:justify-end">
        <div className="footer_menu_links  md:w-[23.3333%] mb-[30px] md:mb-0">
          <div className="links text-center md:text-left md:mb-[35px]">
            {footer?.footer_menu.map((item: FooterMenuItem, index: number) => {
              return (
                <div className="menu_Link" key={index}>
                  <Link href={`/${item.link}`} className="text-[12px] aktiv_regular relative pb-[5px] leading-[15px] text-[#0D988C]">
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="copywrite aktiv_regular hidden md:block ">
            &copy;{footer.copywrite}
          </div>
        </div>
        <div className="contact-emails aktiv_regular text-center md:text-left mb-5 md:mb-0  md:w-[23.3333%]">
          <PortableText value={footer.contact_email}/>
        </div>
        {footer.location &&
        <div className="locations aktiv_regular mb-5 md:mb-0  md:w-[33.3333%]">
          <PortableText value={footer.location} />
        </div>
        }
        <div className="copywrite aktiv_regular md:hidden text-center md:text-left md:w-[33.3333%]">
          &copy;{footer.copywrite}
        </div>
      </div>
    </div>
  )
}

export default Footer