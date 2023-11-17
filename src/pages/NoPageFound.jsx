import React from 'react'
import NavBar from '../components/NavBar'
import { Suspense } from "react";
import load from '../assets/loader/anim-bg.gif'
import { styles } from "../styles";



const renderLoader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={load}
                className="w-[150px] h-[117px] " />
        </div>
    )
}



export default function NoPageFound() {
    return (
        <Suspense fallback={
            renderLoader()
        }>
            <div className='bg-white'>
                <NavBar />
                <div className='relative pb-10 top-[120px] lg:top-[100px] bg-gradient-to-b from-white to-primary'>
                    <div className='h-screen '>
                        <h1 className={
                            `${styles.sectionHeadText
                            } text-center`
                        }>
                            No Page Found
                        </h1>
                        <p className={
                            `${styles.heroSubText
                            } mt-2 text-black-100 text-center`
                        }>
                            Try after something, it might showup 😊.
                        </p>
                    </div>
                </div>
            </div>
        </Suspense >
    )
}