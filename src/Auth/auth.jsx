import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    // Check if a user is logged in from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login")

  };

  return { user, login, logout };
}
