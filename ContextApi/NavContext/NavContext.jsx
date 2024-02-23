import { createContext, useState } from "react";

export const NavContext = createContext({});

export function NavContextProvider({children}){

    const [isMobileNavOpen,setIsMobileNavOpen]=useState(false)

    return (
        <NavContext.Provider value={{isMobileNavOpen,setIsMobileNavOpen}}>
            {children}
        </NavContext.Provider>
    )

}