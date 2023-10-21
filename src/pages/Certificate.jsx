import React from 'react'
import NavBar from '../components/NavBar'
import { Suspense } from "react";
import load from '../assets/anim-bg.gif'
import ComingSoon from '../components/ComingSoon';





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
            <div className="relative bg-primary">
                <NavBar />
            </div>
            <ComingSoon />

        </Suspense>
    )
}