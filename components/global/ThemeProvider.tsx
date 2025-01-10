"use client";

import Image from "next/image";
import Link from "next/link";
import {createContext, useContext, useEffect, useRef, useState} from "react";

interface IThemeContext {
  initialLoaded: any;
  setInitialLoaded: any;
  openMenu: boolean;
  setOpenMenu: any;
}

const defaultState = {
  setInitialLoaded: () => {},
  initialLoaded: false,
  setOpenMenu: () => {},
  openMenu: false,
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: any;
}) => {
  const [initialLoaded, setInitialLoaded] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const html = document.querySelector(".html");
    if (openMenu) {
      html?.classList.add("overflow-hidden");
    } else {
      setTimeout(() => {
        html?.classList.remove("overflow-hidden");
      }, 2000);
    }
  });
  const page = useRef(1);

  const hoverItem = (index: any) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div>
      <div
        className={`h-[100vh] pb-[50px] overflow-y-scroll overflow-x-hidden w-full bg-[#EFEBE5] menu  ${openMenu ? " slideDown" : ""}`}>
        <div className="flex justify-between mx-5 py-5 border-solid border-[#30282A] border-b-[1px]">
          <Link href={"/"}>
            <Image
              src={navigation.header_logo2}
              alt="Header 2"
              width={500}
              height={500}
              className="h-auto w-full firstimage max-w-[156px] "
            />
          </Link>
          <div className="x-button" onClick={() => setOpenMenu(false)}></div>
        </div>
        <div className="mt-[45px] mx-5">
          {navigation.header_menu &&
            navigation.header_menu.map(
              (
                item: {title: string; page: any; subMenu: Array<Object>},
                index: number
              ) => {
                return (
                  <div
                    onMouseEnter={() => hoverItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    key={index}
                    className={`relative ${activeItem == index ? "active" : ""}`}>
                    {item.subMenu ? (
                      <button className=" text-[30px] md:text-[65px] w-full text-left flex menu_item_parent xl:max-w-[620px] border-b-[1px] border-solid border-[#30282A] py-[0px] text-[#30282A] uppercase tracking-[1.3px] leading-[96px] boing_thin">
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        className=" text-[30px] md:text-[65px] block w-auto menu_item_parent xl:max-w-[620px] border-b-[1px] border-solid border-[#30282A] py-[0px] text-[#30282A] uppercase tracking-[1.3px] leading-[96px] boing_thin"
                        href={`${item.page.slug.slug != null ? `/${item.page.slug.slug}` : "/"}`}>
                        {item.title}
                      </Link>
                    )}
                    {/* <div className={`sub_menu 2xl:absolute left-0 top-0 transition-all duration-[0.6s] ${activeItem == index ? "active opacity-[1] visible z-10" : "z-0 opacity-0 invisible"}`}>
									{item.subMenu && item.subMenu.map((sub_item: any, jindex: number) => {
										return (
											<div key={jindex} className="flex ">
												<span className="text-[#30282A] text-[20px] mt-[0px] mr-[10px] opacity-[0.5]">{jindex + 1}</span>
												<Link
														className="text-[38px] block w-full    py-[0px] text-[#30282A]  tracking-[0.76px] leading-[50px] boing_thin"
														href={`
														${item.page.slug.slug != null
															? `/${item.page.slug.slug}`
															: sub_item.custom_links
																? sub_item.custom_links
																: "/"}`}>
														{sub_item.title}
													</Link>
												</div>
											)
										})}
								</div> */}
                  </div>
                );
              }
            )}
        </div>
        <div className="text-[#30282A] text-[13px] tracking-[0.33px] leading-[18px] mt-[65px] px-5">
          © Ninety-One Group 2024
        </div>
      </div>
      <ThemeContext.Provider
        value={{
          initialLoaded,
          setInitialLoaded,
          openMenu,
          setOpenMenu,
        }}>
        <div className={`children relative ${openMenu ? "slideDown" : ""}`}>
          <div className="overflow-hidden min-h-[100vh] flex flex-col relative justify-between">
            {children}
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export const GlobalContext = () => useContext(ThemeContext);
