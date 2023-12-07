import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


//? Components
import Cards from "../../components/Cards/Cards";
import Paginated from '../../components/Paginated/Paginate'
import {getCountryInfo} from "../../redux/actions";




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

    const handleChangePage = numPage =>{
        setActualPage(numPage)
    }

    useEffect(() => {
        dispatch(getCountryInfo());
    }, [dispatch]);

    return(
        <div className={HomeStyle.homeContainer}>
            <h1 className={HomeStyle.homeTitle}>Bienvenido</h1>
            <h5 className={HomeStyle.homeSubTitle}>Por favor, selecciona tu país</h5>
            <Cards countrysInPage={countrysInPage}></Cards>
            <Paginated handleChangePage={handleChangePage} totalOfPages={totalOfPages} actualPage={actualPage}></Paginated>
        </div>
    );
    
}

export default Home; 