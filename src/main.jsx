import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './components/general/Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import AddBlog from './components/admin/AddBlog';
import AddProject from './components/admin/AddProject';
import AddExperience from './components/admin/AddExperience';
import EditBlog from './components/admin/EditBlog';
import EditProject from './components/admin/EditProject';
import EditExperience from './components/admin/EditExperience';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} >
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="add-experience" element={<AddExperience />} />
          <Route path="edit-blog" element={<EditBlog />} />
          <Route path="edit-project" element={<EditProject />} />
          <Route path="edit-experience" element={<EditExperience />} />
        </Route>

        {/* Redirect to login if the route is not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);