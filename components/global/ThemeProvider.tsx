"use client";

import { createContext, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowWide } from "../../hooks/ScreenSize";
import { AllMenusColor } from "@/types/header";
import Image from "next/image";
import landing from "./landing.jpg"
import logo from "./logo.png"
import { motion, useScroll, useTransform } from "motion/react"


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
  const [closePopup, setClosePopup] = useState(false)
  const [nextContent, setNextContent] = useState(false)


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
  
    useEffect(() => {
      const firstContent = document.querySelector('.firstContent');
      const loaderWrapper = document.querySelector('.loader_wrapper');
    
      if (nextContent) {
        firstContent?.classList.add('hide');
    
        const timeout = setTimeout(() => {
          loaderWrapper?.classList.add('hide');
        }, 1000);
    
        return () => clearTimeout(timeout); // cleanup
      }
    }, [nextContent]);
  
  useEffect(() => {
    const popUpClosed = localStorage.getItem("closePopup");

    if (popUpClosed === "true") {
      setClosePopup(true);
    } else {
      // Hide permanently after 1 second transition
    }
    setLoading(false); // done checking localStorage
  }, []);
    
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
              <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop playsInline muted title="">
                <source src={`/video-jd.mp4`} type="video/mp4" /> <track kind="captions" />
              </video>
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1,}}
              transition={{
                duration: 1.5,
                delay: 2,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
            >
              <Image src={logo} alt="Landing" width={500} height={500} className="w-full max-w-[137.53px] landing_logo h-auto object-cover" />

            </motion.div>
          </div>
        ) : (
            <>
              {pathname.includes("/admin") ? 
                ""
                :
                <>
                  <Popup
                  closePopup={closePopup}
                  setClosePopup={setClosePopup}
                  setNextContent={setNextContent}
                  nextContent={nextContent}
                />
              <div className={`overlay fixed top-0 left-0 w-full h-full bg-[#0D0D0D83] transition-all duration-[0.7s] ${closePopup ? "opacity-[0] z-0 invisible" : "opacity-[1] visible z-999"}`}>
                    
              </div>
                </>

              }
              
              <div className={`children relative`}>
                <div className="min-h-[100vh] flex flex-col relative justify-between">
                  {children}
                </div>
              </div>
            </>
        )
      )}
    </ThemeContext.Provider>
  );
};

const Popup = (
  { closePopup,
    setClosePopup,
    setNextContent,
    nextContent
  }
    :
  { 
    closePopup: boolean;
    setClosePopup: React.Dispatch<SetStateAction<boolean>>
    setNextContent: React.Dispatch<SetStateAction<boolean>>
    nextContent: boolean
  }) => {
  return (
    <div className={`pop_up ${closePopup ? "active" : ""}  `}>
      {/* <div className={`loader_wrapper ${nextContent ? "active" : ""}`}>
        <div className="loader"></div>
      </div> */}
      <div className="firstContent py-[44px] lg:pt-[88px] lg:py-[60px] px-[50px]">
        <h1 className="text-[30px] tracking-[2.1px] leading-[42px] text-[#0D0D0D] text-center moinster_regular mb-[35px] lg:mb-[50px]">ARE YOU ABOVE 18?</h1>
        <div className="flex justify-center items-center gap-8 mb-[30px] lg:mb-[50px]">
          <label className="flex items-center gap-2 cursor-pointer text-[#1C1C1C] text-[12px] forma_regular tracking-[0.24px] leading-[20px]">
            <input
              onClick={() => setNextContent(true)}
              type="checkbox"
              className="w-[10px] h-[10px] border border-[#000427] rounded-[2px] appearance-none checked:bg-[#000427] checked:border-[#000427] transition-all duration-150"
            />
            YES
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-[#1C1C1C] text-[12px] forma_regular tracking-[0.24px] leading-[20px]">
            <input
              onClick={() => setNextContent(true)}
              type="checkbox"
              className="w-[10px] h-[10px] border border-[#000427] rounded-[2px] appearance-none checked:bg-[#000427] checked:border-[#000427] transition-all duration-150"
            />
            NO
          </label>
        </div>
        <div className="max-w-[400px] mx-auto">
          <p className="forma_regular text-center text-[#00042780] text-[10px] tracking-[0.2px] leading-[20px]">
            You must be of legal drinking age in your country to enter. By entering,<br />
            you accept our terms and conditions and our privacy policy. <br />
            Please drink responsibly.
          </p>
        </div>
      </div>

      <div className={`secondContent ${nextContent ? "active" : ""} py-[44px] lg:pt-[88px] lg:py-[60px] px-[50px]`}>
        <h1 className="text-[30px] tracking-[2.1px] leading-[42px] text-[#0D0D0D] text-center moinster_regular mb-[35px] lg:mb-[50px]">SPACE IS AVAILABLE</h1>
        
        <div className="max-w-[400px] mx-auto  mb-[30px] lg:mb-[50px]">
          <p className="forma_regular text-center text-[#00042780] text-[10px] tracking-[0.2px] leading-[20px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
        <button
          onClick={() => {
            setClosePopup(true)
            localStorage.setItem("closePopup", "true");
          }}
          className="border-solid cursor-pointer mx-auto flex button forma_regular border-[#0D0D0D] border-[0.5px] rounded-[5px] text-[12px] tracking-[0.24px] leading-[16px] text-[#0D0D0D] px-[10px] py-[5px] w-max"
          >
          Find out more
          </button>
      </div>

    </div>
  )
}

export const GlobalContext = () => useContext(ThemeContext);