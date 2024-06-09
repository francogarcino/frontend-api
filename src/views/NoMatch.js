import size from "../utils/utils"
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";

export default function NoMatch() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    return (
        <div className="centered-page">
            <p className="text title underlined"> 🔧 ¿Pe[r]dido...? </p>
            <div>
                <p className="text" >Ups... </p>
                <p className="text" >Parece que la conexión con el bunker no funciona</p>
                <p className="text" >Quizas estan atacando nuestra base</p>
                <p className="text" >O quizas solo escribiste mal el path</p>
                <p className="text" >No lo chequeaste, ¿verdad?</p>
            </div>
            <div className="home-btn" onClick={goHome}> 🛜 Reestablece tu conexion con el bunker </div>
        </div>
    )
}