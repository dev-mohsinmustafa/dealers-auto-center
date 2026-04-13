import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          Dealers Auto Center
        </Link>
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inventory
          </Link>
          <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
