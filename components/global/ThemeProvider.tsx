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
          <Link href={"/"} className="w-full max-w-[130px] md:max-w-[150px]">
            <Image
              src={navigation.header_logo2}
              alt="Header 2"
              width={500}
              height={500}
              className="h-auto w-full firstimage max-w-[130px] md:max-w-[150px] "
            />
          </Link>
          <div className="x-button" onClick={() => setOpenMenu(false)}></div>
        </div>
        <div className="mt-[45px] mx-5 lg:max-w-[50%] lg:w-full">
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
                    className={`relative dropdown_wrapper  ${activeItem == index ? "active" : ""}`}>
                    {item.subMenu ? (
                      <button className="dropdown_nav pt-[20px] pb-[20px] items-center justify-between text-[30px] md:text-[65px] w-full text-left flex menu_item_parent  border-b-[1px] border-solid border-[#30282A] py-[0px] text-[#30282A] uppercase tracking-[1.3px] leading-[40px] boing_thin">
                        {item.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.619"
                          height="24.746"
                          viewBox="0 0 14.619 24.746">
                          <path
                            id="Icon_ionic-ios-arrow-forward"
                            data-name="Icon ionic-ios-arrow-forward"
                            d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                            transform="translate(-10.746 -5.566)"
                            fill="none"
                            stroke="#000"
                            strokeWidth="1"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        className="pt-[20px] pb-[20px] text-[30px] md:text-[65px] block w-auto menu_item_parent border-b-[1px] border-solid border-[#30282A] py-[0px] text-[#30282A] uppercase tracking-[1.3px] leading-[40px] boing_thin"
                        href={`${item.page.slug.slug != null ? `/${item.page.slug.slug}` : "/"}`}>
                        {item.title}
                      </Link>
                    )}
                    {item.subMenu && item.subMenu.length > 0 && (
                      <div
                        className={`dropdown_menu transition-all ease-in-out duration-300 overflow-hidden ${
                          activeItem == index
                            ? "opacity-100 max-h-[500px] lg:max-h-none lg:opacity-100"
                            : "opacity-0 max-h-0 lg:max-h-none lg:opacity-0"
                        }`}>
                        {item.subMenu.map((sub_item: any, jindex: number) => {
                          return (
                            <div key={jindex} className="flex Submenu_Item">
                              <span className="pt-[15px] text-[#30282A] lg:pt-[5px] text-[15px] lg:text-[20px] mt-[0px] mr-[10px] lg:mr-[15px] avenir_book">
                                {jindex + 1}
                              </span>
                              <Link
                                className="text-[25px] lg:text-[38px] block w-full py-[0px] text-[#30282A] tracking-[0.76px] leading-[50px] boing_thin"
                                href={`${
                                  item.page.slug.slug != null
                                    ? `/${item.page.slug.slug}`
                                    : sub_item.custom_links
                                      ? sub_item.custom_links
                                      : "/"
                                }`}>
                                {sub_item.title}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
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
