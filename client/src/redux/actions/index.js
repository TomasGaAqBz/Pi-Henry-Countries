import axios from 'axios'


export const GET_INFO = "GET_INFO";
export const FILTER_COUNTRY =  "FILTER_COUNTRY" 
export const FILTER_COUNTRY_BY_CONTINENT =  "FILTER_COUNTRY_BY_CONTINENT" 
export const FILTER_COUNTRY_BY_ACTIVITY = "FILTER_COUNTRY_BY_ACTIVITY"
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_COUNTRY_BY_POPULATION = "ORDER_COUNTRY_BY_POPULATION";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const GET_INFO_ACTIVITYS = "GET_INFO_ACTIVITYS"




export const getCountryInfo = () => async (dispatch) =>{
    try {
        const {data} = await axios.get('http://localhost:3001/country')
        return dispatch({
            type: GET_INFO,
            payload: data,
        });
    } catch (error) {
        throw new Error ("Error Al obtener Datos de los paises en Redux")
    }
}

export const filterCountry = (name) => async (dispatch) =>{
    try {
        const { data } = await axios.get(`http://localhost:3001/country?name=${name}`);
        return dispatch({
            type:FILTER_COUNTRY,
            payload:data,
        })
    } catch (error) {
        throw new Error ("Error Al obtener Datos de los paises en Redux")
    }
}

export const filtertBycontinent = (continent) =>{
    return{
        type:FILTER_COUNTRY_BY_CONTINENT,
        payload:continent,
    }
} 
export const filterByActivity = (activity) => {
    return {
        type: FILTER_COUNTRY_BY_ACTIVITY,
        payload: activity,
    };
};

export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order,
    };
};

export const orderByPopulation = (order) => {
    return {
        type: ORDER_COUNTRY_BY_POPULATION,
        payload: order,
    };
};

export const removeFilters = () => {
    return {
        type: REMOVE_FILTERS,
    };
};

export const getActivities = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001//activities');
        return dispatch({
            type: GET_INFO_ACTIVITYS,
            payload: data,
    });
    } catch (error) {
        throw new Error ("Error Al obtener Datos de las Actividades en Redux");
    }
};