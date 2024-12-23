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
import EditExperience from './components/admin/EditExperience';
import TodosHome from './components/admin/TodosHome';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute />} >
            <Route path='' element={<Dashboard />} >
              <Route path="todos" element={<TodosHome />} />
              <Route path="add-blog" element={<AddBlog />} />
              <Route path="add-project" element={<AddProject />} />
              <Route path="add-experience" element={<AddExperience />} />
              <Route path="edit-experience" element={<EditExperience />} />
            </Route>
          </Route>

          {/* Redirect to login if the route is not found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);