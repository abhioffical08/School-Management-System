import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Style/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8; // Example of a simple password validation
};


//-----------Register---------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmpassword || !role) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
  }

  if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
      return;
  }

  if (password !== confirmpassword) {
    setError('Passwords do not match');
    return;
}

    try {
      await register({ email, password, role });
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    }
  };

  
  useEffect(() => {
    const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);



  return (
    <>


    <nav className="sidebar close">
{/* HeadLine-Logo================ */}
        <header>
          <div className="image-text">
            <span className="image">
              <img src="AvLogo.png" alt="Logo"/>
            </span>

            <div className="text logo-text">
              <span className="name">AV</span>
              <span className="profession">React-Js developer</span>
            </div>
          </div>

          <i className='bx bx-chevron-right toggle'></i>
        </header>
{/* Manu-Bar================= */}
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search..."/>
            </li>

            <ul className="menu-links">
            
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-bar-chart-alt-2 icon'></i>
                  <span className="text nav-text">Achievement</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="/login">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

{/* //-----------Register--------- */}

    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>

    </>

  );
};

export default Register;
