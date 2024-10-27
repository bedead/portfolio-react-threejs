import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './components/general/Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* Redirect to login if the route is not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);