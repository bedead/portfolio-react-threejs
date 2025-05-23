import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant, } from "../../utils/motion";
import { Tilt } from "react-tilt";


// source link icons
import github from '../../assets/icons/github.webp'
import appstore from '../../assets/icons/appstore.png'
import colab from '../../assets/icons/colab.png'
import huggingface from '../../assets/icons/huggingface.png'
import live from '../../assets/icons/website.gif'
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";



const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    date,
}) => {
    return (
        <Tilt className='sm:w-[360px] w-full'>
            <motion.div
                id={index}
                variants={
                    fadeIn('right', 'spring', 0, 0.75)
                }
                className="shadow-[#fcd4d4] green-pink-gradient shadow-card p-[1px] rounded-2xl "
            >
                <div className="bg-primary rounded-2xl py-5 px-8" options={
                    {
                        max: 45,
                        scale: 1,
                        speed: 450
                    }
                } >


                    <div className='relative w-full h-[230px]'>
                        <img src={image}
                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl' />

                        <div className='absolute inset-0 z-10 space-y-3 flex-col justify-end m-3 card-img_hover'>
                            {Object.entries(source_code_link).map(([key, link]) => (
                                <div
                                    key={key}
                                    onClick={() => window.open(link, "_blank")}
                                    className='border-black border-2 white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                    title={key === 'Github' ? 'View in GitHub' :
                                        key === 'Appstore' ? 'View in App Store' :
                                            key === 'Colab' ? 'View in Google Colab' :
                                                key === 'Huggingface' ? 'View in Hugging Face' :
                                                    key === 'Live' ? 'View Live Website' :
                                                        'View Now'} // Default tooltip if none of the keys match
                                >
                                    <img
                                        src={
                                            key === 'Github' ? github :
                                                key === 'Appstore' ? appstore :
                                                    key === 'Colab' ? colab :
                                                        key === 'Huggingface' ? huggingface :
                                                            key === 'Live' ? live :
                                                                live // Default case if none of the keys match
                                        }
                                        alt={`${key} link`}
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            ))}
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
                            Object.entries(tags).map(([key, value]) => (
                                <p key={
                                    `${name}-${key
                                    }`
                                }
                                    className={
                                        `text-[14px] ${value
                                        }`
                                    }>
                                    #{
                                        key
                                    } </p>
                            ))
                        } </div>
                    <p>{date}</p>

                </div>
            </motion.div >
        </Tilt >
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "Projects"));
            const projectsArray = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => b.index - a.index);
            setProjects(projectsArray);
        };

        fetchProjects();
    }, []);

    // console.log(projects);

    return (
        <section className="-m-5 md:-m-10 ">
            <motion.div
                variants={textVariant(0)} >
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
                    Here they are.
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
        </section>
    );
};

export default SectionWrapper(Projects, "ProjectsSection");
