import size from "../utils/utils";
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
                    {preambulo()}
                    {conexion()}
                    {revelacion()}
                </div>
            </div>
        </div>
    )
}

const preambulo = () => {
    return(
        <div className="margined">
            Lejanos en la historia quedaron aquellos tiempos en los que la humanidad podía llamar 'suyo' a este planeta. <br></br>

            Desde aquel brote de la epidemia biomecánica, y tras años y años de subyugación de la humanidad, la mayoría de las especies derivadas de aquel patógeno primigenio mutaron lentamente en organismos con la capacidad de controlar a sus huéspedes, convirtiéndolos en carcasas con escasa humanidad, obligando a los vestigios de la humanidad a recluirse en colonias. <br></br>

            Sin embargo, esos años recluidos en colonias bajo el asedio de aquel organismo mecánico no fueron un impedimento para que lentamente algunos científicos desesperados obtuvieran avances para resistir, pero ninguno capaz de hacerle frente. <br></br>
        </div>
    )
}

const conexion = () => {
    return(
        <div className="margined">
            O al menos, no hasta ese día donde unos desarrolladores dentro de la colonia lograron contactar con un antiguo laboratorio central, donde una misteriosa entidad les respondió. <br></br>

            Este ente, quien presumía de haber sido el asistente de uno de los líderes culpables de la epidemia biomecánica, les transmitió al grupo de desarrolladores su arrepentimiento tras ver cómo sus creaciones habían poblado la tierra y llevado a la raza humana hasta su límite; no obstante, en un acto de redención con sus últimos suspiros, les brindó a los desarrolladores su plan para la supervivencia humana, denominado como el Éxodo del Progreso Evolutivo Robotizado y Sistemático, mejor conocido bajo el acrónimo E.P.E.R.S.
        </div>
    )
}

const revelacion = () => {
    return(
        <div className="margined">
            El plan del antiguo asistente consistía en la evolución de la raza humana mediante la independencia de la consciencia del cuerpo. Un plan que, ante la desesperante situación de los humanos, representaba un nuevo punto de partida. <br></br>

            El plan consistía en transformar la consciencia humana en una serie de datos que se implantarían de manera artificial en cuerpos robóticos. Sin embargo, los materiales para estos cuerpos se encontraban en un lugar alejado del desolado mundo donde se encontraban las colonias; exactamente a 384.400 km, en unos bunkers situados en la superficie lunar. <br></br>

            Para comunicarse con las colonias lunares y cargar la consciencia en los servidores de los bunkers lunares, las colonias terrestres deberían levantar una terminal en alguno de los servidores disponibles esparcidos a lo largo de las devastadas ciudades, y mediante el uso de un complejo invento del cual no se les reveló su funcionamiento, serializar su consciencia y enviarla al servidor, el cual volcará cada consciencia en un armazón metálico. <br></br>

            Este es el comienzo de la nueva humanidad...
        </div>
    )
}