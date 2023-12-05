// Importación de action types
import { FILTER_COUNTRY, FILTER_COUNTRY_BY_ACTIVITY, FILTER_COUNTRY_BY_CONTINENT, GET_INFO, GET_INFO_ACTIVITYS, ORDER_COUNTRY_BY_POPULATION, REMOVE_FILTERS } from "../actions";

// Estado inicial de la aplicación
let initialState = {
    countrys: [],
    allcountrys: [],
    activity: [],
    allActivitys: []
};

// Reductor que maneja las acciones y actualiza el estado
const reducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        // Acción para obtener información de países
        case GET_INFO:
            return {
                ...state,
                allcountrys: payload,
                countrys: payload
            };

        // Copia de para poder filtrar los paises
        case FILTER_COUNTRY:
            return {
                ...state,
                countrys: payload
            };

        // Acción para filtrar países por continente
        case FILTER_COUNTRY_BY_CONTINENT:
            return {
                ...state,
                countrys: state.allcountrys.filter((country) => {
                    if (payload === "America") {
                        return (
                            country.continents === "South America" ||
                            country.continents === "North America"
                        );
                    } else {
                        return country.continents === payload;
                    }
                })
            };

        // Acción para ordenar países por población
        case ORDER_COUNTRY_BY_POPULATION:
            return {
                ...state,
                countrys: state.countrys.slice().sort((a, b) => {
                    if (payload === "A") return a.population - b.population;
                    if (payload === "D") return b.population - a.population;
                    return 0;
                })
            };

        // Acción para quitar filtros y mostrar todos los países
        case REMOVE_FILTERS:
            return {
                ...state,
                countrys: state.allcountrys
            };

        // Acción para obtener información de actividades turísticas
        case GET_INFO_ACTIVITYS:
            return {
                ...state,
                allActivitys: payload,
                activity: payload
            };

        // Acción para filtrar países por actividad turística
        case FILTER_COUNTRY_BY_ACTIVITY:
            return {
                ...state,
                countrys: state.allcountrys.filter((country) => {
                    return country.Activities?.find((activity) => {
                        return activity.name === payload;
                    });
                })
            };

        // Acción por defecto si no se reconoce la acción
        default:
            return state;
    }
};

export default reducer;