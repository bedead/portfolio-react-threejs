// src/components/HeroSection.js
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";

const NewHero = () => {
    return (
        <div id='HeroSection' className="relative bg-black text-white h-fit flex flex-col rounded-b-[356px]">

            {/* Main Content */}
            <div className="flex-grow flex flex-col justify-center items-center text-center px-6 py-32">
                <h1 className="text-6xl font-bold">
                    Hello, I am Satyam <br /> Mishra
                </h1>
                <p className="mt-6 max-w-md text-gray-400">
                    I'm a computer science student with a simple and curious mind.
                </p>
                <a href='https://medium.com/@Satyam_Mishra/' target='_blank'>
                    <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full flex items-center">
                        Read my blogs <span className="ml-2">▶</span>
                    </button>
                </a>

            </div>

            {/* Cards Section */}
            {/* <div className="absolute left-20 bottom-10 flex flex-col items-start space-y-6">
                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg transform rotate-12 shadow-lg">
                    <p className="text-lg font-bold text-white">Welcome to the Sequence</p>
                    <p className="mt-2 text-gray-200">Learn More -></p>
                </div>
                <div className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 p-8 rounded-lg transform rotate-6 shadow-lg">
                    <p className="text-lg font-bold text-white">Feature</p>
                    <p className="mt-2 text-gray-200">Learn More -></p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 rounded-lg transform rotate-3 shadow-lg">
                    <p className="text-lg font-bold text-white">Welcome to the Sequence</p>
                    <p className="mt-2 text-gray-200">Learn More -></p>
                </div>
            </div> */}

            {/* User Info Section */}
            {/* <div className="absolute right-10 bottom-10 flex items-center space-x-3">
                <div className="flex -space-x-2">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 1" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 2" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 3" />
                </div>
                <div className="text-lg font-bold text-white">
                    12M <span className="text-sm text-green-400">World active user</span>
                </div>
            </div> */}

            <div className=" absolute z-10 xs:bottom-8 bottom-8 w-full flex justify-center items-center">
                <a href="#AboutSection">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-primary mb-2"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default NewHero;
