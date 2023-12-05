import { filterByContinent, orderByName, orderByPopulation, removeFilters } from "../../redux/actions";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


const FilterBar = () => {
    const dispatch = useDispatch();
    const activity = useSelector((state) => state.activity);
    const countrys = useSelector((state) => state.countrys);

    let activitySet = new Set();

    const handleContinentSelected = (e) => {
        const optionSelected = e.target.value;
        if (optionSelected === "Continent") {
            dispatch(removeFilters());
        } else {
            dispatch(filterByContinent(optionSelected));
        }
    }

    const handleOrderName = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByName(e.target.value));
        }
    };

    const handleOrderPopulation = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            dispatch(orderByPopulation(e.target.value));
        }
    };

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
                <select name="activity" id="activity">
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
}

export default FilterBar;