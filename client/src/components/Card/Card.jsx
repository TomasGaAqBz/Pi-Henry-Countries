import { Link } from "react-router-dom";

import StyleCard from "./card.module.css"

const Card = ({ id, name, continent, flagImage }) => {
    return (
        <div className={StyleCard.cardContainer}>
            {/* Utiliza el componente Link para redirigir a la página de detalles */}
            <Link to={`/detail/${id}`}>
                <div className={StyleCard.cardsmallSquare}>
                    <div className={StyleCard.imageContainer} >
                        <img src={flagImage} className={StyleCard.imageContainer} alt="" />
                    </div>
                    <div>
                        <p className={StyleCard.title} >{name.toUpperCase()}</p>
                        <p className={StyleCard.subtitle} >{continent}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;