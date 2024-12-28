// src/AddBlog.js

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [index, setIndex] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsCollection = collection(db, 'Blogs');
                const blogSnapshot = await getDocs(blogsCollection);
                const blogList = blogSnapshot.docs.map(doc => doc.data());
                const maxIndex = blogList.reduce((max, blog) => (blog.index > max ? blog.index : max), 0);
                setIndex(maxIndex + 1);
            } catch (error) {
                console.error('Error fetching blogs: ', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !date || !image || !link) {
            setError('All fields are required');
            return;
        }
        setError('');

        try {
            const imageRef = ref(storage, `Blogs/${image.name}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);

            const blogsCollection = collection(db, 'Blogs');
            await addDoc(blogsCollection, {
                name: title,
                date: date,
                image: imageUrl,
                index: index,
                link: link
            });
            setTitle('');
            setDate('');
            setImage(null);
            setIndex('');
            setLink('');
            alert('Blog added successfully!');
        } catch (error) {
            console.error('Error adding blog: ', error);
            setError('Failed to add blog');
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Blog</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Index</label>
                    <input
                        type="number"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={index}
                        readOnly
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Link</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;