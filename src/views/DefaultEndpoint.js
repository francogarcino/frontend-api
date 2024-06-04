import size from "../utils/functions"
import "../styles/styles.scss"

export default function DefaultEndpoint() {
    size()

    return (
        <div className="centered-page">
            <p className="text title underlined"> Connected with e[P]ers </p>
            <div>
                <p className="text"> Mira el lado bueno, sigues conectado al bunker de la organización </p>
                <p className="text"> El lado malo es que estas perdido, probablemente te equivocaste de url </p>
                <p className="text"> No lo chequeaste, ¿verdad? </p>
            </div>
        </div>
    )
}