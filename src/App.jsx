import { Routes, Route, BrowserRouter } from "react-router-dom";
import load from './assets/loader/anim-bg.gif'

import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import FreeTools from "./pages/FreeTools";
import NoPageFound from "./pages/NoPageFound";
import { Suspense } from "react";

const renderLoader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={load}
                className="w-[150px] h-[117px] " />
        </div>
    )
}

function App() {
    return (
        <Suspense fallback={
            renderLoader()
        }>
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
        </Suspense>
    )
}


export default App
