import { SectionWrapper } from "../../hoc";
import BallCanvas from '../canvas/Ball'
import texture from '../../assets/general/texture.webp'
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { motion } from "framer-motion";


const TechSkills = () => {
    return (
        <section className='xl:mt-6 flex flex-row flex-wrap justify-center items-center gap-10'>
            <motion.div
                variants={
                    textVariant()
                }>
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>
                    Skills & Technologies.
                </h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>
                    What have i learnd?
                </p>

            </motion.div>
            <div className='w-full lg:w-[400px] lg:h-[400px] ' key='skillsBall'>
                <BallCanvas icon={texture} />
            </div>
        </section>
    );
};

export default SectionWrapper(TechSkills, "TechSkillsSection");
