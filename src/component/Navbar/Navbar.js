import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            {/*<Link to="/" id="active" className="left-tab">Flower</Link>*/}
            {/*<Link to="/" className="left-tab">Home</Link>*/}
            {/*<Link to="/detail" className="left-tab">Detail</Link>*/}
            {/*<Link to="/join" className="right-tab">Join</Link>*/}
            {/*<Link to="/" className="login">Login</Link>*/}

            <ul>
                <li><Link to="/" id="active">Flower</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/detail">Detail</Link></li>
            </ul>
            <div><Link to="/join" id="join-tab">Join</Link></div>
            <div><Link to="/" >Login</Link></div>

        </div>
    );
};

export default Navbar;