import { useState } from "react";
import { Link } from "react-router-dom";
import { themes, useTheme } from "../context/themes"

const Navbar = () => {
    const { CurrTheme, setCurrTheme } = useTheme();
    const { theme, setTheme } = useState("light")

    const changeTheme = () =>{
        if(CurrTheme === themes.light){
            setCurrTheme(themes.dark)
            // setTheme("dark")
        }else if(CurrTheme === themes.dark){
            setCurrTheme(themes.light)
            // setTheme("light")
        }
    }

    return(
        <div>
            <div style={{backgroundColor: CurrTheme.background}} className="flex flex-col w-full h-16 bg-black items-center p-3">
                <p style={{color: CurrTheme.color}} className="text-white text-4xl">MyAnimeList</p>
            </div>
            <div style={{backgroundColor: CurrTheme.background}} className="flex flex-row items-center w-full">
                <button style={{backgroundColor: CurrTheme.background, color: CurrTheme.color}} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800" onClick={changeTheme}>Theme</button>
                <Link style={{backgroundColor: CurrTheme.background, color: CurrTheme.color}} to={'/'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Home</Link>
                <Link style={{backgroundColor: CurrTheme.background, color: CurrTheme.color}} to={'/search'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Search</Link>
                <Link style={{backgroundColor: CurrTheme.background, color: CurrTheme.color}} to={'/favorite'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Favorite</Link>
            </div>
        </div>
    )
}

export default Navbar