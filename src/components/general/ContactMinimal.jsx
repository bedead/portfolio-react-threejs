import { motion } from "framer-motion";

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
                <h2 className="mt-4 max-w-2xl font-semibold text-3xl">Get In Touch.</h2>
                {/** contact links */}
                <div className="mt-12 text-gray-400 space-y-6">
                    <div>
                        <p className="text-md">Stock me at:</p>
                        <div className="flex text-sm justify-center gap-6 mt-1">
                            {[
                                { name: "Instagram", link: "https://www.instagram.com/satyammishra9050/", subtext: "not really active" },
                                { name: "X / Twitter", link: "https://x.com/bedeadmishra", subtext: "some times active" },
                                { name: "LinkedIn", link: "https://www.linkedin.com/in/theaiguysatyam/", subtext: "some times active" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-tertiary transition-colors"
                                >
                                    {social.name}
                                    <p>({social.subtext})</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div id="KnowMore">
                        <p className="text-md">Know more about me from:</p>
                        <div className="flex text-sm justify-center gap-6 mt-1">
                            {[
                                { name: "GitHub", link: "https://github.com/bedead", subtext: "full stack, etc." },
                                { name: "Hugging Face", link: "https://huggingface.co/bedead", subtext: "AI, applications, etc." },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-tertiary transition-colors"
                                >
                                    {social.name}
                                    <p>for ({social.subtext})</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <p className="pt-2">
                        Prefer email?{" "}
                        <a
                            href="mailto:satyam.work.only@gmail.com"
                            className="underline hover:text-tertiary"
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
