import {useEffect, useState} from "react";
import api from "../api/api";
import "../styles/styles.scss"
import size from "../utils/functions";

export default function Bunker() {
    size()

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
        <div className="page" >
            <div className="text title underlined" > 🧠 Conciencias registradas </div>
            <div className="left-space droids-container">
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
