import React from 'react';
import { Link } from 'react-router-dom';

const Love = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px', fontFamily: "'VT323', monospace" }}>
            {/* Falling hearts background effects */}
            <div style={{ position: 'fixed', left: 0, top: 0, height: '100%', width: '60px', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'spaceAround', padding: '10px 0', zIndex: 1 }}>
                {Array(20).fill(0).map((_, i) => (
                    <img key={i} src={`${import.meta.env.BASE_URL}heart.png`} alt="Heart" style={{ width: '35px', height: 'auto', filter: 'drop-shadow(3px 3px 0 #999)', marginBottom: '10px' }} />
                ))}
            </div>
            <div style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '60px', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'spaceAround', padding: '10px 0', zIndex: 1 }}>
                {Array(20).fill(0).map((_, i) => (
                    <img key={i} src={`${import.meta.env.BASE_URL}heart.png`} alt="Heart" style={{ width: '35px', height: 'auto', filter: 'drop-shadow(3px 3px 0 #999)', marginBottom: '10px' }} />
                ))}
            </div>

            <header style={{ background: '#fff', border: '4px solid #000', boxShadow: '10px 10px 0 #ffb6c1', padding: '20px', margin: '20px auto', textAlign: 'center', width: '50%', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                    <img src={`${import.meta.env.BASE_URL}cupid2.png`} alt="cupid" style={{ width: '80px', height: 'auto', filter: 'drop-shadow(3px 3px 0 #999)' }} />
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>
                        <span style={{ color: '#999' }}>♥</span>
                        <span style={{ color: '#ffb6c1', margin: '0 10px' }}>BE MINE</span>
                        <span style={{ color: '#999' }}>♥</span>
                    </h1>
                    <img src={`${import.meta.env.BASE_URL}cupid2.png`} alt="cupid" style={{ width: '80px', height: 'auto', filter: 'drop-shadow(3px 3px 0 #999)' }} />
                </div>
            </header>

            {/* Container for the two top boxes */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '40px auto', width: '90%', maxWidth: '1200px', position: 'relative', zIndex: 10 }}>

                {/* Pink Box Wrapper */}
                <div style={{ position: 'relative', width: '48%' }}>
                    <div style={{ position: 'absolute', top: '-40px', left: '-30px', zIndex: 20 }}>
                        <img src={`${import.meta.env.BASE_URL}2hearts.png`} alt="Hearts" style={{ width: '100px', height: 'auto' }} />
                    </div>
                    <div className="love-text-box" style={{ background: '#ffe6f0', border: '8px solid #a00', padding: '40px 20px', textAlign: 'center', minHeight: '150px', maxHeight: '300px', overflowY: 'auto', boxShadow: '10px 10px 0 #999', fontSize: '1.2rem', lineHeight: '2' }}>
                        <p style={{ margin: 0 }}>I love you so so much Allen, you don't even know. I'm so incredibly grateful to have you in my life, and I count each day I get to spend with you a blessing. You are so sweet and so kind. You have the kindest, warmest eyes and the sweetest smile. You bring me so much joy, and I love being in your presence. I love doing anything and everything with you, from cleaning to sleeping, or gaming, or eating. You make even the most mundane tasks fun. I look forward to speaking to you each day, and I love our good morning texts and nightly calls so so much. There are so many aspects of my life in which you've inspired me to do better and have helped me to improve. I often put forth minimal effort in the things that I do, whereas you tend to do the opposite, but you've inspired me to give my best effort in all of my endeavors. You're consistently present when I need you and always eager to help. You're like my sun; you bring so much warmth and light to my life, and I can't imagine it without you. I feel like you see me and accept me in a way that no one ever has, and it's almost confusing how well you get me sometimes. Even when we disagree, I'm grateful for our conflict because we're always working to fix our issues, and I think we grow closer through them. I love you so much. I love your smile, your voice, your laughter, your eyes, your hands, your soul, and your body. Thank you so much for your presence in my life.</p>
                    </div>
                </div>

                {/* White Box Wrapper */}
                <div style={{ position: 'relative', width: '48%' }}>
                    <div style={{ position: 'absolute', top: 'auto', bottom: '100%', right: '10px', zIndex: 20, textAlign: 'right' }}>
                        <img src={`${import.meta.env.BASE_URL}movingpaws.gif`} alt="Moving Paws" style={{ width: '150px', height: 'auto', marginBottom: '-48px' }} />
                    </div>
                    <div className="love-text-box" style={{ background: '#fff', border: '8px solid #999', padding: '40px 20px', textAlign: 'center', minHeight: '300px', maxHeight: '400px', overflowY: 'auto', boxShadow: '10px 10px 0 #ffb6c1', fontSize: '1.2rem', lineHeight: '2' }}>
                        <p style={{ margin: 0 }}>I want to kiss you everywhere. I want to start on your head and then kiss your forehead. I want to kiss your temples and then each eyebrow. After that, I want to kiss each eye and then the tip of your nose. I want to kiss each cheek and then each cheekbone. After I kiss your cheeks, I would like to kiss your chin and all along your jaw. After your jaw, I would kiss each ear and all down your neck. Finally, I'd want to come back up to kiss your lips. Then, I could kiss you in the hollow between your collarbones, and I could kiss you along each one. I'd kiss the cap of each shoulder and down each of your arms. I'd kiss the backs and palms of both hands and all of your fingers. I would kiss all over your chest and down your stomach. Then, I'd kiss my way down your happy trail and back up your v-line on both sides. I'd kiss all over your thighs and each kneecap. I would kiss my way down your shins and follow that by kissing each ankle, and finally, I'd kiss each foot. Then you'd roll over, and I'd start again on your back. ;)</p>
                    </div>
                </div>
            </div>

            {/* Blue Box Wrapper */}
            <div style={{ position: 'relative', width: '80%', maxWidth: '1000px', margin: '60px auto', zIndex: 10 }}>
                <div style={{ position: 'absolute', top: '-50px', left: '-40px', zIndex: 20 }}>
                    <img src={`${import.meta.env.BASE_URL}star.png`} alt="Star" style={{ width: '100px', height: 'auto' }} />
                </div>
                <div className="love-text-box" style={{ background: '#c5e1f1', border: '8px solid #07135b', padding: '40px 20px', textAlign: 'center', minHeight: '200px', boxShadow: '10px 10px 0 #bbb', fontSize: '1.2rem', lineHeight: '2' }}>
                    <p style={{ margin: 0 }}>sorryyyyy lots of reading for you baby, but let me finish. You are so sweet and caring. You have such a warmth and openness to you that's enviable. You genuinely care about the people around you, and you're so generous. You have such a kind heart, and you are so genuine, and I feel like you love fully and unabashedly. You have no problem being childish and juvenile and just playing, and I love that about you. But you're also so dependable and reliable. You're so smart and so creative; I could listen to you talk about coding, teaching, psychology, your classes, and whatever papers you read for days. I'd like to listen to you talk until my ears bleed. You are so bright, and you're so important to me. And on top of that, :P you're so handsome. I love to look at you, and if I could cover my walls in pictures of you, I would. You have the prettiest eyes, and I love the moles on your face. I love the shape of your lips, and I just love your face. I'll never get sick of looking at you. I love your body too, but you know that, so I'll refrain from elaborating. I know appearances are bound to change, so I want to make it clear how much I love your heart and your mind. I love my meow meow sooooooooooooooo much it's crazy. You're my favorite person. You mean so much to me I can't quite put it into words, but I'm trying.</p>
                </div>
            </div>

            <Link to="/main" style={{ display: 'inline-block', margin: '40px 0 0 80px', padding: '10px 20px', border: '4px solid #000', background: '#fff', fontSize: '1rem', textDecoration: 'none', color: '#000', position: 'relative', zIndex: 20 }}>← Back</Link>

            <div style={{ textAlign: 'center', margin: '40px 0', position: 'relative', zIndex: 10 }}>
                <Link to="/quiz">
                    <img src={`${import.meta.env.BASE_URL}kitty.png`} alt="Kitty" style={{ width: '200px', height: 'auto', cursor: 'pointer' }} />
                </Link>
            </div>
        </div>
    );
};

export default Love;
