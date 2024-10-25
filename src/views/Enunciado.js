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
                    <img className="margined android" src={require("../assets/inferno.jpeg")} alt="Nexo"/>
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
            Avanzamos hacia el portal en lo que fue un viaje del todo menos grato: los breves segundos que nos tomo
            atravesar el portal se sintieron casí eternos mientras nos sumiamos en una perfecta oscuridad. Multiples
            voces provenientes de la misma oscuridad nos susurraban penurias y lamentos constantemente en un intento de
            perturbar nuestra psiquis. <br/>

            Tras poner un pie fuera de esa oscuridad, un vasto y desolado plano se extendía infinitamente frente a
            nosotros presentando un mundo enterrado en caos. Un fuerte hedor a azufre nos invadio mientras veiamos los
            pocos vestigios de este mundo plagado de cenizas, depresión y catastrofe. <br/>

            Buscamos a nuestro poseido compañero a nuestro alrededor, esperando encontrar alguna pista de su paradero
            hasta que uno de nosotros distinguio unas marcas de sangre en el suelo que se extendian hasta la entrada de
            lo que para nuestros mundanamente acostumbrados ojos parecia ser una cueva. <br/>

            Tras entrar en esa pequeña cueva, iluminada tenuemente por fragmentos de cristales incrustados en las
            paredes de los cuales emanaba un liquido oscuro y espeso junto con un denso gas, encontramos a RDJ, tendido
            contra una piedra, malherido, exhausto y con la conocida ausencia de su brazo izquierdo como siempre.
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