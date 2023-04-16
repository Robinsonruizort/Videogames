import axios from "axios";
import { GET_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_CREATED, GET_VIDEOGAMES_NAME, GET_GENRES, ORDER_BY, GET_VIDEOGAME_ID, ORDER_RATING, RESET_VIDEOGAME_DETAIL} from "./actionsTypes"


const getVideogames = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/videogames/`)
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: response.data
            })
        }
    } catch (error) {}
}

const filterByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}

const filterByCreated = (payload) => {
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}

const getVideogamesName = (payload) => {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/videogame/name?name=` + payload);
            return dispatch({
                type: GET_VIDEOGAMES_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
 }

 const getGenres = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/genres`)
            return dispatch({
                type: GET_GENRES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
 }
 
 
 const orderBy = (payload) => {
    return {
        type: ORDER_BY,
        payload
    }
}


const getVideogameId = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: GET_VIDEOGAME_ID,
                payload: response.data
            })      
        }catch (error) {
            console.log(error.message);
        }
    }
}
const orderRating = (payload) => {
    return {
        type: ORDER_RATING,
        payload
    }
}

const resetVideogame = () => {
    return {
        type: RESET_VIDEOGAME_DETAIL,
    }

}
export { getVideogames, filterByGenre, filterByCreated, getVideogamesName, getGenres, orderBy, getVideogameId, orderRating, resetVideogame} ;





























//  const getPlatforms = () => {
//     return async function(dispatch) {
//         try {
//             const response = await axios.get(`http://localhost:3001/platforms`)
//             return dispatch({
//                 type: GET_PLATFORMS,
//                 payload: response.data
//             })
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//  }