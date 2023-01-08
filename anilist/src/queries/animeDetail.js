import { gql } from "@apollo/client";

export const animeDetail = gql `
    query animeDetail($id: Int){
        Media(id: $id){
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
            episodes
        }
    }
`