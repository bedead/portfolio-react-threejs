import React, { useState } from 'react';
import cover_img from '../../assets/resume/cover_img.webp'
import resume_pdf from '../../assets/resume/resume.pdf'
import { Tilt } from 'react-tilt';
import { styles } from "../../styles";
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';


const Resume = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const handleDownload = () => {
        // dummy anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = resume_pdf;
        anchor.download = 'Satyam_Mishra_Resume';
        anchor.click();
    };

    return (

        <section className="-m-5 md:-m-10 max-w-screen-xl  mx-auto my-10 space-y-10 max">
            {/* Card Container */}

            {/* Headings Text */}
            <motion.div variants={textVariant(0)} >
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>Resume.</h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>Here's my Resume😁</p>
            </motion.div>

            {/* Cover and Button */}
            <motion.div variants={
                fadeIn('right', 'spring', 0.5 * 0, 0.75)
            } className="md:flex justify-center items-center">
                {/* Frontpage Image */}
                <Tilt options={
                    {
                        max: 45,
                        scale: 1,
                        speed: 450
                    }
                }

                    className='group bg-white shadow-[#fcd4d4] shadow-card rounded-2xl mx-auto w-[90%] md:min-w-1/3 md:max-w-3xl h-full'>

                    <div className='group-hover:opacity-100 relative w-full h-full mb-5'>
                        <img src={cover_img}
                            loading="lazy"
                            alt='Resume cover image'
                            className='w-full h-full object-cover rounded-2xl' />
                    </div>

                    {/* Buttons Container */}
                    <div className="text-primary flex items-center space-x-5 md:space-y-5 justify-center absolute z-10 md:top-10 md:-right-24 md:bottom-0 md:flex-col md:items-center md:justify-center transition-opacity duration-300">
                        <button
                            onClick={handleDownload}
                            className="mt-8 bg-blue-500 hover:bg-blue-300 font-bold py-3 px-6 rounded-full flex items-center">
                            Download <span className="ml-2">▶</span>
                        </button>
                        <button
                            onClick={openDialog}
                            className="mt-8 bg-green-500 hover:bg-green-300 font-bold py-3 px-6 rounded-full flex items-center">
                            View <span className="ml-2">▶</span>
                        </button>
                    </div>
                </Tilt>

            </motion.div>

            {/* Tooltip */}
            {/* <Tooltip id='resume_cover_tooltip' /> */}

            {/* PDF Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 overflow-auto -top-10 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white p-2 rounded-2xl max-w-screen-lg w-[70%] relative">
                        {/* Close Button */}
                        <button
                            className="absolute -top-12 right-0 md:top-2 md:-right-20 bg-black hover:bg-gray-800 py-2 px-3 rounded-xl text-white hover:text-gray-200"
                            onClick={closeDialog}
                        >
                            Close
                        </button>

                        {/* PDF Viewer (Replace the iframe source with your PDF file) */}
                        <iframe
                            title="PDF Viewer"
                            src={resume_pdf}
                            className="w-full h-[400px]"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SectionWrapper(Resume, 'ResumeSection');
