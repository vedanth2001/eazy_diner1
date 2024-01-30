// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Phone: +1234567890, +9876543210</p>
        <p>Email: info@example.com, support@example.com</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <br></br>
          <br></br>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <br></br>
          <br></br>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
