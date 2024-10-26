// Import necessary modules and components
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

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
    <section >
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className={`${styles.sectionSubText} text-center`}>
          Introduction? Nahh
          <br></br>
          I do this 👇
        </motion.p>
      </motion.div>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

// Export the optimized About component wrapped in SectionWrapper
export default SectionWrapper(About, "AboutSection");
