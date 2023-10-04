import React from "react";

import {SectionWrapper} from "../hoc";
// import { technologies } from "../constants";
import BallCanvas from './canvas/Ball'
import texture from '../assets/texture.webp'
import {fadeIn, textVariant} from "../utils/motion";
import {styles} from "../styles";
import {motion} from "framer-motion";


const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            <motion.div variants={
                textVariant()
            }>
                <p className={
                    `${
                        styles.sectionSubText
                    } text-center`
                }>
                    What have i learnd?
                </p>
                <h2 className={
                    `${
                        styles.sectionHeadText
                    } text-center`
                }>
                    Skills & Technologies.
                </h2>
            </motion.div>
            <div className='xs:w-28 xs:h-28 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96' key='skillsIcons'>
                <BallCanvas icon={texture}/>
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");
