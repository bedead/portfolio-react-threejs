import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";


export default function ComingSoon() {
    return (
        <motion.div variants={
            textVariant(0)
        } className='h-screen '>
            <h1 className={
                `${styles.sectionHeadText
                } text-center`
            }>
                Coming soon
            </h1>
            <p className={
                `${styles.heroSubText
                } mt-2 text-black-100 text-center`
            }>
                More things are on the way ✌️.
            </p>
        </motion.div>
    )
}
