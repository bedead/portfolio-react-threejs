import React from "react";
import { blogs } from "../constants";
import { styles } from "../styles";
import BlogCard from "./BlogCard";
import { SectionWrapper } from "../hoc";


function MyBlogs() {
  return (
    <div className="my-10">
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>Blogs.</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Blogs written by me
        </p>
      </div>
      <div className="my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full">
        {blogs.map((blog, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
}


export default SectionWrapper(MyBlogs, "BlogsSections");
