import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const BlogsMinimal = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const querySnapshot = await getDocs(collection(db, "Blogs"));
            const blogsArray = querySnapshot.docs
                .map(doc => doc.data())
                .sort((a, b) => new Date(b.date) - new Date(a.date));
            setBlogs(blogsArray);
        };
        fetchBlogs();
    }, []);

    return (
        <section
            id="Blogs"
            className="flex flex-col items-center justify-center text-center bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 px-6 py-24 border-neutral-200 dark:border-neutral-800"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold leading-tight tracking-tight"
            >
                Blogs
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400"
            >
                Some stuff, hand typed by me.
            </motion.p>

            {/* Blogs List */}
            <div className="mt-16 w-full max-w-3xl space-y-8 text-left">
                {blogs.map((blog, index) => (
                    <motion.a
                        key={index}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="block group"
                    >
                        <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-yellow-500 transition-colors">
                            {blog.name}
                        </h3>
                        {blog.date && (
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                {blog.date}
                            </p>
                        )}
                        {blog.excerpt && (
                            <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm sm:text-base leading-relaxed">
                                {blog.excerpt}
                            </p>
                        )}
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default BlogsMinimal;
