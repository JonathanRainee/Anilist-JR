import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { icons } from 'react-icons';
import { useParams } from 'react-router'
import Navbar from '../components/navbarComp';
import { useTheme } from '../context/themes';
import { animeDetail } from '../queries/animeDetail';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const DetailPage = () => {

    const params = useParams();
    const id = params.animeid
    const { CurrTheme, setCurrTheme } = useTheme()

    const{loading, error, data} = useQuery(animeDetail, {
        variables:{
            id:id
        }
    })

    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const [ isFav, setIsFav ] = useState(false)
    const checkFav = () => {
        let flag = false

        if(data === undefined){
            setIsFav(false)
            return
        }

        favorites.forEach((element)=>{
            if(element.Media.id === data.Media.id){
                flag = true
            }
        })
        if(flag === true){
            setIsFav(true)
        }else{
            setIsFav(false)
        }
    }

    useEffect(()=>{
        if(favorites === null){
            return
        }
        checkFav()
    }, [favorites])

    const addFav = () => {
        var arr = []
        if(favorites !== null){
            var arr = favorites
        }
        arr.push(data)
        setIsFav(true)
        localStorage.setItem("favorites", JSON.stringify(arr))
    }

    const removeFav = () => {
        var arr = favorites
        let ctr = 0
        arr.forEach((element)=>{
            if(element.Media.id === data.Media.id){
                arr.splice(ctr, 1)
            }
            ctr++
        })
        setIsFav(false)
        localStorage.setItem("favorites", JSON.stringify(arr))
    }

    console.log(CurrTheme.color);


    return (
        <div style={{backgroundColor: CurrTheme.background}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {loading && (
                <p tyle={{color: CurrTheme.color}} className="text-center absolute top-[50%] left-[40%]">loading...</p>
            )}
            {!loading && (
                <div>
                    <div className='w-screen flex flex-row items-start justify-start space-x-5 p-8'>
                        <img className='w-28 rounded-md' src={data.Media.coverImage.large} alt="" />
                        <div className='flex flex-col'>
                            <p style={{color: CurrTheme.color}} className='text-xl'>{data.Media.title.romaji} / {data.Media.title.native}</p>
                            <p style={{color: CurrTheme.color}} className='text-xl'>{data.Media.episodes} episodes</p>
                            {!isFav && (
                                <AiOutlineHeart style={{outlineColor: CurrTheme.color}} onClick={addFav} className='w-5 h-5'></AiOutlineHeart>
                            )}
                            {isFav && (
                                <AiFillHeart style={{outlineColor: CurrTheme.color}} onClick={removeFav} className='fill-red-700 w-5 h-5' ></AiFillHeart>
                            )}
                        </div>
                    </div>
                    <div className='w-screen flex flex-col items-start justify-center space-y-2 pl-8'>
                        <p style={{color: CurrTheme.color}}>Genres: </p>
                        <div className='grid grid-cols-3'>
                            {data.Media.genres.map((curr)=>{
                                return(
                                    <p style={{color: CurrTheme.color}}  key={curr} className='text-s mr-5'>{curr}</p>
                                )
                            })}
                        </div>
                        <p style={{color: CurrTheme.color}} className='mt-5'>Description</p>
                        <p style={{color: CurrTheme.color}}  className='text-xs pr-10 pb-5'>
                            {data.Media.description}
                        </p>
                    </div>
                </div>
            )}

        </div>

    )
}

export default DetailPage