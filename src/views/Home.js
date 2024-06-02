import {useEffect, useState} from "react";
import api from "../api/api";

export default function Home() {
    const [text, setText] = useState('');
    useEffect(() => {
        api.def().then((response) => {
            setText(response.data)
        })
    }, []);

    return (
        <div>
            {text}
        </div>
    )
}