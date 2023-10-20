import React from 'react'
import NavBar from '../components/NavBar'
import { Suspense, lazy } from "react";
import load from '../assets/anim-bg.gif'




const renderLoader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={load}
                className="w-[150px] h-[117px] " />
        </div>
    )
}



export default function Certificate() {
    return (
        <Suspense fallback={
            renderLoader()
        }>
            <div className="relative z-0 bg-primary">
                <NavBar />
                
            </div>
        </Suspense>
    )
}