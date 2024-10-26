import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import BlogCard from "./BlogCard";
import { SectionWrapper } from "../hoc";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";



function MyBlogs() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "Blogs"));
      const BlogsArray = querySnapshot.docs.map(doc => doc.data()).sort((a, b) => b.index - a.index);
      setBlogs(BlogsArray);
    };

    fetchBlogs();
  }, []);

  // console.log(blogs);

  return (
    <div className="my-10">
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>Blogs.</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Blogs written by me
        </p>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
}


export default SectionWrapper(MyBlogs, "BlogsSections");
