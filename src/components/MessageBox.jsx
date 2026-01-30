import React, { useState } from 'react';

const MessageBox = () => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`message-box-container ${flipped ? 'flipped' : ''}`}
            style={{ position: 'absolute', top: '270px', right: '280px', width: '370px', minHeight: '400px' }}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="message-box-inner">
                <div className="message-box-front">
                    <div style={{ padding: '0px 10px', lineHeight: '2', fontFamily: "'VT323', monospace", marginTop: '-5px' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.35rem', margin: '0 0 10px 0' }}>Important!!</p>
                        <p style={{ margin: '0', fontSize: '1.05rem' }}>I made this site to wish you a happy valentine's day and tell you how much i love you. this was the reason i initially asked you to teach me about python, only to realize i don't need it ;-; but this is the website i've been complaining about so much and now you see why i couldn't show it to you. i hope its not too bad and you can see how hard i tried! Try clicking anything and everything on this page to see what happens. Once you've done that, you should scroll down and see what you find:3</p>
                    </div>
                </div>
                <div className="message-box-back">
                    <div style={{ padding: '0px 10px', lineHeight: '2', fontFamily: "'VT323', monospace", marginTop: '-5px', overflow: 'hidden', minHeight: '450px' }}>
                        <p style={{ margin: '0', fontSize: '1.15rem' }}>omg you found me meow meow! idk what to do now. you can exchange this for a hug, a kiss, head (and i use that word loosely bc ik i use a combination of mouth and hands), or candy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageBox;
