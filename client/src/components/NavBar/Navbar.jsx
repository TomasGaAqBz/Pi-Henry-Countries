import React from 'react';
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import NavbarStyle from "./navbar.module.css";
import { filterCountry, getCountryInfo } from "../../redux/actions";
import { useLocation, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {pathname} = useLocation()

    const navigate = useNavigate();

    // Maneja la acción de búsqueda.
    const onSearch = (name) => {
        // Si el nombre no está vacío, realiza una búsqueda; de lo contrario, obtiene todos los países.
        name.length !== 0 ? dispatch(filterCountry(name)) : dispatch(getCountryInfo());
    }

    return (
        <nav className={NavbarStyle.container}>
            <div className={NavbarStyle.textcontainer} >
                <NavLink to="/home" exact>
                            <button className={NavbarStyle.button}>HOME</button>
                        </NavLink>

            </div>
            <div>
                {pathname === "/home" && <SearchBar onSearch={onSearch} />} 
                {/* Barra de búsqueda */}
                
            </div>
            <div className={NavbarStyle.textcontainer} >
                        <NavLink to="/create">
                            <button className={NavbarStyle.button} >CREATE ACTIVITY</button>
                        </NavLink>

            </div>
        </nav>
    );
}

export default Navbar;