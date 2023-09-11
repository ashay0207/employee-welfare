import React from 'react'
import Employee from '../EmployeePage/employee';
import AdminPage from '../AdminPage/AdminPage';

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    // Check the role of the logged-in user
    if (loggedIn.role === 'admin') {
        return <AdminPage />;
    
    } else if (loggedIn.role === 'employee') {
        return <Employee />;
    } 
    else {
        return <Navigate to="/login" />;
    }
};


export default ProtectedRoutes;