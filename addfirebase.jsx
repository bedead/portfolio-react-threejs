import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { projects } from './src/constants';
import { db } from './firebase';


const UploadProjects = () => {

    useEffect(() => {
        const uploadProjects = async () => {
            try {
                const projectsCollection = collection(db, 'Blogs'); // create or reference the collection 'projects'

                // Iterate over each project and add to Firebase
                for (const project of projects) {
                    const projectData = {
                        date: project.date,
                        description: project.description,
                        image: project.image || '',
                        index: projects.indexOf(project),
                        name: project.name,
                        source_code_link: project.source_code_link,
                        tags: project.tags.map((tag) => ({
                            [tag.name]: tag.color,
                        })),
                    };

                    // Add project to Firestore
                    await addDoc(projectsCollection, projectData);
                    console.log(`Project '${project.name}' uploaded successfully!`);
                }
            } catch (error) {
                console.error('Error uploading projects: ', error);
            }
        };
        uploadProjects(); // Call the function when the component mounts

    }, []);

    return <div>Uploading Projects to Firebase...</div>;
};


export default UploadProjects;
