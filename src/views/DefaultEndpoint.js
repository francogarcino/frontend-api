import size from "../utils/utils"
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";

export default function DefaultEndpoint() {
    size()

    const navigate = useNavigate();
    const goToLore = () => { navigate("/pasado") }
    const goToBunker = () => { navigate("/reinos") }

    return (
        <div className="centered-page">
            <p className="text title underlined"> El pasado de EPERSGEIST </p>
            <div>
                <button className="home-btn" onClick={goToLore}> 🔙 Recapitulemos </button>
            </div>
            <div>
                <button className="home-btn" onClick={goToBunker}> ✨ Explorar las dimensiones </button>
            </div>
        </div>
    )
}