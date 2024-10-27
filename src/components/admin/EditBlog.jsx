// src/EditBlog.js

import React from 'react';

const EditBlog = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
            {/* Add your form for editing a blog here */}
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Blog ID</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">New Content</label>
                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Edit Blog</button>
            </form>
        </div>
    );
};

export default EditBlog;