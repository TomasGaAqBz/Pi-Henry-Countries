import { useNavigate } from 'react-router-dom';
import landingStyle from "./landing.module.css"
import imgWorld from '../../assets/imgplaneta.jpg'


const Landing = () =>{
    const navigate = useNavigate()

    return(
        <div className={landingStyle.landingContainer}>
            <h1 className={landingStyle.tittleApp}>Welcome to my Country Aplication</h1>
            <h4 className={landingStyle.subtittleApp} > Ready to explore the world ?</h4>
        <div className={landingStyle.blockPrincipal}>
            <div className={landingStyle.sideRight}>
                <div className={landingStyle.worldImg}></div>
            </div>
        </div>
        <div className={landingStyle.ButtonContainer} >
            <button onClick={()=> navigate('/home')}className={landingStyle.buttonStyle} >Go to Home</button>
        </div>
        
        </div>
    )
}


export default Landing;