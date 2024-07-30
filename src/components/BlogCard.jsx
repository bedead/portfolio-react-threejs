import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const BlogCard = ({ index, name, img, link }) => {
  return (
    <div>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white shadow-[#fcd4d4] shadow-card p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={img}
              placeholder={name}
              loading="lazy"
              alt="blog feature image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <h3 className="mt-5 text-black font-bold text-[24px] text-center">
            {name}
          </h3>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default BlogCard;
