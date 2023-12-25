import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import FreeTools from "./pages/FreeTools";
import NoPageFound from "./pages/NoPageFound";


function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL} >
            <Routes>
                <Route index element={<Home />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/freetools" element={<FreeTools />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App
