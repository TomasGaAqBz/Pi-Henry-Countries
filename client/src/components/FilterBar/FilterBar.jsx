import { filterByContinent, orderByName, orderByPopulation, filterByActivity ,removeFilters, getCountryInfo, getActivities } from "../../redux/actions";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


const FilterBar = () => {
    // Obtiene el despachador (dispatch) de acciones de Redux
    const dispatch = useDispatch();

    // Obtiene el estado de la actividad y los países desde el estado global usando useSelector
    const activity = useSelector((state) => state.activity);
    const countrys = useSelector((state) => state.countrys)
    
    const [activitySet, setActivitySet] = useState(new Set());

    // Maneja el cambio en la selección del continente y dispatcha la acción correspondiente.
    const handleContinentSelected = (e) => {
        const optionSelected = e.target.value;
        if (optionSelected === 'Continent') {
            dispatch(removeFilters());
        } else {
            dispatch(filterByContinent(optionSelected));
        }
    };
    //Maneja el cambio en la selección del nombre para ordenar y dispatcha la acción correspondiente.
    const handleOrderName = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByName(e.target.value));
        }
    };
    //aneja el cambio en la selección de la población para ordenar y dispatcha la acción correspondiente.
    const handleOrderPopulation = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByPopulation(e.target.value));
        }
    };
    const handleActivitySelected = (e) => {
        const activitySelected = e.target.value;
        if (activitySelected === 'activity') {
            dispatch(removeFilters());
        } else {
            dispatch(filterByActivity(activitySelected));
        }
    };
    // Efecto para actualizar la lista de actividades cuando cambia el estado global
    useEffect(() => {
        // Función asincrónica para obtener actividades únicas de los países actuales
        const fetchUniqueActivities = async () => {
            try {
                const uniqueActivities = new Set();
    
                // Obtener datos de los países y actividades de manera concurrente
                const [countriesResponse, activitiesResponse] = await Promise.all([
                    dispatch(getCountryInfo()),
                    dispatch(getActivities())
                ]);
    
                const countriesData = countriesResponse.payload; 
                const activitiesData = activitiesResponse.payload; 
                countriesData.forEach(country => {
                    if (country.activities) {
                        country.activities.forEach(activity => {
                            uniqueActivities.add(activity.name);
                        });
                    }
                });
    
                console.log("uniqueActivities:", uniqueActivities);
                setActivitySet(uniqueActivities);
            } catch (error) {
                console.error("Error al obtener datos de países y actividades:", error);
            }
        };
    
        // Llamar a la función asincrónica
        fetchUniqueActivities();
    }, [dispatch]);

    console.log("activitySet:", activitySet);
    return (
        <div>
            <div>
                <p>Filter By:</p>
                <label htmlFor="continent">Continent</label>
                <select name="continent" id="continent" onChange={handleContinentSelected}>
                    <option value="Continent">All Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Antartica">Antartica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

                <label htmlFor="activity">Activity</label>
            <select name="activity" id="activity" onChange={handleActivitySelected}>
                <option value="activity">All Activity</option>
                {Array.from(activitySet).map((activity, index) => (
                    <option key={index} value={activity}>
                        {activity.charAt(0).toUpperCase() + activity.slice(1)}
                    </option>
                ))}
            </select>
            </div>

            <div>
                <h4>Order by:</h4>
                <label htmlFor="orderByName">Name</label>
                <select name="orderByName" id="orderByName" onChange={handleOrderName}>
                    <option value="selectOrder">Select order</option>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                </select>

                <label htmlFor="orderByPopulation">Population</label>
                <select name="orderByPopulation" id="orderByPopulation" onChange={handleOrderPopulation}>
                    <option value="selectOrder">Select order</option>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;