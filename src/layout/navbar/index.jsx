import React from 'react';
import { NavLink } from 'react-router';
import './index.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav">
        Home
      </NavLink>
      <NavLink to="/about" className="nav">
        About
      </NavLink>
      <NavLink to="/contract" className="nav">
        Contract
      </NavLink>
      <NavLink to="/blogs" className="nav">
        Blogs
      </NavLink>
    </nav>
  );
};

export default Navbar;
