import axios from "axios";
import {useEffect, useState} from "react";

export default function Bunker() {
    let uris = [process.env.REACT_APP_URI_PANCHO || "",
        process.env.REACT_APP_URI_ACIDC || "",
        process.env.REACT_APP_URI_JYQ || "",
        process.env.REACT_APP_URI_BASE || "",
        process.env.REACT_APP_URI_TECH || "",
        process.env.REACT_APP_URI_TEST || "",
        process.env.REACT_APP_URI_MARIA || "",
        process.env.REACT_APP_URI_ESTRA || ""
    ]

    const [docs, setDocs] = useState([{serial_name:"Mechamaru"}]);

    useEffect(() => {
        for (let uri of uris) {
            if (uri) {
                axios.get(`${uri}/androides`).then((response) => {
                    setDocs([...docs, ...response.data])
                })
            } else { console.log("jeje") }
        }
    }, [uris])

    return (
        <div>
            {docs.map((doc, index) => (
                <div key={index}>
                    {doc.serial_name}
                </div>
            ))}
        </div>
    );
}
