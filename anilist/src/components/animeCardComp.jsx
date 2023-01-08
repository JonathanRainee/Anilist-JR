import { Link } from "react-router-dom";
import { useTheme } from "../context/themes";

const AnimeCard = (params) => {
    const imageURL = params.anime.coverImage.large
    const animeTitle = params.anime.title.romaji
    const { CurrTheme, setCurrTheme } = useTheme()


    return (
        <Link style={{backgroundColor: CurrTheme.card}} className="flex flex-col bg-slate-500 w-36 min-h-[16rem] rounded-md m-3 items-center" to={'/detail/'+params.anime.id}>
            <img src={imageURL} className="w-36 h-48 rounded-md"/>
            <div className="w-32 h-fit flex flex-col justify-center items-center">
                <p style={{color: CurrTheme.color}} className="text-white text-xs text-center p-2 text-ellipsis">{animeTitle}</p>
            </div>
        </Link>
    );
}

export default AnimeCard