import { useQuery } from "@apollo/client"
import { useState } from "react"
import AnimeCard from "../components/animeCardComp"
import Navbar from "../components/navbarComp"
import { useTheme } from "../context/themes"
import { all_anime } from "../queries/allAnime"

const HomePage = () => {
    const [ currPage, setCurrPage ] = useState(1)
    const { CurrTheme, setCurrTheme } = useTheme()

    const previousPage = () => {
        if(currPage !== 1){
            setCurrPage(currPage - 1)
        }
    }

    const nextPage = () => {
        setCurrPage(currPage + 1)
    }

    const{loading, error, data} = useQuery(all_anime, {
        variables:{
            page: currPage,
            perpage: 10
        }
    })

    return(
        <div style={{backgroundColor: CurrTheme.background}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {loading && (
                <p style={{color: CurrTheme.background}}>Loading...</p>
            )}
            {!loading && (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 items-center justify-center m-3">
                        {data.Page.media.map((a)=>{
                            return(
                                <AnimeCard key ={a.id} anime = {a}></AnimeCard>
                            )
                        })}
                    </div>
                    <div className="w-[99%] flex flex-row justify-center space-x-5 items-center pb-5">
                        {data.Page.pageInfo.currentPage !== 1 &&(
                            <button style = {{backgroundColor: CurrTheme.color, color: CurrTheme.background}} onClick = {previousPage} className="p-2 border border-black w-20 rounded-md bg-white hover:bg-gray-300 active: bg- gray-100">Previous</button>
                        )}
                        <p style={{color:  CurrTheme.color}}>{currPage}</p>
                        {data.Page.pageInfo.lastPage !== data.Page.pageInfo.currentPage && (
                            <button style = {{backgroundColor:  CurrTheme.color, color: CurrTheme.background}} onClick = {nextPage} className="p-2 border border-black w-20 rounded-md bg-white hover:bg-gray-300 active: bg- gray-100">Next</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage