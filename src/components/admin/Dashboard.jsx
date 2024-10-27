
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li>    
                            <Link to="/" className="block p-4 hover:bg-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link to="add-blog" className="block p-4 hover:bg-gray-200">Add Blog</Link>
                        </li>
                        <li>
                            <Link to="add-project" className="block p-4 hover:bg-gray-200">Add Project</Link>
                        </li>
                        <li>
                            <Link to="add-experience" className="block p-4 hover:bg-gray-200">Add Experience</Link>
                        </li>
                        <li>
                            <Link to="edit-blog" className="block p-4 hover:bg-gray-200">Edit Blog</Link>
                        </li>
                        <li>
                            <Link to="edit-project" className="block p-4 hover:bg-gray-200">Edit Project</Link>
                        </li>
                        <li>
                            <Link to="edit-experience" className="block p-4 hover:bg-gray-200">Edit Experience</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <Outlet /> {/* This will render the selected section */}
            </main>
        </div>
    );
};

export default Dashboard;