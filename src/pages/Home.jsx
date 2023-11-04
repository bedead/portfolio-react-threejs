import { Suspense } from "react";
import load from '../assets/loader/anim-bg.gif'

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import Works from "../components/Works";
import Contact from "../components/Contact";


const renderLoader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={load}
                className="w-[150px] h-[117px] " />
        </div>
    )
}



export default function Home() {
    return (
        <Suspense fallback={
            renderLoader()
        }>
            <div className=" z-0 bg-white">
                <NavBar />
                <div className="bg-gradient-to-b from-white to-primary">
                    <Hero />
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                </div>
            </div>
        </Suspense>
    )
}