import React from "react";
import {styles} from "../styles";
import {motion} from "framer-motion";
// import waves from '../assets/waves.png'
// import {FallingBalls} from "./canvas";
// import CanvasLoader from "./Loader";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">

            <div className={
                `${
                    styles.paddingX
                } flex absolute z-10 inset-0 top-[120px] items-start gap-5`
            }>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#373737] "/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>
                <div>
                    <h1 className={
                        `${
                            styles.heroHeadText
                        }`
                    }>Hi, I'm
                        <span className="text-black ">
                            Satyam</span>
                    </h1>
                    <p className={
                        `${
                            styles.heroSubText
                        } mt-2 text-black-100`
                    }>
                        I'm a computer science student with simple amd dumb mind.
                    </p>
                    <p className={
                        `${
                            styles.sectionSubText
                        } mt-2 text-gray-600`
                    }>
                        This is just a website showcasing some of my works and experiments. Have a look untill you get bored 🥱
                    </p>
                </div>
            </div>

            {/* 3d graphics */}
            {/* <FallingBalls/> scroll down button */}
            {/* <img src={waves}
                className="absolute z-12 top-24"/> */}
            <div className="absolute z-10 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#373737] flex justify-center items-start p-2 ">
                        <motion.div animate={
                                {
                                    y: [0, 24, 0]
                                }
                            }
                            transition={
                                {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }
                            }
                            className="w-3 h-3 rounded-full bg-secondary mb-2"/>
                    </div>
                </a>
            </div>

        </section>
    )
}

export default Hero;
