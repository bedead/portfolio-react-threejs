import React from 'react'
import NavBar from '../components/NavBar'
import { Suspense, lazy } from "react";
import load from '../assets/loader/anim-bg.gif'
import ComingSoon from '../components/ComingSoon';
import BlogLists from '../components/BlogLists';




const renderLoader = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={load}
                className="w-[150px] h-[117px] " />
        </div>
    )
}



export default function Blogs() {
    return (
        <Suspense fallback={
            renderLoader()
        }>
            <div className='bg-white'>
                <NavBar />
                <div className='relative pb-10 top-[120px] lg:top-[100px] bg-gradient-to-b from-white to-primary'>
                    <ComingSoon />
                    {/* <BlogLists /> */}
                </div>
            </div>
        </Suspense>
    )
}