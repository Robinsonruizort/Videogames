import {GET_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_CREATED, GET_VIDEOGAMES_NAME, GET_GENRES, ORDER_BY, GET_VIDEOGAME_ID, ORDER_RATING, RESET_VIDEOGAME_DETAIL} from "./actionsTypes"


const initialState = {
    videogames : [],
    allVideogames : [],
    genres: [],
    detail: [],
    plaforms: []
}

const reducer = (state = initialState, { type, payload}) => {
    switch(type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                videogames: payload,
                allVideogames: payload
            }
            case FILTER_BY_GENRE:
                const allVideogames = state.allVideogames
                const statusFiltered = payload === "All" ? allVideogames : allVideogames.filter((game)=> game.genres.includes(payload))
                return {
                  ...state,
                  videogames: statusFiltered
            }   
            case FILTER_BY_CREATED:{
                const allVideogames = state.allVideogames
                const createdBy = payload === "From database" ? allVideogames.filter((created) => created.createdInDb) : allVideogames.filter((created) => !created.createdInDb)
                return{
                    ...state,
                    videogames: payload === "All" ? state.allVideogames : createdBy
                }
            }

            case GET_VIDEOGAMES_NAME: {
                return{
                    ...state,
                    videogames: payload
                }
            }

            case GET_GENRES: {
                return {
                    ...state,
                    genres: payload
                }
            }

            case ORDER_BY:{
                const sortedByName = payload === "Ascendant" ?
                state.videogames.sort((a, b) => a.name.localeCompare(b.name)) :
                state.videogames.sort((a, b) => b.name.localeCompare(a.name))
                return{
                    ...state,
                    videogames: sortedByName
                }
            }
            
            case GET_VIDEOGAME_ID: {
                return {
                    ...state,
                    detail: payload
                }
            }
            case ORDER_RATING: {
                const filteredRating = payload === "Highest" ?
                state.videogames.sort((a, b) => b.rating - a.rating)
                : state.videogames.sort((a, b) => a.rating - b.rating)
                return {
                    ...state,
                    videogames: filteredRating
                }
            }
            case RESET_VIDEOGAME_DETAIL: {
                return {
                    ...state,
                    detail: []
                }
            }

            default:
                return state
    }
     
}

export default reducer;


