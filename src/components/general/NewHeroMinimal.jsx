// src/components/general/NewHeroMinimal.jsx
import { motion } from "framer-motion";

const NewHeroMinimal = () => {
    return (
        <section
            id="Home"
            className="flex flex-col justify-center items-center px-6 pt-24 space-y-2 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100"
        >
            {/* Intro */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-semibold text-center"
            >
                Hi, I am <span className="text-neutral-500">Satyam Mishra</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center">
                Some subtitle maybe (will update next time).
            </motion.h2>

        </section>
    );
};

export default NewHeroMinimal;
