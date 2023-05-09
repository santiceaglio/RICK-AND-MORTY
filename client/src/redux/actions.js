import axios from "axios";
// const URL_BASE = "http://localhost:3001";

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GENERATE_COPY = "GENERATE_COPY";
export const GET_USER = "GET_USER";
export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
//variables de filtros
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME"
export const FILTER_ORDER_BY_NAME = "FILTER_ORDER_BY_NAME"
export const FILTER_ORDER_BY_ID = "FILTER_ORDER_BY_ID"
export const FILTER_ORDER_BY_LIVE= "FILTER_ORDER_BY_LIVE"
export const FILTER_ORDER_BY_GENDER = "FILTER_ORDER_BY_GENDER"
export const DETAIL_ID = "DETAIL_ID"
export const CLEAN_DETAIL_BY_ID = "CLEAN_DETAIL_BY_ID"



export const getAllCharacters = () => {
    return async function (dispatch) {
        const characters = await axios.get(`/characters`);
        dispatch({ type: GET_ALL_CHARACTERS, payload: characters.data })
    }

}
export const generateCopy = () => {
    return { type: GENERATE_COPY }
}


export const getUser = (user) => {
    
        return({ type: GET_USER, payload: user.data })

    }
export const getAllFavorites=(IdUser)=>{
    return async function(dispatch){
        const favorites=await axios.get(`/favorite`, IdUser);
        dispatch({type: GET_ALL_FAVORITES, payload:favorites.data})
    }
}
export const detailById=(id)=>{
    return {type: DETAIL_ID, payload:id};
}

export const cleanDetailById=()=>{
    return {type: CLEAN_DETAIL_BY_ID}
}

//todos los filtros 

export const getCharacterByName = (name) => {
    return async function (dispatch) {
        const character = await axios.get(`/characters/names?name=${name}`);
        dispatch({ type: GET_CHARACTER_BY_NAME, payload: character.data });
    }
}

export const filterOrderByName=(order)=>{
    return { type: FILTER_ORDER_BY_NAME, payload: order}
}

export const filterOrderById=(order)=>{
    return {type: FILTER_ORDER_BY_ID, payload: order}
}

export const filterOrderByLive=(order)=>{
    return {type: FILTER_ORDER_BY_LIVE, payload: order}
}

export const filterOrderByGender=(order)=>{
    return {type: FILTER_ORDER_BY_GENDER, payload: order}
}