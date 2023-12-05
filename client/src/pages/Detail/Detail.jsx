import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import detailStyle from "./detail.module.css"


const Detail = () =>{
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const navigate = useNavigate()
    const goHome =()=>{
        navigate("/home")
    }
    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:3001/country/${id}`)
                .then(({ data }) => {
                    if (data && data.name) {
                        setDetail({
                            id: data.id,
                            name: data.name.toUpperCase(),
                            flagImage: data.flagImage || "",
                            continent: data.continent || "",
                            capital: data.capital || "",
                            subregion: data.subregion || "",
                            area: data.area || "",
                            population: data.population || "",
                            activities: data.Activities || [],
                        });
                    }
                })
                .catch((error) => {
                    throw new Error({ Error: error.response.data });
                });
        }
    }, [id]);



    return(
        <div className={detailStyle.bigContainer} >
            <div className={detailStyle.container}>
                <div className={detailStyle.imgContainer} >
                    <img src={detail.flagImage} alt="" />
                    <h3>{detail.name}</h3>
                </div>
                <div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >ID:</p>
                        <p className={detailStyle.itemValue}>{detail.id}</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >Continent:</p>
                        <p className={detailStyle.itemValue}>{detail.continent}</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >Capital:</p>
                        <p className={detailStyle.itemValue}>{detail.capital}</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >Subregion:</p>
                        <p className={detailStyle.itemValue}>{detail.subregion}</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >Area:</p>
                        <p className={detailStyle.itemValue}>{detail.area}  Km²</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList} >Population:</p>
                        <p className={detailStyle.itemValue}>{detail.population}  Km²</p>
                    </div>
                    <div>
                        <p>Activitys</p>
                        <p>{detail.activities?.length !== 0 
                        ?detail.activities?.map((activity) =>{
                            return (detail.activities.length>1 ?activity.name + ", " : activity.name)
                        }): "No Existen Actividades"}</p>
                    </div>
                </div>
                
            </div>
            <button onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default Detail;