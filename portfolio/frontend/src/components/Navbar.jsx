import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          NB.
        </Link>
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/projects" className={isActive('/projects')} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
