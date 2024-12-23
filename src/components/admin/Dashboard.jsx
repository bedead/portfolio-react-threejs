import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Dashboard = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-6 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
                    <p className=" text-gray-800">Don't be lazy idiot!</p>

                </div>
                <nav className="mt-6 ml-6">
                    <ul>
                        <li>
                            <Link to="/" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="todos" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Todos</Link>
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
                            <Link to="edit-experience" className="block p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition">Edit Experience</Link>
                        </li>
                    </ul>
                    <button
                        onClick={handleLogout}
                        className="rounded-xl block p-4 mt-6 text-center text-white bg-red-500 hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </nav>
            </aside>
            <main className="flex-1 p-8 bg-white shadow-inner">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;