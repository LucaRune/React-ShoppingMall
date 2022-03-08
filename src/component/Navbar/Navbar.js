import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/" id="active">Flower</Link>
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/join" className="login">Join</Link>
            <Link to="/" className="login">Login</Link>
        </div>
    );
};

export default Navbar;