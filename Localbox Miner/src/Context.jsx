import { createContext, useState } from "react";

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
    const [theme,settheme]=useState("light")
    const Themechange =()=>{
        settheme(theme=="light"?"dark":"light")
    }
    return (
      <Mycontext.Provider value={{theme,Themechange}}>{children}</Mycontext.Provider>
    );
  };
  