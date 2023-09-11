import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();

        // Determine the correct key in localStorage based on the selected role
        const userDataKey = input.role === "employee" ? "employees" : "admins";
        const users = JSON.parse(localStorage.getItem(userDataKey)) || [];

        const matchedUser = users.find(user => user.email === input.email && user.password === input.password);

        if (matchedUser) {
            if (matchedUser.blocked) {
              alert("Your account is blocked. Please contact the administrator.");
            } else {
              localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
              setUser(matchedUser);     
            
              if (input.role === "admin") {
                navigate("/AdminPage");
              } else if (input.role === "employee") {
                navigate("/employee");
              }
              console.log("User stored in local storage: ", matchedUser);
            }
          } else {
            alert("Wrong Email or Password");
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Login</h2>
                    <div className="card my-5">
                        <form className="card-body cardbody-color p-lg-5" onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Select Role:</label>
                                <div>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="admin"
                                        checked={input.role === "admin"}
                                        onChange={(e) => setInput({ ...input, role: e.target.value })}
                                    />
                                    <label>Admin</label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="employee"
                                        checked={input.role === "employee"}
                                        onChange={(e) => setInput({ ...input, role: e.target.value })}
                                    />
                                    <label>Employee</label>
                                </div>
                            </div>

                            <div     className="text-center">
                                <button type="submit" className="btn btn-success px-5 mb-5 w-100">Login</button>
                            </div>
                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                                Not Registered? <Link to="/Register" className="text-dark fw-bold">Create an Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
