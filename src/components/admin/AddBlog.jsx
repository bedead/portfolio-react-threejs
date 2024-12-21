// src/AddBlog.js

import React from 'react';

const AddBlog = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Blog</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;