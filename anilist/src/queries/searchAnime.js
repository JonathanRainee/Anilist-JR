import { gql } from "@apollo/client";

export const searchAnime = gql `
    query($id: Int, $page: Int, $perPage: Int, $search: String){
        Page(page: $page, perPage: $perPage){
            pageInfo{
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(id: $id, search: $search, type: ANIME){
                id
                seasonYear
                genres
                duration
                averageScore
                title{
                    romaji
                    english
                    native
                }
                coverImage{
                    large
                }
            }
        }
    }
`