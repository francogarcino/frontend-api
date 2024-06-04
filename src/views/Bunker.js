import {useEffect, useState} from "react";
import api from "../api/api";
import size from "../utils/window-size";
import {useNavigate} from "react-router-dom";

export default function Bunker() {
    size()

    const navigate = useNavigate();
    const goHome = () => { navigate("/") }

    let uris = [
        process.env.REACT_APP_URI_PANCHO || "",
        process.env.REACT_APP_URI_ACIDC || "",
        process.env.REACT_APP_URI_JYQ || "",
        process.env.REACT_APP_URI_BASE || "",
        process.env.REACT_APP_URI_TECH || "",
        process.env.REACT_APP_URI_TEST || "",
        process.env.REACT_APP_URI_MARIA || "",
        process.env.REACT_APP_URI_ESTRA || ""
    ]

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        for (let uri of uris) {
            if (uri) {
                api.androids(uri).then((response) => {
                    setDocs([...docs, ...response.data])
                }).catch(e => console.log(`El terminal ${uri} no responde...`));
            }
        }
    }, [])

    return (
        <div className="page">
            <div className="elems-in-row margined underlined">
                <div className="text title"> 🧠 Conciencias r[e]gistradas</div>
                <button className="back-btn text" onClick={goHome}> Volver al inicio</button>
            </div>
            <div className="margined droids-container">
                {docs.map((doc, index) => (
                    <div key={index} className="item">
                        <p className="text"> {doc.serial_name} </p>
                        <p className="text"> {doc.request_timestamp} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
