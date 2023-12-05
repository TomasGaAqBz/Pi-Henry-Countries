

//? componenet
import { useDispatch } from "react-redux"
import SearchBar from "../SearchBar/SearchBar"


import NavbarStyle from "./navbar.module.css"
import { filterCountry, getCountryInfo } from "../../redux/actions"
import { useLocation, NavLink, useNavigate } from "react-router-dom"

const Navbar = () =>{
    const dispatch = useDispatch()
    const localitation = useLocation()
    const navigate = useNavigate()


    const onSearch = (name) =>{
        name.length !== 0 ? dispatch(filterCountry(name)) : dispatch(getCountryInfo())
    }
    
    return(
    <nav className={NavbarStyle.container}>
        <div>
            logo
        </div>
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink  to="/home">
                        <i>HOME</i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activities" >
                        <i>ACTIVITYS</i>
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/create">
                        <i>CREATE ACTIVITY</i>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
}


export default Navbar