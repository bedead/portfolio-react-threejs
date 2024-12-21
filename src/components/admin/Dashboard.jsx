import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-6">
                    <h2 className="text-3xl font-semibold text-center text-gray-800">Admin Dashboard</h2>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <Link to="/" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="add-blog" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Add Blog</Link>
                        </li>
                        <li>
                            <Link to="add-project" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Add Project</Link>
                        </li>
                        <li>
                            <Link to="add-experience" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Add Experience</Link>
                        </li>
                        <li>
                            <Link to="edit-blog" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Edit Blog</Link>
                        </li>
                        <li>
                            <Link to="edit-project" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Edit Project</Link>
                        </li>
                        <li>
                            <Link to="edit-experience" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Edit Experience</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-8 bg-white shadow-inner">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;