import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


//? Components
import Navbar from "../../components/NavBar/Navbar";
import Cards from "../../components/Cards/Cards";
import Paginated from '../../components/Paginated/Paginate'
import { filterByActivity, filterByContinent, getCountryInfo, removeFilters } from "../../redux/actions";




//?Styles
import HomeStyle from "./home.module.css"

const Home = () =>{
    const dispatch = useDispatch();

    const countrys = useSelector((state) => state.countrys);

    //filtros
    const clearFilter = () =>{
        dispatch(removeFilters())
    }
    const filterCountryByContinent = (continent) =>{
        dispatch(filterByContinent(continent))
    }
    const filterCountryByActivity = (activity) =>{
        dispatch(filterByActivity(activity))
    }

    //Paginado
    const [actualPage,setActualPage] = useState(1)
    const cardForPage = 10;
    const totalOfPages = Math.ceil(countrys.length / cardForPage);
    const indexCardStart = (actualPage -1 ) * cardForPage;
    const indexCardEnd = indexCardStart + cardForPage
    const countrysInPage = countrys.slice(indexCardStart,indexCardEnd)

    const handleChangePage = numPage =>{
        setActualPage(numPage)
    }



    useEffect( () =>{
        dispatch(getCountryInfo())

    },[dispatch])

    return(
        <div className={HomeStyle.homeContainer}>
            <h1 className={HomeStyle.homeTitle}>Welcome</h1>
            <h5 className={HomeStyle.homeSubTitle} >please, select your country</h5>
            <Cards countrysInPage={countrysInPage} ></Cards>
            <Paginated handleChangePage= {handleChangePage} totalOfPages={totalOfPages} actualPage={actualPage} ></Paginated>
        </div>
        
    )
}

export default Home; 