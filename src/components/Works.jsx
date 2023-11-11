import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


// source link icons
import github from '../assets/icons/github.webp'
import appstore from '../assets/icons/appstore.png'
import colab from '../assets/icons/colab.png'
import huggingface from '../assets/icons/huggingface.png'


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    date,
    link_type
}) => {
    return (
        <motion.div>
            <div>
                <motion.div
                // variants={
                //     fadeIn('right', 'spring', 0.5 * index, 0.75)
                // }
                >
                    <Tilt options={
                        {
                            max: 45,
                            scale: 1,
                            speed: 450
                        }
                    }
                        className='bg-white shadow-[#fcd4d4] shadow-card p-5 rounded-2xl sm:w-[360px] w-full'>

                        <div className='relative w-full h-[230px]'>
                            <img src={image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl' />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div onClick={
                                    () => window.open(source_code_link, "_blank")
                                }
                                    className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                                    <img src={
                                        link_type == 'github' ? github : link_type == 'colab' ? colab : link_type == 'huggingface' ? huggingface : link_type == 'appstore' ? appstore : github
                                    }
                                        alt='github repositories for projects'
                                        className='w-1/2 h-1/2 object-contain' />
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
                                        `${name}-${tag.name
                                        }`
                                    }
                                        className={
                                            `text-[14px] ${tag.color
                                            }`
                                        }>
                                        #{
                                            tag.name
                                        } </p>
                                ))
                            } </div>
                        <p>{date}</p>
                    </Tilt>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <div>
            <motion.div
                // variants={
                //     textVariant(0)
                // } 
                >
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>
                    Projects.
                </h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>
                    My works?
                </p>
            </motion.div>

            <motion.div
                // variants={
                //     fadeIn('', '', 0.1, 1)
                // }
                className='w-full flex'>
                <p className='mt-3 text-secondary text-center text-[17px] max-w-full leading-[30px]'>
                    The projects that are listed below provide examples of my work in the real world, showcasing my abilities and experience. Each project has a brief description, links to code repositories, and live demonstrations. It exhibits my ability to work with various technologies, manage projects efficiently, and solve complex problems.
                </p>
            </motion.div>

            <div className=' mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map((project, index) => (

                        <ProjectCard key={
                            `project-${index}`
                        }
                            index={index}
                            {...project} />
                    ))
                } </div>
        </div>
    );
};

export default SectionWrapper(Works, "project");
