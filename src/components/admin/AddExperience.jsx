// src/AddProject.js

import React from 'react';

const AddExperience = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Experience</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Experience Name</label>
                    <input type="text" className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">Add Experience</button>
            </form>
        </div>
    );
};

export default AddExperience;