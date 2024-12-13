import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/todo">To-Do</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
