import React from 'react'
import AnimeCard from '../components/animeCardComp'
import Navbar from '../components/navbarComp'
import { useTheme } from '../context/themes'

const FavoritePage = () => {

    const { CurrTheme, setCurrTheme } = useTheme()
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div style={{backgroundColor: CurrTheme.background}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {(favorites === null) && (
                <p style={{color: CurrTheme.color}} className="text-center fixed top-[50%] left-[50%]">You didn't have any favorite yet</p>
            )}
            {favorites !== null && (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 items-center justify-center m-3">
                        {favorites.map((c)=>{
                            return(
                                <AnimeCard key = {c.Media.id} anime = {c.Media}></AnimeCard>
                            )
                        })}
                    </div>
                    <div className="w-[99%] flex flex-row justify-center space-x-5 items-center pb-5"></div>
                </div>
            )}
        </div>
    )
}

export default FavoritePage