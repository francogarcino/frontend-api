import size from "../utils/utils";
import "../styles/styles.scss"
import {useNavigate} from "react-router-dom";
import React from "react";

export default function Enunciado() {
    size()

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")
    }

    return (
        <div className="page">
            <div className="elems-in-row margined underlined">
                <p className="text title"> 👹 TP 6 | La verdad de EPERSGEIST 🪽 </p>
                <button className="back-btn text" onClick={goHome}> Retornar al nexo</button>
            </div>
            <div>
                <div className="columned">
                    <img className="margined android" src={require("../assets/nexo.jpeg")} alt="Nexo"/>
                    {preambulo()}
                </div>
                {conexion()}
                {revelacion()}
            </div>
        </div>
    )
}

const preambulo = () => {
    return (
        <div className="margined lore">
            <div className="underlined"> 🪬 T0: ENTRADA</div>
            Atónitos ante la revelación de la naturaleza agresiva del demonio que acompañaba a RDJ, todos miramos la
            especie de grieta dimensional que dejó nuestro mesías tras él. <br/>

            Lo que era una masa de energía oscura en la pared comenzó a presentar leves destellos de diversos colores,
            evocando en nuestras mentes la viva representación de estar viendo una pequeña galaxia frente a
            nosotros. <br/>

            Flanqueando nuestras posibilidades, un grito de una voz conocida resonó desde el portal... Un lamento que
            reclamaba que fuéramos en su ayuda... RDJ nos necesitaba del otro lado. <br/>

            Quizás una decisión estúpida o extremadamente arriesgada para nosotros, pero no podíamos dejar perecer a
            nuestro aliado.
        </div>
    )
}

const conexion = () => {
    return (
        <div className="margined lore">
            <div className="underlined"> 🪐 T1: REINOS</div>
            Avanzamos hacia el portal, deslumbrados por unos instantes al cruzar al otro plano. Fuera lo que fuese aquel
            lugar, las vistas que se desplegaban ante nosotros eran todo menos comunes. <br/>

            Un vasto y desolado plano blanco se extendía sin fin; detrás de nosotros, un portal similar al que habíamos
            cruzado, pero de proporciones colosales, dominaba el horizonte. <br/>

            Diversos cristales de múltiples colores se extendían tanto en la tierra como en el aire de este mundo junto
            con esferas de energía de la misma variedad. El cielo, sin rastro de oscuridad, brillaba haciendo parecer
            que la noche era un concepto inexistente mientras galaxias se pintaban en el mismo. <br/>

            Nuestros ojos recorrieron el paisaje en busca de nuestro compañero hasta que lo encontramos, tendido y
            malherido en el centro de una serie de circunferencias inscritas en el suelo, con un vórtice en el corazón
            de las mismas.
        </div>
    )
}

const revelacion = () => {
    return (
        <div className="margined lore">
            <div className="underlined"> 💎 T2: ULTIMA MISIÓN</div>
            Llegamos al auxilio de RDJ, su vida pendiendo de un hilo mientras lo observábamos canalizar su propia
            energía para revertir sus heridas. Una vez a su lado, nos reveló la naturaleza de aquel paraje. <br/>

            <div className="blockquote">
                Los espíritus, tanto ángeles como demonios que han visto... provienen de reinos distintos e infinitos...
            </div>

            Con un movimiento lento, señaló uno de los cristales en la distancia. <br/>

            <div className="blockquote">
                —El demonio que me acompañaba... escapó al reino reflejado en ese cristal. Pero ustedes... deben actuar...
            </div>

            Aunque éramos incapaces de dominar las artes arcanas que RDJ mencionaba mientras buscaba los remanentes de energía, percibimos claramente que la fuerza vital que poseía era mucho menor que antes. Aun así, lo poco que le quedaba fue suficiente para invocar un pergamino en su mano. <br/>

            <div className="blockquote">
                —Siete runas... deben encontrarlas... luego regresen... y detengan el caos...
            </div>

            Siete orbes de energía aparecieron a su alrededor, cada uno dirigiéndose a distintos cristales cercanos a nuestra posición. No necesitábamos más indicaciones: comprendimos que aquella era nuestra última misión, el último paso para cerrar la caja de Pandora que habíamos abierto. <br/>

            Juntos, emprendimos nuestra cruzada...
        </div>
    )
}