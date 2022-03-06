import React from 'react';
import './MainBanner.css'

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
                    Button
                </button>
            </div>
        </div>

    );
};

export default MainBanner;