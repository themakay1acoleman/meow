import React from 'react';

const Header = ({ title = "M E O W" }) => {
    return (
        <header>
            <span className="to-my-love">to my love</span>
            <div className="header-inner-box">
                <div className="header-content">
                    <img src="/cupid1.png" alt="cupid" className="header-cupid" />
                    <div>
                        <h1>
                            <span className="star">♥</span>
                            <span className="meow-text">{title}</span>
                            <span className="star">♥</span>
                        </h1>
                        <p className="tagline">~ for allen ~</p>
                    </div>
                    <img src="/cupid1.png" alt="cupid" className="header-cupid" />
                </div>
            </div>
        </header>
    );
};

export default Header;
