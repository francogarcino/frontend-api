import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultEndpoint from "./views/DefaultEndpoint";
import Bunker from "./views/Bunker";
import Enunciado from "./views/Enunciado";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Enunciado />} />
                    <Route exact path="/bunker" element={< Bunker />}/>
                    <Route exact path="*" element={< DefaultEndpoint />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
