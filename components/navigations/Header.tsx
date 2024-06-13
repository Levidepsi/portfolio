"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ navigation }: any) => {
  const pathname = usePathname()
    return(
      <div className="">
        {pathname.includes("/admin") ? "" : 
          <>
             <div className="header_wrap justify-between items-center fixed top-0 left-0 z-[999] w-full  hover:bg-[#00000070] transition-all duration-[0.5s] h-auto px-[50px] lg:flex hidden">
              <Link href={"/"} className="header_logo">
                <Image src={navigation.header_logo} alt="Navigation" width={500} height={500} className="h-auto w-[200px]" />
              </Link>
              <ul className="flex link_items_wrap">
                {navigation.header_menu && navigation.header_menu.map((nav: { title: string; link: string }, i: number) => {
                  return (
                      <Link key={i} href={ `/${nav.link}` } className="text-[white] pr-[20px] hover:underline transition-all duration-[0.5s]">
                          <li>
                              {nav.title}
                          </li>
                      </Link>
                  )
                })}  
              </ul>
          </div>
            <MobileHeader navigation={navigation } />
          </>
        }
      </div>
   )
};


const MobileHeader = ({ navigation }: any) => {
  
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <>
    <div className={` absolute top-0 left-0 bg-black z-[10] w-full h-full transition-all duration-[0.7s] ${openMenu ? "opacity-[0.7] visible " : "opacity-0 invisible"}`}></div>
    <div className="block lg:hidden  fixed top-0 left-0 z-[999] w-full  hover:bg-[#00000070] transition-all duration-[0.5s] px-5">
      
      <div className="flex justify-between items-center">
        <Image src={navigation.header_logo} alt="Navigation" width={500} height={500} className="h-auto w-[180px]" />
        <div
          className={`lg:hidden block  ml-5 lg:ml-0 `}
          onClick={() =>setOpenMenu(!openMenu)}
        >
          <div className={`bar1 `}></div>
          <div className={`bar2 `}></div>
          <div className={`bar3 `}></div>
        </div>
      </div>
      <div className={`mobile_menu ${openMenu ? "active" : ""}`}>
        <ul className="">
          {navigation.header_menu && navigation.header_menu.map((nav: { title: string; link: string }, i: number) => {
            return (
                <Link key={i} href={ `/${nav.link}` } className="text-[black] pr-[20px] hover:underline transition-all duration-[0.5s]">
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
