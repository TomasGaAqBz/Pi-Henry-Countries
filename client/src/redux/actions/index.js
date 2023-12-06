import axios from 'axios';

// Action Types
export const GET_INFO = "GET_INFO";
export const FILTER_COUNTRY = "FILTER_COUNTRY";
export const FILTER_COUNTRY_BY_CONTINENT = "FILTER_COUNTRY_BY_CONTINENT";
export const FILTER_COUNTRY_BY_ACTIVITY = "FILTER_COUNTRY_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_COUNTRY_BY_POPULATION = "ORDER_COUNTRY_BY_POPULATION";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const GET_INFO_ACTIVITYS = "GET_INFO_ACTIVITYS";

// Acción asincrónica para obtener información de todos los países
export const getCountryInfo = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/country');
        return dispatch({
            type: GET_INFO,
            payload: data,
        });
    } catch (error) {
        throw new Error("Error al obtener datos de los países en Redux");
    }
};

// Acción asincrónica para filtrar países por nombre
export const filterCountry = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:3001/country?name=${name}`);
        return dispatch({
            type: FILTER_COUNTRY,
            payload: data,
        });
    } catch (error) {
        throw new Error("Error al obtener datos de los países en Redux");
    }
};

// Acción para filtrar países por continente
export const filterByContinent = (continent) => {
    return {
        type: FILTER_COUNTRY_BY_CONTINENT,
        payload: continent,
    };
};

// Acción para filtrar países por actividad turística
export const filterByActivity = (activity) => {
    return {
        type: FILTER_COUNTRY_BY_ACTIVITY,
        payload: activity,
    };
};

// Acción para ordenar países por nombre
export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order,
    };
};

// Acción para ordenar países por población
export const orderByPopulation = (order) => {
    return {
        type: ORDER_COUNTRY_BY_POPULATION,
        payload: order,
    };
};

// Acción para quitar filtros y mostrar todos los países
export const removeFilters = () => {
    return {
        type: REMOVE_FILTERS,
    };
};

// Acción asincrónica para obtener información de todas las actividades turísticas
export const getActivities = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/activity');
        return dispatch({
            type: GET_INFO_ACTIVITYS,
            payload: data,
        });
    } catch (error) {
        throw new Error("Error al obtener datos de las actividades en Redux");
    }
};