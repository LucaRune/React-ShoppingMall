import React from 'react';
import './MainBanner.css'

const MainBanner = () => {
    return (
        <div className="background">
            <div className="bannerWrapper">
                <h1 className="bannerTitle">
                    제목임
                </h1>
                <p className="bannerSubtitle">
                    부제목임
                </p>
                <button className="bannerButton">
                    버튼임
                </button>
            </div>
        </div>

    );
};

export default MainBanner;