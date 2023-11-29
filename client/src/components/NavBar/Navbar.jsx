

//? componenet
import SearchBar from "../SearchBar/SearchBar"


import NavbarStyle from "./navbar.module.css"

const Navbar = () =>{
    
    return(
    <nav className={NavbarStyle.container}>
        <div>
            logo
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            <button>Home</button>
            <button>Activities</button>
            <button>Create Activity</button>
        </div>
    </nav>
)
}


export default Navbar