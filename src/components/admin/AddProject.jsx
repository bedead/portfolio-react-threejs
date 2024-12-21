// src/AddProject.js

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';

const AddProject = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [index, setIndex] = useState('');
    const [sourceCodeLinks, setSourceCodeLinks] = useState([{ key: '', value: '' }]);
    const [tags, setTags] = useState([{ key: '', value: '' }]);
    const [error, setError] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = currentDate.toLocaleDateString('en-IN', options);
        setDate(formattedDate);

        const fetchProjects = async () => {
            try {
                const projectsCollection = collection(db, 'Projects');
                const projectSnapshot = await getDocs(projectsCollection);
                const projectList = projectSnapshot.docs.map(doc => doc.data());
                const maxIndex = projectList.reduce((max, project) => (project.index > max ? project.index : max), 0);
                setIndex(maxIndex + 1);
            } catch (error) {
                console.error('Error fetching projects: ', error);
            }
        };

        fetchProjects();
    }, []);

    const handleSourceCodeLinkChange = (index, field, value) => {
        const newLinks = [...sourceCodeLinks];
        newLinks[index][field] = value;
        setSourceCodeLinks(newLinks);
    };

    const handleTagChange = (index, field, value) => {
        const newTags = [...tags];
        newTags[index][field] = value;
        setTags(newTags);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!projectName || !description || !image) {
            setError('All fields are required');
            return;
        }
        setError('');

        try {
            const imageRef = ref(storage, `Projects/${image.name}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);

            const projectsCollection = collection(db, 'Projects');
            await addDoc(projectsCollection, {
                name: projectName,
                description: description,
                date: date,
                image: imageUrl,
                index: index,
                source_code_link: sourceCodeLinks.reduce((acc, link) => ({ ...acc, [link.key]: link.value }), {}),
                tags: tags.reduce((acc, tag) => ({ ...acc, [tag.key]: tag.value }), {}),
            });
            setProjectName('');
            setDescription('');
            setImage(null);
            setSourceCodeLinks([{ key: '', value: '' }]);
            setTags([{ key: '', value: '' }]);
            alert('Project added successfully!');
        } catch (error) {
            console.error('Error adding project: ', error);
            setError('Failed to add project');
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Add Project</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Index</label>
                    <input
                        type="number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={index}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Source Code Links</label>
                    {sourceCodeLinks.map((link, idx) => (
                        <div key={idx} className="flex mb-2">
                            <input
                                type="text"
                                placeholder="Key"
                                className="mr-2 p-2 border border-gray-300 rounded-md"
                                value={link.key}
                                onChange={(e) => handleSourceCodeLinkChange(idx, 'key', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                className="p-2 border border-gray-300 rounded-md"
                                value={link.value}
                                onChange={(e) => handleSourceCodeLinkChange(idx, 'value', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => setSourceCodeLinks([...sourceCodeLinks, { key: '', value: '' }])} className="bg-gray-500 text-white py-1 px-2 rounded-md">Add Link</button>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                    {tags.map((tag, idx) => (
                        <div key={idx} className="flex mb-2">
                            <input
                                type="text"
                                placeholder="Key"
                                className="mr-2 p-2 border border-gray-300 rounded-md"
                                value={tag.key}
                                onChange={(e) => handleTagChange(idx, 'key', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                className="p-2 border border-gray-300 rounded-md"
                                value={tag.value}
                                onChange={(e) => handleTagChange(idx, 'value', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => setTags([...tags, { key: '', value: '' }])} className="bg-gray-500 text-white py-1 px-2 rounded-md">Add Tag</button>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;