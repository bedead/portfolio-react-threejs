import { motion } from "framer-motion";

const TextSlide = ({ x_from, duration, children, className }) => {


    const x_to = window.innerWidth + 50;
    const variants = {
        visible: {
            x: x_to,
            transition: {
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop'
            }
        }
    };

    return (
        <motion.div
            initial={{ x: x_from }}
            animate="visible"
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default TextSlide;