import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        blocked:false
    });

    useEffect(()=>{
        const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedIn){
        navigate('/')
        } 
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();

         

        // Check the user's role and store in the corresponding key
        const existingDataKey = input.role === "employee" ? "employees" : "admins";
        const existingData = JSON.parse(localStorage.getItem(existingDataKey)) || [];
        existingData.push(input);
        localStorage.setItem(existingDataKey, JSON.stringify(existingData));

        navigate("/login");
    
    };
    
    // localStorage.clear();


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Registration Form</h2>
                    <div className="card my-5">
                        <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                                    id="Username"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                                />
                            </div>
                            <div className="mb-3 mx-2">
                                <label className="form-label">Select Role:</label>
                                <div>
                                    <input
                                    className='mx-2'
                                        type="radio"
                                        id="admin"
                                        name="role"
                                        value="admin"
                                        checked={input.role === "admin"}
                                        onChange={(e) => setInput({ ...input, role: e.target.value })}
                                    />
                                    <label htmlFor="admin" className="ml-2">Admin</label>
                                    <input className='mx-2'
                                        type="radio"
                                        id="employee"
                                        name="role"
                                        value="employee"
                                        checked={input.role === "employee"}
                                        onChange={(e) => setInput({ ...input, role: e.target.value })}
                                    />
                                    <label htmlFor="employee" className="ml-5">Employee</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success px-5 mb-5 w-100">Register</button>
                            </div>
                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                Already Registered? <Link to="/login" className="text-dark fw-bold">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
