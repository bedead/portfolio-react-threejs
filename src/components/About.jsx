// Import necessary modules and components
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// ServiceCard component with destructuring props
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-[#fcd4d4] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-black text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About component with optimizations
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Introduction?
        </p>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-center text-[17px] max-w-full leading-[30px]">
        I am a full stack web developer, graphic designer, and machine learning enthusiast. I have experience in creating dynamic and responsive websites using HTML, CSS, JavaScript, and other frameworks. I also have a passion for designing graphics that are eye-catching and appealing. I am always eager to learn new skills and technologies in the field of machine learning and deep learning. I have completed several projects and courses on various topics such as computer vision, and natural language processing.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Export the optimized About component wrapped in SectionWrapper
export default SectionWrapper(About, "about");
