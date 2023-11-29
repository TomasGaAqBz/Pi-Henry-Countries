import StyleCard from "./card.module.css"


const Card = () =>{
    

    return (
        <div className={StyleCard.cardContainer}>
            <div className={StyleCard.cardsmallSquare}>
                <div>imagen</div>
                <div>
                    <p>Nombre:</p>
                    <p>Contienete:</p>
                </div>
                <div>Escudo:</div>
            </div>
        </div>
    )
}


export default Card