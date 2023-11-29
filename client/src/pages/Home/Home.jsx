
//? Components
import Navbar from "../../components/NavBar/Navbar";
import Cards from "../../components/Cards/Cards";



//?Styles
import HomeStyle from "./home.module.css"

const Home = () =>{

    return(
        <div className={HomeStyle.homeContainer}>
            <Navbar></Navbar>
            <h1 className={HomeStyle.homeTitle}>Welcome</h1>
            <h5 className={HomeStyle.homeSubTitle} >please, select your country</h5>
            <Cards></Cards>
        </div>
        
    )
}

export default Home;