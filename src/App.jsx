import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Resume from "./pages/Resume";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/portfolio-react-threejs/" index element={<Home />} />
                <Route path="/portfolio-react-threejs/certificate" element={<Certificate />} />
                <Route path="/portfolio-react-threejs/resume" element={<Resume />} />

            </Routes>
        </BrowserRouter>
    )
}


export default App
