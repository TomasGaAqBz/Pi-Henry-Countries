
//? Components
import Navbar from "../../components/NavBar/Navbar";
import Cards from "../../components/Cards/Cards";



//?Styles
import HomeStyle from "./home.module.css"

const Home = () =>{

    return(
        <div className={HomeStyle.homeContainer}>
            <h1 className={HomeStyle.primaryText}>Esto es el Home</h1>
            <Cards></Cards>
        </div>
        
    )
}

export default Home;