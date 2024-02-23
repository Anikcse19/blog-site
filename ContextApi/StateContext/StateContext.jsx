import { createContext, useState } from "react";

export const StateContext = createContext({});

export function StateContextProvider({children}){

   const [genres,setGenres]=useState([])
   const [categories, setCategories]=useState([])
   const [isAuthenticate,setIsAuthenticate]=useState(false)

    return (
        <StateContext.Provider value={{genres,setGenres,categories, setCategories,isAuthenticate,setIsAuthenticate}}>
            {children}
        </StateContext.Provider>
    )

}