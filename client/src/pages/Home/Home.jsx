
//? Components
import Navbar from "../../components/NavBar/Navbar";
import Cards from "../../components/Cards/Cards";



//?Styles
import "./home.module.css"

const Home = () =>{

    return(
        <div>
            <h1>Esto es el Home</h1>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
        
    )
}

export default Home;