import React from 'react';
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import NavbarStyle from "./navbar.module.css";
import { filterCountry, getCountryInfo } from "../../redux/actions";
import { useLocation, NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // Maneja la acción de búsqueda.
    const onSearch = (name) => {
        // Si el nombre no está vacío, realiza una búsqueda; de lo contrario, obtiene todos los países.
        name.length !== 0 ? dispatch(filterCountry(name)) : dispatch(getCountryInfo());
    }

    return (
        <nav className={NavbarStyle.container}>
            <div>
                {/* Aquí iría tu logo */}
                logo
            </div>
            <div>
                {/* Barra de búsqueda */}
                <SearchBar onSearch={onSearch} />
            </div>
            <div>
                {/* Menú de navegación */}
                <ul>
                    <li>
                        <NavLink to="/home">
                            <i>HOME</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">
                            <i>CREATE ACTIVITY</i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;