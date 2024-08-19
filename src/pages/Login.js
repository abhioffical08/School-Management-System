import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useEffect } from 'react';
import './Style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/Welcome');
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
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

{/* ---------------------------Login Page----------------- */}

    <div className="login-container">
      <div className="login-panel">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

    </>
  );
};

export default Login;
