import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "black", color: "black" }}
      contentArrowStyle={{ borderRight: "7px solid black" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[75%] h-[75%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#fcd4d4] text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-white text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const querySnapshot = await getDocs(collection(db, "Experience"));
      const experiencesArray = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => b.index - a.index);
      setExperiences(experiencesArray);
    };

    fetchExperiences();
  }, []);

  return (
    <section>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
        <p className={`${styles.sectionSubText} text-center`}>Where I have worked so far?</p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#373737">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "ExperienceSection");
