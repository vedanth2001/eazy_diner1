// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './App.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-text" style={{textDecoration: 'none'}}>
        FINE DINER
      </Link>
    </header>
  );
};

export default Header;
