import React, { useState } from 'react';
import cover_img from '../assets/resume/cover_img.png'
import resume_pdf from '../assets/resume/resume.pdf'
import { Tilt } from 'react-tilt';
import { styles } from "../styles";
import { Tooltip } from 'react-tooltip';


const ResumeComp = () => {
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

        <div className="max-w-screen-xl  mx-auto my-10 space-y-10 max">
            {/* Card Container */}

            {/* Headings Text */}
            <div  >
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>Resume.</h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>Check out my beginner resume🤣</p>
            </div>

            {/* Cover and Button */}
            <div className="md:flex justify-center items-center">
                {/* Frontpage Image */}
                <Tilt options={
                    {
                        max: 45,
                        scale: 1,
                        speed: 450
                    }
                }

                    className='group bg-white shadow-[#fcd4d4] shadow-card rounded-2xl mx-auto w-[90%] md:min-w-1/3 md:max-w-3xl h-full'>

                    <div className='group-hover:opacity-100 relative w-full h-full mb-5'
                    // data-tooltip-id="resume_cover_tooltip"
                    // data-tooltip-content="Hover the right side of card more options.."
                    // data-tooltip-delay-hide={500}
                    >
                        <img src={cover_img}
                            loading="lazy"
                            alt='Resume cover image'
                            className='w-full h-full object-cover rounded-2xl' />
                    </div>

                    {/* Buttons Container */}
                    <div className="group-hover:opacity-100 flex items-center space-x-5 md:space-y-5 justify-center md:absolute md:top-10 md:-right-10 md:bottom-0 md:flex md:flex-col md:items-center md:justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="bg-blue-600 text-white hover:text-white-100 hover:bg-blue-800 py-2 px-3 rounded-xl text-[15px] font-medium cursor-pointer mb-2 md:mb-0"
                            onClick={handleDownload}
                        >
                            Download
                        </button>
                        <button
                            className="bg-green-600 text-white hover:text-white-100 hover:bg-green-800 py-2 px-3 rounded-xl text-[15px] font-medium cursor-pointer mb-2 md:mb-0"
                            onClick={openDialog}
                        >
                            View
                        </button>
                    </div>
                </Tilt>

            </div>

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
        </div>
    );
};

export default ResumeComp;
