import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./resources/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={< Home />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
