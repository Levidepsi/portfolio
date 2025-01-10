"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {GlobalContext} from "../global/ThemeProvider";

const Header = ({navigation}: any) => {
  const {openMenu, setOpenMenu} = GlobalContext();

  const url = usePathname();
  const isAdmin = url?.includes("/admin") ? true : false;
  const pathname = usePathname();

  return (
    <div className="">
      {pathname.includes("/admin") ? (
        ""
      ) : (
        <>
          <div className="header_wrap justify-between absolute top-0 left-0 z-[999] pt-[20px] w-full  transition-all duration-[0.5s] h-auto px-[20px] flex">
            <Link href={"/"} className="header_logo  max-w-[161px]">
              <Image
                src={navigation.header_logo}
                alt="Navigation"
                width={500}
                height={500}
                className="h-auto w-full firstimage max-w-[156px] "
              />
            </Link>
            {url == "/" ? (
              <>
                <div className="mt-[45px] mx-5">
                  {navigation.header_menu &&
                    navigation.header_menu.map(
                      (
                        item: {
                          title: string;
                          page: any;
                          subMenu: Array<Object>;
                        },
                        index: number
                      ) => {
                        return (
                          <div key={index}>
                            {item.subMenu ? (
                              <button className=" ">{item.title}</button>
                            ) : (
                              <Link
                                className=" "
                                href={`${item.page.slug.slug != null ? `/${item.page.slug.slug}` : "/"}`}>
                                {item.title}
                              </Link>
                            )}
                          </div>
                        );
                      }
                    )}
                </div>
                <div
                  className={` block absolute right-5 cursor-pointer  ml-5 lg:ml-0 `}
                  onClick={() => setOpenMenu(true)}>
                  <div className={`bar1 ${openMenu ? "active" : ""} `}></div>
                  <div className={`bar2 ${openMenu ? "active" : ""} `}></div>
                  <div className={`bar3 ${openMenu ? "active" : ""} `}></div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={` block absolute right-5 cursor-pointer  ml-5 lg:ml-0 `}
                  onClick={() => setOpenMenu(true)}>
                  <div className={`bar1 ${openMenu ? "active" : ""} `}></div>
                  <div className={`bar2 ${openMenu ? "active" : ""} `}></div>
                  <div className={`bar3 ${openMenu ? "active" : ""} `}></div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
