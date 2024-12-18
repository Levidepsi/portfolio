"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ navigation }: any) => {
  const pathname = usePathname()

  useEffect(() => {
    let lastScroll = 0
    let stickyHeaderHome = document.querySelector(".secondimage")
    let stickyHeaderHomemobile = document.querySelector(".secondimagemobile")


    const scrollHandler = () => {
      let currentScrollPos = window.scrollY

      let currentScroll = window.scrollY

      if (currentScrollPos >= 300 && currentScroll > lastScroll ) {
        // Scrolling down
        stickyHeaderHome?.classList.add("active")
        stickyHeaderHomemobile?.classList.add("active")

      } else {
        if (currentScrollPos < 300) {
          stickyHeaderHome?.classList.remove("active")
          stickyHeaderHomemobile?.classList.remove("active")

        } 
      }

      lastScroll = currentScroll
    }
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])


    return(
      <div className="">
        {pathname.includes("/admin") ? "" : 
          <>
             <div className="header_wrap justify-between items-center absolute top-0 left-0 z-[999] pt-[22px] w-full  transition-all duration-[0.5s] h-auto px-[32px] lg:flex hidden">
              <Link href={"/"} className="header_logo  max-w-[161px]">
                <Image src={navigation.header_logo} alt="Navigation" width={500} height={500} className="h-auto w-full firstimage max-w-[161px] ml-[-15px]" />
                <Image src={navigation.footer_logo} alt="Navigation" width={500} height={500} className="h-auto w-full fixed  secondimage max-w-[88px] " />

              </Link>
              <div className="flex justify-between items-center w-full">

                <ul className="flex fixed right-[32px] link_items_wrap">
                  {navigation.header_menu && navigation.header_menu.map((nav: { title: string; link: string }, i: number) => {
                    return (
                        <Link key={i} href={ `/${nav.link}` } className="text-[18px] leading-[22px] apercu  text-[#0D4BA0]  transition-all duration-[0.5s]">
                            <li>
                                {nav.title}
                            </li>
                        </Link>
                    )
                  })}  
                </ul>
              </div>
          </div>
            <MobileHeader navigation={navigation } />
          </>
        }
      </div>
   )
};


const MobileHeader = ({ navigation }: any) => {
  
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    let stickyHeaderHomemobile = document.querySelector(".secondimagemobile")


    const scrollHandler = () => {
      let currentScrollPos = window.scrollY

      let currentScroll = window.scrollY

      if (currentScrollPos >= 300 && currentScroll > lastScroll ) {
        // Scrolling down
        stickyHeaderHomemobile?.classList.add("active")

      } else {
        if (currentScrollPos < 300) {
          stickyHeaderHomemobile?.classList.remove("active")

        } 
      }

      lastScroll = currentScroll
    }
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])


  return (
    <>
    <div className={` absolute top-0 left-0 bg-black z-[10] w-full h-full transition-all duration-[0.7s] ${openMenu ? "opacity-[0.7] visible " : "opacity-0 invisible"}`}></div>
    <div className="block lg:hidden  absolute top-0 left-0 z-[999] w-full  pt-[15px] transition-all duration-[0.5s] px-5">
      
      <div className="flex justify-between items-center">
          <Image src={navigation.header_logo} alt="Navigation" width={500} height={500} className="h-auto w-[180px] firstimagemobile ml-[-15px]" />
          <Image src={navigation.footer_logo} alt="Navigation" width={500} height={500} className="h-auto w-full fixed  secondimagemobile max-w-[88px] " />
          
        <div
          className={`lg:hidden block fixed right-5  ml-5 lg:ml-0 `}
          onClick={() =>setOpenMenu(!openMenu)}
        >
          <div className={`bar1 ${openMenu ? "active" : ""} `}></div>
          <div className={`bar2 ${openMenu ? "active" : ""} `}></div>
          <div className={`bar3 ${openMenu ? "active" : ""} `}></div>
        </div>
      </div>
      <div className={`mobile_menu p-[30px] ${openMenu ? "active" : ""}`}>
        <ul className="">
          {navigation.header_menu && navigation.header_menu.map((nav: { title: string; link: string }, i: number) => {
            return (
                <Link key={i} href={ `/${nav.link}` } className="text-[18px] leading-[50px] apercu   text-[#0D4BA0] transition-all duration-[0.5s]">
                    <li>
                        {nav.title}
                    </li>
                </Link>
            )
          })}  
        </ul>
      </div>
      </div>
      </>
  )
}

export default Header;
