import { createContext, useContext, useState } from "react";

export const themes = {
    dark:{
        id: 1,
        background: "#202121",
        color: "#ffffff",
        card: "#5e615f"
    },
    light:{
        id: 2,
        background:'#ffffff',
        color:"#000000",
        card: "#d5e0d8"
    }
}

export const ThemeContext = createContext()
export const ThemeProvider = ({children})=>{
    const [ CurrTheme, setCurrTheme ] = useState(themes.light)
    
    return(
        <ThemeContext.Provider value={{CurrTheme, setCurrTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    return useContext(ThemeContext)
}