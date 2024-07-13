import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Contact = () => {
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
    <section id="ContactSection" className={`sm:px-16 sm:py-12 xl:mt-6  bg-white px-8 py-12 m-auto space-y-8`}>
      <div className="flex-row md:flex">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='bg-[#fff2f2] shadow-lg p-12 flex-[0.75] md:max-w-[50%] rounded-2xl'>
          <p className={styles.sectionSubText}>I am open to work</p>
          <h3 className={styles.sectionHeadText}>Get In Touch.</h3>

          {success ? (
            <div>
              <p className='text-green-500 mt-2'>Thank you. I have recieved your msg.</p>
              <p className='text-green-500'>I will get back to you right on.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-1'>
              <label className='flex flex-col'>
                <span className='text-black font-medium mb-1'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-secondary py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
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
                  className='bg-secondary py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-black font-medium mb-1'>Your Message</span>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  className='bg-secondary py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button type='submit' aria-busy={loading} className='bg-black hover:bg-slate-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </motion.div>
        <div className="text-center m-auto justify-between space-y-20">
          <div id="ToolsMade">
            <h2 className={`${styles.sectionSubText} font-bold text-center mb-2`}>Open source tools made by me 👇</h2>
            <a href="" className={` text-center`}>DownloadTube</a>
          </div>
          {/* <div id="ToolsMade">
          <h2 className={`${styles.sectionSubText} font-bold text-center mb-2`}>Open source tools made by me 👇</h2>
          <a className={` text-center`}>DownloadTube</a>
        </div> */}
          <div id="Socials">
            <h2 className={`${styles.sectionSubText} font-bold text-center mb-2`}>My Socials 👇</h2>
            <div className="">
              <a href="https://www.linkedin.com/in/theaiguysatyam/" className={` text-center`}>Linkedin</a>
              <br />
              <a href="https://github.com/bedead" className={` text-center`}>Github</a>
              <br />
              {/* <a className={` text-center`}>Instagram</a>
            <br />
            <a className={` text-center`}>LinkTree</a>
            <br />
            <a className={` text-center`}>Gumroad</a> */}
            </div>
          </div>
        </div>
      </div>
      <h2 >Made with code and hands © 2024 Satyam Mishra</h2>
    </section>
  );
};

export default Contact;
