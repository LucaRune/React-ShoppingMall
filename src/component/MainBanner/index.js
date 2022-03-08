import React from 'react';
import './MainBanner.css'
import {Link} from "react-router-dom";

const MainBanner = () => {
    return (
        <div className="background">
            <div className="bannerWrapper">
                <h1 className="bannerTitle">
                    This is Title
                </h1>
                <p className="bannerSubtitle">
                    Sub Title
                </p>
                <button className="bannerButton">
                    <Link to="/detail">Go</Link>
                </button>
            </div>
        </div>

    );
};

export default MainBanner;