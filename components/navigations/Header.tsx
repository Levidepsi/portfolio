"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GlobalContext } from "../global/ThemeProvider";

const Header = ({ navigation }: any) => {
  const pathname = usePathname()

  const {openMenu, setOpenMenu} = GlobalContext()

  // useEffect(() => {
  //   let lastScroll = 0
  //   let stickyHeaderHome = document.querySelector(".secondimage")
  //   let stickyHeaderHomemobile = document.querySelector(".secondimagemobile")


  //   const scrollHandler = () => {
  //     let currentScrollPos = window.scrollY

  //     let currentScroll = window.scrollY

  //     if (currentScrollPos >= 300 && currentScroll > lastScroll ) {
  //       // Scrolling down
  //       stickyHeaderHome?.classList.add("active")
  //       stickyHeaderHomemobile?.classList.add("active")

  //     } else {
  //       if (currentScrollPos < 300) {
  //         stickyHeaderHome?.classList.remove("active")
  //         stickyHeaderHomemobile?.classList.remove("active")

  //       } 
  //     }

  //     lastScroll = currentScroll
  //   }
  //   window.addEventListener("scroll", scrollHandler)

  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler)
  //   }
  // }, [])


    return(
      <div className="">
        {pathname.includes("/admin") ? "" : 
          <>
             <div className="header_wrap justify-between absolute top-0 left-0 z-[999] pt-[20px] w-full  transition-all duration-[0.5s] h-auto px-[20px] flex">
              <Link href={"/"} className="header_logo  max-w-[161px]">
                <Image src={navigation.header_logo} alt="Navigation" width={500} height={500} className="h-auto w-full firstimage max-w-[156px] " />

              </Link>
              <div
                className={` block absolute right-5 cursor-pointer  ml-5 lg:ml-0 `}
                onClick={() =>setOpenMenu(true)}
              >
                <div className={`bar1 ${openMenu ? "active" : ""} `}></div>
                <div className={`bar2 ${openMenu ? "active" : ""} `}></div>
                <div className={`bar3 ${openMenu ? "active" : ""} `}></div>
              </div>
          </div>
          </>
        }
      </div>
   )
};




export default Header;
