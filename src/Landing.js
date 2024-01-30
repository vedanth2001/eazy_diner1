// src/pages/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import image from "../src/image.png"
const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="company-name">FINE DINER</h1>
      <p className="welcome-text">
        Welcome to Fine Diner, your destination for exquisite dining experiences!
      </p>
      <div className="button-container">
        <Link to="/login" className="button">Log In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
      <br></br>
      <div className='image'>
        <img src={image} className='burger'></img>
       </div>
      <p className="discount-text">
        Get Up to 50% flat discount using Fine Diner. Use the code 'First50' on your first table reservation to avail your special welcome discount!
      </p>
    </div>
  );
};

export default Landing;
