import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="#" id="active">Flower</a>
            <a href="#">Home</a>
            <a href="#">Search</a>
            <a href="#" className="login">Join</a>
            <a href="#" className="login">Login</a>
        </div>
    );
};

export default Navbar;