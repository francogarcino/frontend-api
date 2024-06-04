import size from "../utils/window-size";
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";

export default function Enunciado() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    return(
        <div className="page">
            <div className="elems-in-row margined underlined">
                <p className="text title"> 🚀 TP 6 | Un exilio inm[i]nente </p>
                <button className="back-btn text" onClick={goHome}> Volver al inicio </button>
            </div>
            <div className="margined">
                <div className="text">
                    Narración
                </div>
            </div>
        </div>
    )
}