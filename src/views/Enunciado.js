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
                <p className="text title"> TP 3.5 | El pasado de EPERSGEIST 🪽 </p>
                <button className="back-btn text" onClick={goHome}> Retornar al presente </button>
            </div>
            <div>
                <div className="columned">
                    <img className="margined android" src={require("../assets/esp.jpeg")} alt="Nexo"/>
                    {preambulo()}
                </div>
            </div>
        </div>
    )
}

const preambulo = () => {
    return (
        <div className="margined lore">
            <div className="underlined"> ... ¿soy yo?... </div>
            Ese maldito enlace a ese blog... Todos esos extraños símbolos...
            los fragmentos de idiomas muertos... diagramas... identidades... <br/>

            ¿Que fue lo que me atrajo a esta maldición? <br/>

            Aquella noche... Ese estupido ritual me condenó a algo más grande que desconocia... <br/>

            No era una visión. No era un delirio. <br/>

            El vínculo se selló en el instante en que mi brazo izquierdo fue consumido desde dentro...
            No quedó carne. No quedó hueso. <br/>
            
            Solo un silencio denso... y una sombra aferrada a mi alma hasta que cumpla mi objetivo... o el suyo... <br/>

            No se porqué me guia... No se hacia donde... No se cual es su plan, pero esto no tiene buena pinta... <br/>
            
            Números, coordenadas, nombres que no recuerdo haber conocido... Mi cuerpo se mueve por otra voluntad pese a ser consiente. <br/>

            Años pasaron... las voces y la pesada presencia en mi espalda me acompañaron hasta hoy... Tras verlos a ustedes... la voz principal me domino de nuevo... <br/>

            <div className="blockquote">
                ... Ellos son... nuestras presas...
            </div>
        </div>
    )
}