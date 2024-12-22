// src/AddExperience.js

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';

const AddExperience = () => {
    const [companyName, setCompanyName] = useState('');
    const [date, setDate] = useState('');
    const [icon, setIcon] = useState(null);
    const [iconBg, setIconBg] = useState('white');
    const [index, setIndex] = useState('');
    const [points, setPoints] = useState(['']);
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experiencesCollection = collection(db, 'Experience');
                const experienceSnapshot = await getDocs(experiencesCollection);
                const experienceList = experienceSnapshot.docs.map(doc => doc.data());
                const maxIndex = experienceList.reduce((max, experience) => (experience.index > max ? experience.index : max), 0);
                setIndex(maxIndex + 1);
            } catch (error) {
                console.error('Error fetching experiences: ', error);
            }
        };

        fetchExperiences();
    }, []);

    const handlePointChange = (index, value) => {
        const newPoints = [...points];
        newPoints[index] = value;
        setPoints(newPoints);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!companyName || !date || !icon || !iconBg || !title || points.some(point => !point)) {
            setError('All fields are required');
            return;
        }
        setError('');

        try {
            const iconRef = ref(storage, `Experiences/${icon.name}`);
            await uploadBytes(iconRef, icon);
            const iconUrl = await getDownloadURL(iconRef);

            const experiencesCollection = collection(db, 'Experience');
            await addDoc(experiencesCollection, {
                company_name: companyName,
                date: date,
                icon: iconUrl,
                iconBg: iconBg,
                index: index,
                points: points,
                title: title
            });
            setCompanyName('');
            setDate('');
            setIcon(null);
            setIconBg('white');
            setIndex('');
            setPoints(['']);
            setTitle('');
            alert('Experience added successfully!');
        } catch (error) {
            console.error('Error adding experience: ', error);
            setError('Failed to add experience');
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Experience</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
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
                    <label className="block text-sm font-medium text-gray-700">Icon</label>
                    <input
                        type="file"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        onChange={(e) => setIcon(e.target.files[0])}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Icon Background</label>
                    <select
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={iconBg}
                        onChange={(e) => setIconBg(e.target.value)}
                        required
                    >
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select>
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
                    <label className="block text-sm font-medium text-gray-700">Points</label>
                    {points.map((point, idx) => (
                        <div key={idx} className="flex mb-2">
                            <input
                                type="text"
                                className="mr-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                value={point}
                                onChange={(e) => handlePointChange(idx, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => setPoints([...points, ''])} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">Add Point</button>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">Edit Experience</button>
            </form>
        </div>
    );
};

export default AddExperience;