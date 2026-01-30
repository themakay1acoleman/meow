import React, { useMemo } from 'react';
import Header from '../components/Header';
import SideBox from '../components/SideBox';
import MessageBox from '../components/MessageBox';
import { Link, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageContent = useMemo(() => {
        // Default content (matches /main and fallbacks)
        let left = (
            <>
                <p>happy valentine's day boob :3</p>
                <p>its been about half a year since we started dating &lt;3...</p>
            </>
        );
        let right = (
            <p style={{ fontSize: '1.15rem' }}>i meow you saur much~</p>
        );

        switch (currentPath) {
            case '/love':
                left = <p>i am so lucky to have met you and to have you in my life</p>;
                break;
            case '/you':
                left = <p>it's been a joy getting to know you, and i find more that i love about you every moment we spend together</p>;
                break;
            case '/so1':
                left = <p>i meow you :3</p>;
                right = <p style={{ fontSize: '1.15rem' }}>you're so important and special to me</p>;
                break;
            case '/so2':
                left = (
                    <>
                        <p>i meow you :3</p>
                        <p>i wuv you</p>
                    </>
                );
                right = <p style={{ fontSize: '1.15rem' }}>i love spending time with you, i never get bored of it</p>;
                break;
            case '/much':
                left = (
                    <>
                        <p>i meow you :3</p>
                        <p>i wuv you</p>
                        <p>wo ai ni twizzum :7</p>
                    </>
                );
                // Right content for /much is same as default ("i meow you saur much~") based on file analysis
                break;
            default:
                break;
        }
        return { left, right };
    }, [currentPath]);

    const leftButtons = [
        { label: 'I', path: '/main' },
        { label: 'LOVE', path: '/love' },
        { label: 'YOU', path: '/you' }
    ];
    const rightButtons = [
        { label: 'SO', path: '/so1' },
        { label: 'SO', path: '/so2' },
        { label: 'MUCH', path: '/much' }
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px' }}>
            <Header />

            <SideBox
                title="dear allen..."
                buttons={leftButtons}
                activePath={currentPath}
            >
                {pageContent.left}
            </SideBox>

            <SideBox
                title="dear allen..."
                buttons={rightButtons}
                className="right-box"
                activePath={currentPath}
            >
                {pageContent.right}
            </SideBox>

            <img
                src="/sleepy.png"
                alt="Sleepy"
                className="sleepy-hover"
                style={{ position: 'absolute', width: '130px', top: '420px', right: '750px', zIndex: 5, filter: 'drop-shadow(3px 3px 0 #999)' }}
                onClick={(e) => {
                    e.target.classList.remove('sleepy-spin');
                    void e.target.offsetWidth;
                    e.target.classList.add('sleepy-spin');
                }}
            />

            <MessageBox />

            <img src="/kitty2.gif" alt="Kitty" style={{ position: 'absolute', top: '350px', right: '130px', width: '100px', height: 'auto' }} />

            <div className="heart-image" style={{ position: 'absolute', top: 'auto', bottom: '20px', left: '60%', transform: 'translateX(-50%)', margin: '0', textAlign: 'center', display: 'flex', alignItems: 'flexEnd', gap: '32px', justifyContent: 'center' }}>
                <Link to="/love">
                    <img src="/heart.png" alt="heart" className="heart-hover" style={{ maxWidth: '450px', width: '100%', height: 'auto', marginRight: '0', filter: 'drop-shadow(3px 3px 0 #999)' }} />
                </Link>
                <div style={{ position: 'relative', display: 'inline-block', height: '200px', width: '260px', transform: 'translate(-160px, -170px)' }}>
                    <img src="/speechbubble.png" alt="speech bubble" style={{ height: '200px', width: '100%', display: 'block' }} />
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-45%, -230%)', color: '#222', fontSize: '1.1rem', fontFamily: "'VT323', monospace", textAlign: 'center', width: '90%', pointerEvents: 'none', textShadow: '1px 1px 4px #fff, 0 0 2px #fff' }}>click me if you dare</span>
                </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '40px', marginBottom: '40px', marginRight: '20px' }}>
                <img src="/cinamaroll.gif" alt="Cinnamoroll" style={{ width: '200px', height: 'auto' }} />
            </div>

            <Link to="/" style={{ display: 'inline-block', marginTop: '330px', marginLeft: '80px', padding: '10px 20px', border: '4px solid #000', background: '#fff', fontSize: '1rem', textDecoration: 'none', color: '#000' }}>← Back</Link>
        </div>
    );
};

export default Main;
