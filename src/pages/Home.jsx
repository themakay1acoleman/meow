import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{
            background: `url('${import.meta.env.BASE_URL}background.png') center/cover no-repeat fixed`,
            height: '100vh',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000 // Ensure it covers everything
        }}>
            <Link to="/main" style={{ padding: '20px 40px', border: '4px solid #000', background: '#fff', fontSize: '1.5rem', textDecoration: 'none', color: '#000', fontFamily: "'VT323', monospace" }}>ENTER</Link>
        </div>
    );
};

export default Home;
