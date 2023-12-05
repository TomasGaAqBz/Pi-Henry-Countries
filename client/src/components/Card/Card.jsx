import { Link } from "react-router-dom";

import StyleCard from "./card.module.css"

const Card = ({id,name,continent,flagImage}) =>{
    

    return (
        <div className={StyleCard.cardContainer}>
            <Link to={`/detail/${id}`}>
                <div className={StyleCard.cardsmallSquare}>
                    <div>
                        <img src={flagImage} alt="" />
                    </div>
                    <div>
                        <p>{name.toUpperCase()}</p>
                        <p>{continent}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default Card