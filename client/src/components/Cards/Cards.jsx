
//Components 
import Card from "../Card/Card"

import StyleCards from "./cards.module.css"

const Cards = ({ countrysInPage }) => {
    return (
        <div className={StyleCards.cardsContainer}>
            {/* Mapea sobre la lista de países para renderizar tarjetas */}
            {countrysInPage.map(({ id, name, flagImage, continent }) => (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    flagImage={flagImage}
                    continent={continent}
                />
            ))}
        </div>
    );
}

export default Cards;