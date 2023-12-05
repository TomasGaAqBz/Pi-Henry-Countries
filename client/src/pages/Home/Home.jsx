import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


//? Components
import Navbar from "../../components/NavBar/Navbar";
import Cards from "../../components/Cards/Cards";
import { getCountryInfo } from "../../redux/actions";




//?Styles
import HomeStyle from "./home.module.css"

const Home = () =>{
    const dispatch = useDispatch();

    const countrys = useSelector((state) => state.countrys);


    //Paginado
    const [actualPage,setActualPage] = useState(1)
    const cardForPage = 10;
    const totalOfPages = Math.ceil(countrys.length / cardForPage);
    const indexCardStart = (actualPage -1 ) * cardForPage;
    const indexCardEnd = indexCardStart + cardForPage
    const countrysInPage = countrys.slice(indexCardStart,indexCardEnd)





    useEffect( () =>{
        dispatch(getCountryInfo())

    },[dispatch])

    return(
        <div className={HomeStyle.homeContainer}>
            <Navbar></Navbar>
            <h1 className={HomeStyle.homeTitle}>Welcome</h1>
            <h5 className={HomeStyle.homeSubTitle} >please, select your country</h5>
            <Cards countrysInPage={countrysInPage} ></Cards>
        </div>
        
    )
}

export default Home; 