import React from "react";
import {motion} from "framer-motion";
import {styles} from "../styles";
import github from '../assets/github.webp'
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant, zoomIn} from "../utils/motion";
import {Tilt} from "react-tilt";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    date
}) => {
    return (
        <motion.div>
            <div>
                <Tilt options={
                        {
                            max: 45,
                            scale: 1,
                            speed: 450
                        }
                    }
                    className='bg-white shadow-[#fcd4d4] shadow-card p-5 rounded-2xl sm:w-[360px] w-full'>
                    <motion.div variants={
                        fadeIn('right', 'spring', 0.5 * index, 0.75)
                    }>
                        <div className='relative w-full h-[230px]'>
                            <img src={image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl'/>

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div onClick={
                                        () => window.open(source_code_link, "_blank")
                                    }
                                    className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                                    <img src={github}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'/>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-black font-bold text-[24px]'>
                                {name}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>
                                {description}</p>
                        </div>

                        <div className='mt-4 flex flex-wrap gap-2'>
                            {
                            tags.map((tag) => (
                                <p key={
                                        `${name}-${
                                            tag.name
                                        }`
                                    }
                                    className={
                                        `text-[14px] ${
                                            tag.color
                                        }`
                                }>
                                    #{
                                    tag.name
                                } </p>
                            ))
                        } </div>
                        <p>{date}</p>
                    </motion.div>
                </Tilt>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <div id="project">
            <motion.div variants={
                textVariant(0)
            }>
                <p className={
                    `${
                        styles.sectionSubText
                    } `
                }>My work</p>
                <h2 className={
                    `${
                        styles.sectionHeadText
                    }`
                }>Projects.</h2>
            </motion.div>

            <motion.div variants={
                    fadeIn('', '', 0.1, 1)
                }
                className='w-full flex'>
                <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    The projects that are listed below provide examples of my work in the real world, showcasing my abilities and experience. Each project has a brief description, links to code repositories, and live demonstrations. It exhibits my ability to work with various technologies, manage projects efficiently, and solve complex problems.
                </p>
            </motion.div>

            <div className=' mt-20 flex flex-wrap gap-5'>
                {
                projects.map((project, index) => (

                    <ProjectCard key={
                            `project-${index}`
                        }
                        index={index}
                        {...project}/>
                ))
            } </div>
        </div>
    );
};

export default SectionWrapper(Works, "");
