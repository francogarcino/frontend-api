import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultEndpoint from "./views/DefaultEndpoint";
import Bunker from "./views/Bunker";
import Enunciado from "./views/Enunciado";
import NoMatch from "./views/NoMatch";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< DefaultEndpoint />} />
                    <Route exact path="/situacion" element={< Enunciado />}/>
                    <Route exact path="/bunker" element={< Bunker />}/>
                    <Route exact path="*" element={< NoMatch />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
