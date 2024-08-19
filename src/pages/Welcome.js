import React from 'react';
import { useEffect } from 'react';
import './Style/Welcome.css';

const Welcome = () => {
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
                <a href="#" className='Dashboard'>
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

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

              <li className="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Fee Structure</span>
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

      <section className="home">
        <div className="text">
          Welcome to your Dashboard! Here you can find various tools and insights to help you manage your projects effectively.
          Explore the menu on the left to navigate through different sections.
        </div>
      </section>
    </>
  );
};

export default Welcome;
