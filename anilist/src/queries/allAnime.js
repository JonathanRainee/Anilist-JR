import { gql } from "@apollo/client";

export const all_anime = gql`
    query allAnime($page: Int, $perpage: Int){
        Page(page: $page, perPage: $perpage){
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(type: ANIME, sort: TRENDING_DESC){
                id
                title{
                    romaji
                    english
                    native
                }
                coverImage{
                    large
                }
                description
                genres
            }
        }
    }
`