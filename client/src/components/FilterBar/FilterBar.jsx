    // Importa las acciones de Redux y los hooks de React
    import {
        filterByContinent,
        orderByName,
        orderByPopulation,
        filterByActivity,
        removeFilters,
        getCountryInfo,
        getActivities
    } from "../../redux/actions";
    import React, { useState, useEffect } from 'react';
    import { useDispatch, useSelector } from "react-redux";
    import StyleFilter from './filterBar.module.css'
    // Define el componente FilterBar
    const FilterBar = () => {
        // Obtiene el despachador (dispatch) de acciones de Redux
        const dispatch = useDispatch();
    
        // Estado local para almacenar actividades únicas
        const activity = useSelector((state) => state.activity);

        const [activitySet, setActivitySet] = useState([]);
    
        // Maneja el cambio en la selección del continente y dispatcha la acción correspondiente.
        const handleContinentSelected = (e) => {
            const optionSelected = e.target.value;
            if (optionSelected === 'Continent') {
                dispatch(removeFilters());
            } else {
                dispatch(filterByContinent(optionSelected));
            }
        };
    
        // Maneja el cambio en la selección del nombre para ordenar y dispatcha la acción correspondiente.
        const handleOrderName = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByName(e.target.value));
        }
        };
    
        // Maneja el cambio en la selección de la población para ordenar y dispatcha la acción correspondiente.
        const handleOrderPopulation = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByPopulation(e.target.value));
        }
        };
    
        // Maneja el cambio en la selección de la actividad y dispatcha la acción correspondiente.
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
            dispatch(getActivities())
        },[]);
    

        // Renderiza la interfaz de usuario del componente
    return (
        <div className={StyleFilter.container} >
            <div className={StyleFilter.containerleft}>
                <h4 className={StyleFilter.title}>Filter By</h4>
                <label className={StyleFilter.label} htmlFor="continent">Continent</label>
                <select className={StyleFilter} name="continent" id="continent" onChange={handleContinentSelected}>
                    <option value="Continent">All Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

                <label className={StyleFilter.label} htmlFor="activity">Activity</label>
            <select name="activity" id="activity" onChange={handleActivitySelected}>
                <option value="activity">All Activity</option>
                {activity.map((activity, index) => (
                    <option key={index} value={activity.name}>
                    {activity.name}
                    </option>
                ))}
            </select>
            </div>

            <div className={StyleFilter.containerleft}>
                <h4 className={StyleFilter.title} >Order by:</h4>
                <label className={StyleFilter.label} htmlFor="orderByName">Name</label>
                <select name="orderByName" id="orderByName" onChange={handleOrderName}>
                    <option value="selectOrder">Select order</option>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                </select>

                <label className={StyleFilter.label} htmlFor="orderByPopulation">Population</label>
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