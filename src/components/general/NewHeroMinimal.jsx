// src/components/general/NewHeroMinimal.jsx
import { motion } from "framer-motion";

const NewHeroMinimal = () => {
    return (
        <section
            id="hero"
            className="flex flex-col justify-center items-center px-6 py-24 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100"
        >
            {/* Intro */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl font-semibold text-center leading-tight"
            >
                Hi, I'm <span className="text-neutral-500">Satyam Mishra</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-5 max-w-2xl text-center text-lg sm:text-xl text-neutral-600 dark:text-neutral-400"
            >
                Just a simple guy, trying out different stuff.
            </motion.p>

            {/* "What I do" mini section */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-10 text-center space-y-3"
            >
                <h2 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200">
                    What I do
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                    I build tools, write about ideas, and experiment with technology that bridges simplicity and intelligence.
                </p>
            </motion.div> */}

            {/* CTA buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
                <motion.a
                    href="https://medium.com/@Satyam_Mishra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md text-base hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                    Read my Blogs →
                </motion.a>

                <motion.a
                    href="https://github.com/bedead"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-md text-base transition-all hover:opacity-90"
                >
                    View my Github →
                </motion.a>
            </div>

            {/* Divider */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-20 h-[1px] bg-neutral-300 dark:bg-neutral-700"
            />

            {/* Scroll Indicator */}
            <motion.div
                className="mt-8 flex justify-center"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
            >
                <a href="#experience">
                    <div className="w-[22px] h-[36px] border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center items-start p-1">
                        <div className="w-2 h-2 bg-neutral-600 dark:bg-neutral-300 rounded-full" />
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default NewHeroMinimal;
