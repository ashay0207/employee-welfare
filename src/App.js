import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import AdminPage from './Components/AdminPage/AdminPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Employee from './Components/EmployeePage/employee';
import Home from './Components/HomePage/home';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import 'bootstrap5/src/css/bootstrap.min.css';
import 'bootstrap5/src/js/bootstrap.bundle.min.js';

function App() {
  const [user, setUser] = useState(null);


  return (
    <Router>
      <Navbar user={user}  setUser={setUser}/> {/* Pass user and setUser as props */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/employee" element={<Employee />} />
          <Route path="/AdminPage" element={<AdminPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
