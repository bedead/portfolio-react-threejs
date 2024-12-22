// src/EditProject.js

import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';

const EditExperience = () => {
    const [experiences, setExperiences] = useState([]);
    const [error, setError] = useState('');
    const [iconFiles, setIconFiles] = useState({});

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experiencesCollection = collection(db, 'Experience');
                const experienceSnapshot = await getDocs(experiencesCollection);
                const experienceList = experienceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setExperiences(experienceList);
            } catch (error) {
                console.error('Error fetching experiences: ', error);
            }
        };

        fetchExperiences();
    }, []);

    const handleInputChange = (id, field, value) => {
        setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
    };

    const handlePointChange = (id, index, value) => {
        setExperiences(experiences.map(exp => exp.id === id ? { ...exp, points: exp.points.map((point, idx) => idx === index ? value : point) } : exp));
    };

    const handleIconChange = (id, file) => {
        setIconFiles({ ...iconFiles, [id]: file });
    };

    const handleAddPoint = (id) => {
        setExperiences(experiences.map(exp => exp.id === id ? { ...exp, points: [...exp.points, ''] } : exp));
    };

    const handleSave = async (id) => {
        if (window.confirm('Are you sure you want to save this information permanently?')) {
            const experience = experiences.find(exp => exp.id === id);
            try {
                if (iconFiles[id]) {
                    const iconRef = ref(storage, `Experiences/${iconFiles[id].name}`);
                    await uploadBytes(iconRef, iconFiles[id]);
                    const iconUrl = await getDownloadURL(iconRef);
                    experience.icon = iconUrl;
                }

                const experienceDoc = doc(db, 'Experience', id);
                await updateDoc(experienceDoc, experience);
                alert('Experience updated successfully!');
            } catch (error) {
                console.error('Error updating experience: ', error);
                setError('Failed to update experience');
            }
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Edit Experiences</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map(exp => (
                    <div key={exp.id} className="p-4 bg-gray-100 shadow-md rounded-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                value={exp.company_name}
                                onChange={(e) => handleInputChange(exp.id, 'company_name', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="text"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                value={exp.date}
                                onChange={(e) => handleInputChange(exp.id, 'date', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Icon</label>
                            <img src={exp.icon} alt="Icon" className="w-16 h-16 mb-2" />
                            <input
                                type="file"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                onChange={(e) => handleIconChange(exp.id, e.target.files[0])}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Icon Background</label>
                            <select
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                value={exp.iconBg}
                                onChange={(e) => handleInputChange(exp.id, 'iconBg', e.target.value)}
                            >
                                <option value="white">White</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Points</label>
                            {exp.points.map((point, idx) => (
                                <div key={idx} className="flex mb-2">
                                    <textarea
                                        rows="2"
                                        className="mr-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                        value={point}
                                        onChange={(e) => handlePointChange(exp.id, idx, e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddPoint(exp.id)} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">Add Point</button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                value={exp.title}
                                onChange={(e) => handleInputChange(exp.id, 'title', e.target.value)}
                            />
                        </div>
                        <button onClick={() => handleSave(exp.id)} className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">Save Experience</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditExperience;