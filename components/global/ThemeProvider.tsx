"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface IThemeContext {
	initialLoaded: any;
	setInitialLoaded: any;

}

const defaultState = {

	setInitialLoaded: () => {},
	initialLoaded: false,

};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [initialLoaded, setInitialLoaded] = useState(true);
	


	/**
	 * useEffect(() => {
		setTimeout(() => {
			setInitialLoaded(true);
		}, 1500);
	});
	 */
	const page = useRef(1);

	return (
		<div>
			<ThemeContext.Provider
				value={{
					initialLoaded,
                    setInitialLoaded,
				}}
			>
				
				<div className='overflow-hidden'>{children}</div>
			</ThemeContext.Provider>
		</div>
	);
};

export const GlobalContext = () => useContext(ThemeContext);