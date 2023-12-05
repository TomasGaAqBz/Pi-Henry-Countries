import { filterByContinent, orderByName, removeFilters } from "../../redux/actions";


const FilterBar = () =>{
    
    const activity = useSelector((state) => state.activity);
    const countrys = useSelector((state) => state.countrys);
    const dispatch = useDispatch();


    const handleContinentSelected = (e) => {      
        const optionSelected = e.target.value;
        if (optionSelected === "Continent") {
            dispatch(removeFilters());
        } else {
            filterByContinent(optionSelected);
        }
    }
    const handleOrderName = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilters());
        } else {
            orderByName(e.target.value);
        }
    };
    const handleOrderPopulation = (e) => {
        if (e.target.value === "selectOrder") {
            dispatch(removeFilter());
        } else {
            orderByPopulation(e.target.value);
        }
      };



    return(
        <div>
            <div>
                <p>Filter By:</p>
                <label htmlFor=""> Continenet</label>
                <select name="" id="">
                    <option value="Continent">All Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Antartica">Antartica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

                <label htmlFor="activity">Activity</label>
                <select name="" id="">
                    <option value="activity">All Activity</option>
                    {Array.from()}
                </select>
            </div>
        </div>
    )
}


export default FilterBar