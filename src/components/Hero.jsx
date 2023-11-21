import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import TextSlide from "./TextSlides";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">

            <div className={
                `${styles.paddingX
                } flex absolute z-10 inset-0 top-[120px] items-start gap-5`
            }>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#373737] " />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div >
                    <h1 className={
                        `${styles.heroHeadText
                        }`
                    }>Hi, I'm
                        <span className="text-black ">
                            Satyam</span>
                    </h1>
                    <p className={
                        `${styles.heroSubText
                        } mt-2 text-black-100`
                    }>
                        I'm a computer science student with simple and dumb mind.
                    </p>
                    <p className={
                        `${styles.sectionSubText
                        } mt-2 text-gray-600`
                    }>
                        This is just a website showcasing some of my works and experiments. Have a look untill you get bored 🥱
                    </p>
                </div>
            </div>

            <div className="relative ">
                <TextSlide x_from={0} duration={10} className='absolute top-80 z-5 text-orange-600 font-mono font-extrabold text-[90px]' >
                    GAMES
                </TextSlide>
                <TextSlide x_from={-100} duration={15} className='absolute top-[400px] text-slate-600 z-5 font-extrabold text-[70px]' >
                    WEB DEVELOPMENT
                </TextSlide>
                <TextSlide x_from={-80} duration={8} className='absolute top-20 z-5 text-blue-600 font-mono font-extrabold text-[20px]' >
                    HUMANS
                </TextSlide>
                <TextSlide x_from={-100} duration={20} className='absolute top-40 z-5 text-blue-500 font-extrabold text-[40px]' >
                    deep learning
                </TextSlide>
                <TextSlide x_from={-1600} duration={10} className='absolute top-40 text-red-600 z-5 font-mono font-semibold text-[500px]' >
                    Machine
                </TextSlide>
                <TextSlide x_from={0} duration={20} className='absolute top-10 z-5 text-yellow-600 font-mono font-semibold text-[80px]' >
                    Designing
                </TextSlide>
                <TextSlide x_from={-500} duration={12} className='absolute top-4 z-5 text-green-800 font-mono font-semibold text-[200px]' >
                    Psychology
                </TextSlide>
            </div>

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
                                    repeatType: 'loop',
                                }
                            }
                            className="w-3 h-3 rounded-full bg-secondary mb-2" />
                    </div>
                </a>
            </div>

        </section>
    )
}

export default Hero;
