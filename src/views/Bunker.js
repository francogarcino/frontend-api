import {useState} from "react";
import api from "../api/api";
import size from "../utils/utils";
import {useNavigate} from "react-router-dom";

export default function Bunker() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    const [docs, setDocs] = useState([]);
    const [msg, setMsg] = useState("Seleccione que dimensión explorar");

    const fetchFrom = (uri) => {
        setDocs([])
        setMsg(`Buscando ubicaciones de ${mapUri(uri)[0]}`)
        api.spots(uri).then((response) => {
            let places = response.data.map(doc => ({
                ...doc,
                origin: mapUri(uri)
            }));
            setDocs(places)
            console.log(places);
        }).catch(e => console.log(`La dimensión ${uri} esta fuera de tu comprensión...`));
    }

    return (
        <div className="page">
            <div className="elems-in-row margined underlined">
                <div className="text title"> 🌌 Dimensiones </div>
                <button className="back-btn text" onClick={goHome}> Retornar al nexo </button>
            </div>
            <div className="margined btn-container">
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_PANCHO || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_PANCHO)}> EPERS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_SOBRE || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_SOBRE)}> SOBREPERSISTIENDO
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_CODIGO || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_CODIGO)}> CÓD. CLANDESTINO
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_HTML || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_HTML)}> HTML
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_FEM || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_FEM)}> FEM&ACID
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_WORLD || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_WORLD)}> WORLD OF JAVA
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_INTE || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_INTE)}> INTELLIJENTES
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_BUGS || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_BUGS)}> BUG BUSTERS
                </button>
            </div>
            {
                docs.length > 0 ?
                    <div className="margined droids-container">
                        {docs.map((doc, index) => card(doc, index))}
                    </div>
                    :
                    <div className="loading-msg">
                        👻 {msg}
                    </div>
            }
        </div>
    );
}

const card = (doc, index) => {
    return (<div key={index} className="item" style={{ backgroundColor: doc.origin[1] }}>
            <p className="text fixed-test"> {doc.nombre} | {doc.origin[0]} </p>
            <p className="text"> {doc.found_at} </p>
        </div>
    );
}

const uriMap = { // beige, gris, verde, azul, purpura, marron, _, rojo
    [process.env.REACT_APP_URI_PANCHO]: ["Pancho-DB", "#c1afa0"],
    [process.env.REACT_APP_URI_SOBRE]: ["Sobre-DB", "#d4d4d4"],
    [process.env.REACT_APP_URI_CODIGO]: ["Código-DB", "#0B7D57"],
    [process.env.REACT_APP_URI_HTML]: ["HTML-DB", "#0f6fbf"],
    [process.env.REACT_APP_URI_FEM]: ["Fem&ACID-DB", "#8c52ff"],
    [process.env.REACT_APP_URI_WORLD]: ["WoJ-DB", "#796353"],
    [process.env.REACT_APP_URI_INTE]: ["IntelliJentes-DB", "#bc9cb0"],
    [process.env.REACT_APP_URI_BUGS]: ["Busters-DB", "#ff3131"]
};

const mapUri = (uri) => {
    return uriMap[uri] || ["Reino ???", "#000000"];
}
