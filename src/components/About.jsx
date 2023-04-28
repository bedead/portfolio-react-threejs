import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full " >
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-[#fcd4d4] shadow-card "
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-black text-[20px] font-bold text-center ">{title} </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
            >
                I offer website development, design, and mobile development services to help you take your online presence to new heights. With a keen eye for quality and detail, I specialize in creating stunning, user-friendly websites, crafting captivating designs to showcase your brand, and developing high-performing mobile apps that meet real-world needs. Whatever your project, let me help you make it stand out and achieve your goals.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title}
                        index={index}  {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about');