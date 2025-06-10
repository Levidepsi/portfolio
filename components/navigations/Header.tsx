"use client"

import React, { useEffect, useState } from "react";
import "./header.css";
import { HeaderMenuItem, HeaderSubMenuItem, HeaderValues, PageObject } from "@/types/header";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "../global/ThemeProvider";

const Header = ({ navigation }: { navigation: HeaderValues }) => {
  const homepage = "/"
  const pathname = usePathname()
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null)

  
  const handleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index)
  }

  useEffect(() => {
    if (openMenuMobile == true) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")

    }
  }, [openMenuMobile])

  if (pathname.includes("/admin")) {
    return null
  }
  

  const { menuColor } = GlobalContext()
  
  useEffect(() => {
    let lastScroll = 0
    let stickyHeaderHome = document.querySelector(".header-container")
    


    const scrollHandler = () => {
      let currentScrollPos = window.scrollY

      let currentScroll = window.scrollY

      if (currentScrollPos >= 300 && currentScroll > lastScroll ) {
        // Scrolling down
        stickyHeaderHome?.classList.add("active")

      } else {
        if (currentScrollPos < 300) {
          stickyHeaderHome?.classList.remove("active")


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
    <header className={`header-container flex justify-between w-full  items-center gap-x-5 px-[32px] lg:px-[32px] py-[20px] lg:py-[42px] 2xl:py-[2.734vw] ${menuColor} ${openMenuMobile == true ? "active" : ""} fixed   top-0 left-0 z-[11]`}>
      <div className="lg:w-[20%]">
        {navigation != null && navigation.header_logo ?
          <Link href={"/"} className={``}>
            <Image src={navigation.header_logo} alt={navigation.title} width={500} height={500} className="w-[215px] h-auto object-cover " />
          </Link>
          : 
          <Link href={"/"} className={`logo text-[20px] lg:text-[18px] xl:text-[20px] tracking-[1.4px] leading-[29px] 2xl:text-[1.302vw] 2xl:leading-[1.888vw] 2xl:tracking-[0.091vw] moinster_regular ${menuColor} ${openMenuMobile == true ? "active" : ""} `}>
            JD SPIRITS
          </Link>
        }
      </div>

      <div className="Desktop_Menu hidden lg:w-[80%] lg:flex justify-center">
        <div className="Menu_Wrapper w-full justify-center flex gap-x-[27px]">
          {navigation?.header_menu.map((item: HeaderMenuItem, index: number) => {
             const titleSlug = item.title.replace(/\s+/g, '-').toLowerCase();

            return (
              <div
                className="menu_Link relative"
                key={index}
                onMouseEnter={() => setOpenSubMenu(index)}
                onMouseLeave={() => setOpenSubMenu(null)}
              >
                {item.subMenu ? (
                  <button
                    type="button"
                    className={`text-[14px]  menu_item relative forma_regular leading-[18px] 2xl:text-[0.911vw] 2xl:leading-[1.172vw] aktiv_regular ${menuColor} ${
                      openSubMenu === index ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    href={`/${item.page ? item.page.slug.slug : "/"}`}
                    className={`text-[13px] forma_regular menu_item tracking-[0.24px] forma_regular relative 2xl:text-[0.881vw] 2xl:leading-[1.042vw] 2xl:tracking-[0.016vw] leading-[16px] ${menuColor}`}
                  >
                    {item.title}
                  </Link>
                )}

                {item.subMenu && (
                  <div
                    className={`subMenuItems-Wrapper  pt-[15px] px-[15px] z-20 absolute bg-white left-[-15px] mobile flex flex-col ${
                      openSubMenu === index ? "active" : ""
                    }`}
                  >
                    {item.subMenu.map((sub: HeaderSubMenuItem, subIndex: number) => (
                      <Link
                        onClick={() => {
                          setOpenMenuMobile(false);
                          setOpenSubMenu(null);
                        }}
                        key={subIndex}
                        href={`/${titleSlug}/${sub.page ? `${sub.page.slug.slug}` : "/"}`}
                        className="text-[#0D0D0D] forma_regular text-[14px] lg:text-[14px] pb-[10px] leading-[18px] lg:leading-[18px] subMenu-Item w-max"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            )
          })}
        </div>
      </div>
      <div className="hidden contact lg:w-[20%] lg:flex flex gap-x-[15.45px] justify-end">
        <Link
            target="_blank"
          href={`https://myaccount.jdspirits.com/login`}
          className={`text-[12px] tracking-[0.24px] forma_regular menu_item forma_regular relative leading-[16px] 2xl:text-[0.781vw] 2xl:leading-[1.042vw] 2xl:tracking-[0.016vw] ${menuColor}`}
        >
          Customer Login
        </Link>
        <Link
          href={`/contact`}
          className={`text-[12px]  tracking-[0.24px] menu_item forma_regular ${pathname == "/contact" ? "active" : ""} relative leading-[16px] 2xl:text-[0.781vw] 2xl:leading-[1.042vw] 2xl:tracking-[0.016vw] ${menuColor}`}
        >
        Contact
        </Link>
      </div>  

      <div className="Burger relative lg:hidden">
        <div onClick={() => setOpenMenuMobile(true)} className={`mobile_icons open ${openMenuMobile ? "hide" : "show"}`}><BurgerIcon menuColor={menuColor} /></div>
        <div onClick={() => setOpenMenuMobile(false)} className={`mobile_icons close ${openMenuMobile ? "show" : "hide"}`}><CloseIcon /></div>
      </div>

      <div className={`Mobile_Header w-full h-full flex flex-col pt-[30px] ${openMenuMobile ? "show" : ""} bg-[#fff5ef] fixed top-[55px] left-0  lg:hidden`}>
        <div className="flex justify-between px-[32px]">
          <div className="lg:w-[20%]">
            {navigation != null && navigation.header_logo ?
              <Link href={"/"} className={``}>
                <Image src={navigation.header_logo} alt={navigation.title} width={500} height={500} className="w-[215px] h-auto object-cover " />
              </Link>
              : 
              <Link href={"/"} className={` text-[20px] tracking-[1.4px] leading-[29px] moinster_regular ${menuColor} ${openMenuMobile == true ? "active" : ""} `}>
                JD SPIRITS
              </Link>
            }
          </div>
          <div onClick={() => setOpenMenuMobile(false)} className={` mt-[-2px] open `}><CloseIcon /></div>

        </div>
        <MobileMenu
          setOpenMenuMobile={setOpenMenuMobile}
          setOpenSubMenu={setOpenSubMenu}
          openSubMenu={openSubMenu}
          menu={navigation.header_menu}
          path={pathname}
          homepage={homepage}
        />
        <div className="flex absolute bottom-[50px]  contact lg:w-[20%] lg:hidden  gap-x-[15.45px] px-[32px]">
          <Link
            href={`https://myaccount.jdspirits.com/login`}
            target="_blank"
            className={`text-[12px] tracking-[0.24px] forma_regular menu_item forma_regular relative leading-[16px] `}
          >
            Customer Login
          </Link>
          <Link
            href={`/contact`}
            className={`text-[12px]  tracking-[0.24px] menu_item forma_regular ${pathname == "/contact" ? "active" : ""} relative leading-[16px] `}
          >
          Contact
          </Link>
        </div> 
      </div>

    </header>
  );
}


const MobileMenu = (
  { menu,
    path,
    homepage,
    setOpenMenuMobile,
    openSubMenu ,
    setOpenSubMenu
  }
    :
  
    {
      menu: HeaderMenuItem[];
      path: string;
      openSubMenu: any;
      homepage: string;
      setOpenMenuMobile:
      React.Dispatch<React.SetStateAction<boolean>>
      setOpenSubMenu: any
    }) => {
  return (
    <div className="flex w-full mobile_header_wrapper pt-[30px] px-[32px] flex-col gap-y-5">
      {menu.map((
        item: HeaderMenuItem,
        index: number
      ) => {
        const titleSlug = item.title.replace(/\s+/g, '-').toLowerCase();
          return (
            <li className={`menu-item ${item.page && path.includes(item.page.slug.slug) ? "active": "not-active"}  list-none`} key={index}>
              {item.subMenu ? (
                <button
                    onClick={() =>
                      setOpenSubMenu(openSubMenu === index ? null : index)
                    }
                    type="button"
                    className={`text-[14px] cursor-pointer menu_item relative pb-[5px] leading-[18px] forma_regular text-[#0D0D0D] ${
                      openSubMenu === index ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    onClick={() => setOpenMenuMobile(false)}
                    className={`text-[#forma_regular] text-[16px]  leading-[21px] aktiv_regular`}
                    href={`/${item.page ? item.page.slug.slug : "/"}`}>{item.title}</Link>
                    )}
              {/* <Link
                className={`text-[#0D988C] text-[16px]  leading-[21px] aktiv_regular`}
                href={`/${item.page.slug.slug}`}>{item.title}</Link> */}
              {item.subMenu && (
                  <div
                    className={`subMenuItems-Wrapper mobile  px-[15px] z-20 justify-center bg-white left-[-15px] mobile flex flex-col ${
                      openSubMenu === index ? "active pt-[15px]" : ""
                    }`}
                  >
                    {item.subMenu.map((sub: HeaderSubMenuItem, subIndex: number) => (
                      <Link
                        onClick={() => {
                          setOpenMenuMobile(false);
                          // setOpenSubMenu(null);
                        }}
                        key={subIndex}
                        href={`/${titleSlug}/${sub.page ? `${sub.page.slug.slug}` : "/"}`}
                        className="text-[#0D988C] text-center aktiv_regular text-[14px] mx-auto lg:text-[14px] pb-[10px] leading-[18px] lg:leading-[18px] subMenu-Item w-max"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
            </li>
          )
      })}
    </div>
  ) 
}

const BurgerIcon = ({menuColor}: { menuColor: string }) => {
  return (
    <svg className={`${menuColor}`} xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
      <g id="Group_85" data-name="Group 85" transform="translate(-342 -30)">
        <line id="Line_46" data-name="Line 46" x2="21" transform="translate(342.5 30.5)" fill="none" stroke="#0D0D0D" strokeLinecap="round" strokeWidth="1"/>
        <line id="Line_47" data-name="Line 47" x2="21" transform="translate(342.5 34.5)" fill="none" stroke="#0D0D0D" strokeLinecap="round" strokeWidth="1"/>
        <line id="Line_48" data-name="Line 48" x2="21" transform="translate(342.5 38.5)" fill="none" stroke="#0D0D0D" strokeLinecap="round" strokeWidth="1"/>
      </g>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L16.8995 7.10051" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7.00001L16.8995 16.8995" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ArrowSvg = () => {
  return (
    <svg
      className="md:mt-[6px] ml-[20px] rotate-[90deg] md:rotate-0 transition-all duration-100"
      width={"30px"}
      height={"30px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0">
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round">
      </g>
      <g
        id="SVGRepo_iconCarrier">
        <path
          d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
          fill="#A64D24">
        </path>
      </g>
    </svg>
  )
}
export default Header;
