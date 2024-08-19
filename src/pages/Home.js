import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Home.css';

const Home = () => {
  return (
    
    <div>
      <div className="home-container">
        <div className="login-panel">
          <h2>Welcome to School System</h2>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
