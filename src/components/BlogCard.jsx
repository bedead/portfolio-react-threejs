import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";



const BlogCard = ({ index, name, date, image, link }) => {

  return (
    <div id={index}>
      <motion.div variants={fadeIn('right', 'spring', 0, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white shadow-[#fcd4d4] shadow-card p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <a href={link} target="_blank">
            <div className="relative w-full ">
              <img
                src={image}
                placeholder={name}
                loading="lazy"
                alt={`${name} cover image`}
                className="w-full h-52 object-cover rounded-2xl"
              />
            </div>
            <p className="mt-3 text-left">{date}</p>
            <h3 className="text-black font-bold text-[24px] text-left">
              {name}
            </h3>
          </a>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default BlogCard;
