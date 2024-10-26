import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";

const NewContact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.init("Tlnn1O7PC8WlYPRT7");

        emailjs
            .send("service_w2nrv74", "template_hmf109b", {
                from_name: form.name,
                to_name: "Satyam Mishra",
                from_email: form.email,
                to_email: "satyammishra9050@gmail.com",
                message: form.message,
            })
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <footer id="ContactSection" className="lg:grid lg:grid-cols-5 bg-black h-fit ">
            {/* Form */}
            <div className="relative p-12 block h-32 lg:col-span-2 lg:h-full">
                <p className={`${styles.sectionSubText} text-white`}>I am open to work</p>
                <h3 className={`${styles.sectionHeadText} text-primary`}>Get In Touch.</h3>

                {success ? (
                    <div>
                        <p className='text-green-500 mt-2'>Thank you. I have recieved your msg.</p>
                        <p className='text-green-500'>I will get back to you right on.</p>
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-1'>
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-1'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className='bg-blue-50 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-1'>Your Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className='bg-blue-50 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-1'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's your message?"
                                className='bg-blue-50 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>

                        <button type='submit' aria-busy={loading} className='mt-6 bg-secondary hover:bg-slate-600 py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold'>
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                )}
            </div>

            {/* Links */}
            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-200"> Mail me </span>

                            <a href="mailto:satyam.work.only@gmail.com?subject=Just%20wondaring&body=Nothing%20much." className="animate-pulse block text-2xl font-medium text-gray-400 hover:opacity-75 sm:text-3xl">
                                Click here to mail.
                            </a>
                        </p>

                        {/* social media */}
                        <ul className="text-gray-200 mt-8 flex gap-6">
                            <li>
                                <a
                                    href="https://www.instagram.com/satyammishra9050/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://x.com/bedeadmishra"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/bedead"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">GitHub</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/theaiguysatyam/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Linkedin</span>

                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M 5.75 3 C 4.2400226 3 3 4.2400226 3 5.75 L 3 18.25 C 3 19.759977 4.2400226 21 5.75 21 L 18.25 21 C 19.759977 21 21 19.759977 21 18.25 L 21 5.75 C 21 4.2400226 19.759977 3 18.25 3 L 5.75 3 z M 5.75 4.5 L 18.25 4.5 C 18.950023 4.5 19.5 5.0499774 19.5 5.75 L 19.5 18.25 C 19.5 18.950023 18.950023 19.5 18.25 19.5 L 5.75 19.5 C 5.0499774 19.5 4.5 18.950023 4.5 18.25 L 4.5 5.75 C 4.5 5.0499774 5.0499774 4.5 5.75 4.5 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="text-gray-400 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* Top projects */}
                        <div>
                            <p className="font-medium text-gray-200">Top Projects</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="https://github.com/bedead/lung-cancer-classification-yoloV8---gradio" className="transition hover:opacity-75"> PATENT - CLASSIFICATION OF LUNG CANCER USING DEEP LEARNING TECHNIQUES. </a>
                                </li>
                                <li>
                                    <a href="https://colab.research.google.com/drive/1a6LATySYKaS8qqfk_4maSaV4guvTRA-8?usp=sharing" className="transition hover:opacity-75"> ConvoGen AI </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bedead/Anon-Exchange-chatting" className="transition hover:opacity-75"> Anon Exchange </a>
                                </li>

                            </ul>
                        </div>

                        {/* Free tools */}
                        <div>
                            <p className="font-medium text-gray-200">Free tools</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="https://downloadtube-iota.vercel.app/" target="_blank" className="transition hover:opacity-75"> DownloadTube </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* disclamier */}
                <div className="mt-12 border-t text-gray-300 border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        {/* <ul className="flex flex-wrap gap-4 text-sm">
                            <li>
                                <a href="#" className="transition hover:opacity-75"> Terms & Conditions </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:opacity-75"> Privacy Policy </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:opacity-75"> Cookies </a>
                            </li>
                        </ul> */}

                        <p className="mt-8 text-sm sm:mt-0">
                            &copy; 2024. Bedead. Made with 💖.
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default NewContact;
