import { useNavigate } from 'react-router-dom';
import landingStyle from "./landing.module.css"
import imgWorld from '../../assets/imgplaneta.png'
import imgGloboDiag from '../../assets/globodialogo.png'

const Landing = () =>{
    const navigate = useNavigate()

    return(
        <div>
        <h1>App Countries</h1>
        <div>
            <div>
                <img src={imgGloboDiag} alt="" />
            </div>
            <div>
                <img src={imgWorld} alt="" />
            </div>
        </div>
        <button onClick={()=> navigate('/home')}>Go to Home</button>
        
        </div>
    )
}


export default Landing;