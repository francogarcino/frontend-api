import size from "../utils/utils"
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";

export default function DefaultEndpoint() {
    size()

    const navigate = useNavigate();
    const goToLore = () => { navigate("/verdad") }
    const goToBunker = () => { navigate("/reinos") }

    return (
        <div className="centered-page">
            <p className="text title underlined"> La verdad de EPERSGEIST </p>
            <div>
                <button className="home-btn" onClick={goToLore}> ➡️ Sigamos a RDJ </button>
            </div>
            <div>
                <button className="home-btn" onClick={goToBunker}> ✨ Explorar los circulos </button>
            </div>
        </div>
    )
}