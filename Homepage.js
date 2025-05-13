import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="profile-card">
        <h1>Hello, I'm Diane</h1>
        <h2>Cloud Security & DevOps Engineer</h2>
        <img src="/diane.jpg" alt="Diane" className="profile-pic" />
        <p>Welcome to DianeStack, my personal profile app deployed with Docker!</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
