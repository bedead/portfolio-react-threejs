import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const ExperienceMinimal = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            const querySnapshot = await getDocs(collection(db, "Experience"));
            const experiencesArray = querySnapshot.docs
                .map(doc => doc.data())
                .sort((a, b) => b.index - a.index);
            setExperiences(experiencesArray);
        };
        fetchExperiences();
    }, []);

    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center text-center bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 px-6 py-24 border-t border-neutral-200 dark:border-neutral-800"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight"
            >
                Experience
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-lg"
            >
                Some of the roles and work I’ve done along the way.
            </motion.p>

            {/* Experience List */}
            <div className="mt-16 w-full max-w-4xl text-left space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 border-b border-neutral-200 dark:border-neutral-800 pb-6"
                    >
                        {/* Left side */}
                        <div>
                            <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                                {exp.title}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 mt-1 text-sm">
                                {exp.company_name}
                            </p>
                            {exp.points && exp.points.length > 0 && (
                                <ul className="mt-3 list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-sm leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Right side */}
                        <div className="sm:text-right flex sm:flex-col sm:items-end sm:justify-start justify-between items-center">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                {exp.date}
                            </p>
                            {exp.icon && (
                                <img
                                    src={exp.icon}
                                    alt={exp.company_name}
                                    className="w-10 h-10 mt-2 sm:mt-3 rounded-md opacity-80"
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceMinimal;
