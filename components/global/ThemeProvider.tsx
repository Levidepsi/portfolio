"use client";

import { createContext, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowWide } from "../../hooks/ScreenSize";

interface IThemeContext {
  initialLoaded: boolean;
  setInitialLoaded: React.Dispatch<SetStateAction<boolean>>;

}

const defaultState = {
  setInitialLoaded: () => {},
  initialLoaded: false,

};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initialLoaded, setInitialLoaded] = useState(true);

  const desktop = useWindowWide(1024);

  return (
    <ThemeContext.Provider
      value={{
        initialLoaded,
        setInitialLoaded,
      }}
    >
      <div className={`children relative `}>
        <div className=" min-h-[100vh] flex flex-col relative justify-between">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export const GlobalContext = () => useContext(ThemeContext);