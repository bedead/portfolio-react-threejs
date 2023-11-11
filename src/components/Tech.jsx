import React from "react";

import { SectionWrapper } from "../hoc";
import BallCanvas from './canvas/Ball'
import texture from '../assets/general/texture.webp'
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";


const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            <motion.div 
            variants={
                textVariant()
            }>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>
                    What have i learnd?
                </p>
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>
                    Skills & Technologies.
                </h2>
            </motion.div>
            <div className='lg:w-[500px] lg:h-[500px]' key='skillsBall'>
                <BallCanvas icon={texture} />
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");
