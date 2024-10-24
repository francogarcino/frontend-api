import {useState} from "react";
import api from "../api/api";
import size from "../utils/utils";
import {useNavigate} from "react-router-dom";

export default function Bunker() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    const [docs, setDocs] = useState([]);
    const [msg, setMsg] = useState("Seleccione el reino a explorar");

    const fetchFrom = (uri) => {
        setDocs([])
        setMsg(`Buscando espiritus de ${mapUri(uri)[0]}`)
        api.spirits(uri).then((response) => {
            let spirits = response.data.map(doc => ({
                ...doc,
                origin: mapUri(uri)
            }));
            setDocs(spirits)
        }).catch(e => console.log(`El reino ${uri} esta fuera de tu comprensión...`));
    }

    return (
        <div className="page">
            <div className="elems-in-row margined underlined">
                <div className="text title"> 🌌 Reinos Arcanos </div>
                <button className="back-btn text" onClick={goHome}> Retornar al nexo </button>
            </div>
            <div className="margined btn-container">
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_PANCHO || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_PANCHO)}> EPERS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_REDIS || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_REDIS)}> TAMOS REDIS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_GHOST || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_GHOST)}> GHOST BUGSTERS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_MANCOS || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_MANCOS)}> MANCOS
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_ANGELES || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_ANGELES)}> ANGELES
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_GRADLE || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_GRADLE)}> A LO GRADLE
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_NULL || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_NULL)}> NULLPOINTER
                </button>
                <button className="db-btn"
                        disabled={!Boolean(process.env.REACT_APP_URI_STRIKES || "")}
                        onClick={() => fetchFrom(process.env.REACT_APP_URI_STRIKES)}> STRIKES BACK
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
            <p className="text fixed-test"> {doc.name} | {doc.origin[0]} </p>
            <p className="text"> {doc.found_at} </p>
        </div>
    );
}

const uriMap = {
    [process.env.REACT_APP_URI_PANCHO]: ["Pancho-DB", "#c1afa0"],
    [process.env.REACT_APP_URI_REDIS]: ["Redis-DB", "#575757"],
    [process.env.REACT_APP_URI_GHOST]: ["Ghost-DB", "#ffae7f"],
    [process.env.REACT_APP_URI_MANCOS]: ["Mancos-DB", "#0f3f7f"],
    [process.env.REACT_APP_URI_ANGELES]: ["Angeles-DB", "#d4d4d4"],
    [process.env.REACT_APP_URI_GRADLE]: ["Gradle-DB", "#0B7D57"],
    [process.env.REACT_APP_URI_NULL]: ["NPointer-DB", "#8c52ff"],
    [process.env.REACT_APP_URI_STRIKES]: ["Strikes-DB", "#ff3131"]
};

const mapUri = (uri) => {
    return uriMap[uri] || ["Reino ???", "#000000"];
}
