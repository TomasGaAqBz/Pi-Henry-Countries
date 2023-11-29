
//Components 
import Card from "../Card/Card"

import StyleCards from "./cards.module.css"

const  Cards = () =>{
    return(
        <div className={StyleCards.cardsContainer} >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards