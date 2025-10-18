import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../../styles";

const ContactMinimal = () => {

    return (
        <section
            id="Contacts"
            className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 px-6 py-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
            >
                {/* <p className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">I am open to work</p> */}
                <h2 className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-2xl">Get In Touch.</h2>
                {/** contact links */}
                <div className="mt-12 text-gray-400 text-sm space-y-2">
                    <p>Stock me on:</p>
                    <div className="flex justify-center gap-6 mt-1">
                        {[
                            { name: "Instagram", link: "https://www.instagram.com/satyammishra9050/" },
                            { name: "X / Twitter", link: "https://x.com/bedeadmishra" },
                            { name: "GitHub", link: "https://github.com/bedead" },
                            { name: "LinkedIn", link: "https://www.linkedin.com/in/theaiguysatyam/" },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                    <p>
                        Prefer email?{" "}
                        <a
                            href="mailto:satyam.work.only@gmail.com"
                            className="underline hover:text-white"
                        >
                            Click here to mail
                        </a>
                        .
                    </p>
                </div>

                <p className="mt-12 text-xs text-gray-500">
                    &copy; 2025 Bedead. Website made with 💖 and AI.
                </p>
            </motion.div>
        </section>
    );
};

export default ContactMinimal;
