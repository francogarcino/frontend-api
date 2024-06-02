import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./resources/Home";
import EnvTest from "./resources/EnvTest";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={< Home />}/>
                    <Route exact path="*" element={< EnvTest />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
