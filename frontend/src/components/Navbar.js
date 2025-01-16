// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact Manager</Link>
            </div>
        </nav>
    );
};

export default Navbar;
