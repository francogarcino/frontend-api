import size from "../utils/functions"
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";

export default function DefaultEndpoint() {
    size()
    const navigate = useNavigate();
    const goToLore = () => { navigate("/situacion") }
    const goToBunker = () => { navigate("/bunker") }

    return (
        <div className="centered-page">
            <p className="text title underlined"> Connected with e[P]ers </p>
            <div>
                <button className="home-btn" onClick={goToLore}> Situacion actual </button>
            </div>
            <div>
                <button className="home-btn" onClick={goToBunker}> Conexion con el bunker</button>
            </div>
        </div>
    )
}