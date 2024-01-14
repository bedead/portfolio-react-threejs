import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
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
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden md:w-[80%] lg:w-[70%] `}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-white p-8 shadow-[#fcd4d4] shadow-card rounded-2xl'>
        <p className={styles.sectionSubText}>I am open to work</p>
        <h3 className={styles.sectionHeadText}>Get In Touch.</h3>

        {success ? (
          <p className='text-green-500 mt-2 text-center'>Thank you. I will get back to you as soon as possible.</p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-secondary py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            {/* Add similar labels for email and message fields */}

            <button type='submit' aria-busy={loading} className='bg-black hover:bg-slate-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </motion.div>
      {/* ... */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
