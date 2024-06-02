import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Bunker from "./views/Bunker";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={< Home />}/>
                    <Route exact path="*" element={< Bunker />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
