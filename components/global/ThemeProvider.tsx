"use client";

import { createContext, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowWide } from "../../hooks/ScreenSize";
import { AllMenusColor } from "@/types/header";
import Image from "next/image";
import landing from "./landing.jpg"
import logo from "./logo.png"
import {motion, useScroll, useTransform} from "motion/react"


interface IThemeContext {
  initialLoaded: boolean;
  setInitialLoaded: React.Dispatch<SetStateAction<boolean>>;
  menuColor: string;
  setMenuColor: React.Dispatch<SetStateAction<string>>;
}

const defaultState = {
  setInitialLoaded: () => {},
  initialLoaded: false,
  setMenuColor: () => {},
  menuColor: "",
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({
  children,
  allMenuColor
}: {
    children: React.ReactNode;
    allMenuColor: AllMenusColor[]
}) => {
  const [initialLoaded, setInitialLoaded] = useState(true);
  const [menuColor, setMenuColor] = useState("");

  const desktop = useWindowWide(1024);

  const pathname = usePathname()

  const cleanPath = pathname == "/" ? "/" : pathname.replace(/^\//, "");
  

  useEffect(() => {
    if (!allMenuColor || !cleanPath) return;
  
    allMenuColor.forEach((item: AllMenusColor) => {
      if (cleanPath.includes(item.slug)) {
        setMenuColor(item.menuColor);
      }
    });
  }, [allMenuColor, cleanPath]);

  const [closeLanding, setCloseLanding] = useState(false);
  const [hidePerm, setHidePerm] = useState(false);
  const [loading, setLoading] = useState(true); // prevent premature render

  useEffect(() => {
    const landingClosed = localStorage.getItem("closeLanding");

    if (landingClosed === "true") {
      setCloseLanding(true);
      setHidePerm(true);
    } else {
      // Hide permanently after 1 second transition
      
    }

    setLoading(false); // done checking localStorage
  }, []);

  const hideLanding = closeLanding
    ? "z-0 opacity-0 invisible"
      : "z-[999] opacity-[1] visible";
    
  return (
    <ThemeContext.Provider
      value={{
        initialLoaded,
        setInitialLoaded,
        menuColor,
        setMenuColor
      }}
    >
      {!loading && (
        closeLanding !== true ? (
          <div
            onClick={() => {
              setCloseLanding(true);
              localStorage.setItem("closeLanding", "true");
              setTimeout(() => {
                setHidePerm(true);
              }, 1000);
            }}
            className={`fixed cursor-pointer transition-all duration-[1s] delay-[1s] ${hideLanding} ${hidePerm ? "hidden" : ""} top-0 left-0 w-full h-full`}
          >
            <Image src={landing} alt="Landing" width={2000} height={2000} className="w-full h-full object-cover relative" />
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1,}}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
            >
              <Image src={logo} alt="Landing" width={500} height={500} className="w-full max-w-[137.53px] landing_logo h-auto object-cover" />

            </motion.div>
          </div>
        ) : (
          <div className={`children relative`}>
            <div className="min-h-[100vh] flex flex-col relative justify-between">
              {children}
            </div>
          </div>
        )
      )}
    </ThemeContext.Provider>
  );
};

export const GlobalContext = () => useContext(ThemeContext);