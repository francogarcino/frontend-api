import {useState} from "react";
import api from "../api/api";
import size from "../utils/utils";
import {useNavigate} from "react-router-dom";

export default function Bunker() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    const [docs, setDocs] = useState([]);
    const [msg, setMsg] = useState("Seleccione la terminal a consultar");

    const fetchFrom = (uri) => {
        setDocs([])
        setMsg(`Recuperando consciencias de ${mapUri(uri)[0]}`)
        api.androids(uri).then((response) => {
            let droids = response.data.map(doc => ({
                ...doc,
                origin: mapUri(uri)
            }));
            setDocs(droids)
        }).catch(e => console.log(`El terminal ${uri} no responde...`));
    }

    return (
        <div className="page">
            <div className="elems-in-row margined underlined">
                <div className="text title"> 🧠 Conciencias r[e]gistradas</div>
                <button className="back-btn text" onClick={goHome}> Volver al inicio</button>
            </div>
            <div className="margined btn-container">
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_PANCHO || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_PANCHO)}> EPERS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_ACIDC || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_ACIDC)}> ACIDC
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_BASE || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_BASE)}> BASE DE GATOS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_ESTRA || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_ESTRA)}> ESTRATEGAS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_JYQ || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_JYQ)}> JAMON Y QUESO
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_MARIA || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_MARIA)}> MARIADB
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_TECH || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_TECH)}> TECH TROOPERS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_TEST || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_TEST)}> TEST APROB.
                </button>
            </div>
            {
                docs.length > 0 ?
                    <div className="margined droids-container">
                        {docs.map((doc, index) => card(doc, index))}
                    </div>
                    :
                    <div className="loading-msg">
                        💻 {msg}
                    </div>
            }
        </div>
    );
}

const card = (doc, index) => {
    return (<div key={index} className="item" style={{ backgroundColor: doc.origin[1] }}>
            <p className="text fixed-test"> {doc.serial_name} | {doc.origin[0]} </p>
            <p className="text"> {doc.request_timestamp} </p>
        </div>
    );
}

const uriMap = {
    [process.env.REACT_APP_URI_PANCHO]: ["Pancho-DB", "#c1afa0"],
    [process.env.REACT_APP_URI_ACIDC]: ["ACIDC-DB", "#575757"],
    [process.env.REACT_APP_URI_JYQ]: ["JamonQueso-DB", "#ffae7f"],
    [process.env.REACT_APP_URI_BASE]: ["BaseGatos-DB", "#0f3f7f"],
    [process.env.REACT_APP_URI_TECH]: ["TechTroopers-DB", "#d4d4d4"],
    [process.env.REACT_APP_URI_TEST]: ["TestAprobacion", "#0B7D57"],
    [process.env.REACT_APP_URI_MARIA]: ["MariaDB", "#8c52ff"],
    [process.env.REACT_APP_URI_ESTRA]: ["EstrategasDB", "#ff3131"]
};

const mapUri = (uri) => {
    return uriMap[uri] || ["Terminal ???", "#000000"];
}
