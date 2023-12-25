import React from 'react'
import NavBar from '../components/NavBar'
import Works from '../components/Works';






export default function Projects() {
    return (
        <div className='bg-white'>
            <NavBar />
            <div className='relative pb-10 top-[120px] lg:top-[100px] bg-gradient-to-b from-white to-primary'>
                <Works />
            </div>

        </div>
    )
}