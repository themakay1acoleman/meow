import React from 'react';

const Header = ({ title = "I Love You" }) => {
    return (
        <header>
            <span className="to-my-love">to my love</span>
            <div className="header-inner-box">
                <div className="header-content">
                    <img src={`${import.meta.env.BASE_URL}cupid1.png`} alt="cupid" className="header-cupid" />
                    <div>
                        <h1>
                            <img src={`${import.meta.env.BASE_URL}heart.png`} alt="heart" className="star" style={{height:'1em',verticalAlign:'middle'}} />
                            <span className="meow-text">{title}</span>
                            <img src={`${import.meta.env.BASE_URL}heart.png`} alt="heart" className="star" style={{height:'1em',verticalAlign:'middle'}} />
                        </h1>
                        <p className="tagline">~ for allen ~</p>
                    </div>
                    <img src={`${import.meta.env.BASE_URL}cupid1.png`} alt="cupid" className="header-cupid" />
                </div>
            </div>
        </header>
    );
};

export default Header;
