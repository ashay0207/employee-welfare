import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/auth'; // Import the custom hook

function Navbar() {
  const { user, logout } = useAuth();
  
  


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">LOGO</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user ? (
              <>
                {user.role === "employee" ? (
                  <div className='d-flex'>
                    <Link to="/employee" className="nav-item nav-link">
                      Welcome, {user.name}
                    </Link>
                    <div class="dropdown mx-2">
                      <a class="btn btn-secondary dropdown-toggle bg-transparent" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>

                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to="/AdminPage" className="nav-item nav-link">
                    Welcome, {user.name}
                  </Link>
                )}
                <Link onClick={logout} to="/login">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/Login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/Contact" className="nav-item nav-link">
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
