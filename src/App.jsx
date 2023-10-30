import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";


import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";


function App() {
    return (
        <BrowserRouter basename="/portfolio-react-threejs">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App
