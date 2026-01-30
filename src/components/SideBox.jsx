import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBox = ({ className = '', title, buttons, children, activePath }) => {
    const navigate = useNavigate();

    return (
        <div className={`side-box ${className}`}>
            <div className="side-box-nav">
                <div className="side-box-nav-title">{title}</div>
                <div className="side-box-nav-buttons">
                    {buttons.map((btn, index) => {
                        const isActive = activePath === btn.path;
                        return (
                            <button
                                key={index}
                                onClick={!isActive ? () => navigate(btn.path) : undefined}
                                style={isActive ? { cursor: 'default' } : {}}
                            >
                                {btn.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="side-box-content">
                {children}
            </div>
        </div>
    );
};

export default SideBox;
