import { createContext, useState } from "react";

export const StateContext = createContext({});

export function StateContextProvider({children}){

   const [genres,setGenres]=useState([])
   const [categories, setCategories]=useState([])

    return (
        <StateContext.Provider value={{genres,setGenres,categories, setCategories}}>
            {children}
        </StateContext.Provider>
    )

}