import size from "../utils/utils"
import "../styles/styles.scss"

export default function NoMatch() {
    size()

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
        </div>
    )
}