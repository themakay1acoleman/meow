import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Quiz = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [typewriterHeader, setTypewriterHeader] = useState('');
    const [typewriterLines, setTypewriterLines] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState({ text: '', color: '' });
    const [showNext, setShowNext] = useState(false);

    // Typewriter effect
    useEffect(() => {
        let activeTimeouts = [];

        const setLocalTimeout = (fn, delay) => {
            const id = setTimeout(fn, delay);
            activeTimeouts.push(id);
        };

        if (currentPage === 1) {
            const headerText = "Hello Hello Hello";
            const lines = [
                "Let’s play a quick little game before I let you go.",
                "I promise it’ll be fun!!",
                "For me at least... :)"
            ];

            let i = 0;
            const typeHeader = () => {
                if (i < headerText.length) {
                    const char = headerText.charAt(i);
                    setTypewriterHeader(prev => prev + char);
                    i++;
                    setLocalTimeout(typeHeader, 70);
                } else {
                    setLocalTimeout(() => typeLines(0), 500);
                }
            };

            const typeLines = (lineIdx) => {
                if (lineIdx < lines.length) {
                    let charIdx = 0;
                    const currentLine = lines[lineIdx];
                    // Append empty string to start new line
                    setTypewriterLines(prev => [...prev, '']);

                    const typeChar = () => {
                        if (charIdx < currentLine.length) {
                            const char = currentLine.charAt(charIdx);
                            setTypewriterLines(prev => {
                                const newLines = [...prev];
                                newLines[lineIdx] = (newLines[lineIdx] || '') + char;
                                return newLines;
                            });
                            charIdx++;
                            setLocalTimeout(typeChar, 25);
                        } else {
                            setLocalTimeout(() => typeLines(lineIdx + 1), 500);
                        }
                    };
                    typeChar();
                } else {
                    setShowNext(true);
                }
            };

            // Reset state
            setTypewriterHeader('');
            setTypewriterLines([]);
            typeHeader();
        } else {
            // Reset for other pages
            setFeedback({ text: '', color: '' });
            setUserInput('');
            // Logic for showing Next button based on page
            // Pages 2-9 require correct answer to show next
            if (currentPage >= 2 && currentPage <= 9) {
                setShowNext(false);
            } else {
                // Pages 10, 11 allowed to proceed
                setShowNext(currentPage < 12);
            }
        }

        return () => {
            activeTimeouts.forEach(clearTimeout);
        };
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < 12) setCurrentPage(p => p + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(p => p - 1);
    };

    const handleCheckAnswer = (answer, correctAnswers) => {
        const isCorrect = Array.isArray(correctAnswers)
            ? correctAnswers.includes(answer.toLowerCase())
            : answer.toLowerCase() === correctAnswers.toLowerCase();

        if (isCorrect) {
            setFeedback({ text: 'Correct! 🎉', color: '#28a745' });
            setShowNext(true);
        } else {
            setFeedback({ text: 'Try again!', color: '#d00' });
            setShowNext(false);
        }
    };

    const handleFreeResponseCheck = (correctAnswers) => {
        const normalizedInput = userInput.trim().toLowerCase();
        let isCorrect = false;

        if (Array.isArray(correctAnswers)) {
            isCorrect = correctAnswers.includes(normalizedInput);
            // Special logic for page 5 (anniversary) from original code
            if (!isCorrect && currentPage === 5) {
                const customLogic = correctAnswers.some(ans =>
                    normalizedInput === ans ||
                    normalizedInput === ans.replace(/^the /, 'the ').replace(/^(the )?/, '').replace(/th$/, 'th')
                );
                if (customLogic) isCorrect = true;
            }
        } else {
            isCorrect = normalizedInput === correctAnswers.toLowerCase();
        }

        if (isCorrect) {
            setFeedback({ text: 'Correct! 🎉', color: '#28a745' });
            setShowNext(true);
        } else {
            setFeedback({ text: 'Try again!', color: '#d00' });
            setShowNext(false);
        }
    };

    // Input handler to hide next button if user changes input after correct
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        if (showNext && feedback.text === 'Correct! 🎉') {
            setShowNext(false);
            setFeedback({ text: '', color: '' });
        }
    }

    const renderContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <>
                        <div id="typewriter-header"><h2 style={{ color: '#f00', textShadow: '2px 2px 0 #000', fontSize: '2rem' }}>{typewriterHeader}</h2></div>
                        <div className="quiz-content">
                            <div id="typewriter-text">
                                {typewriterLines.map((line, i) => <p key={i}>{line}</p>)}
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2>Question 1</h2>
                        <div className="quiz-content">
                            <p>What is makayla's favorite color?</p>
                            <textarea
                                rows="1"
                                style={{ width: '120px', fontSize: '0.95rem', fontFamily: "'VT323', monospace", border: '2px solid #000', borderRadius: '8px', marginTop: '10px', padding: '4px', resize: 'vertical' }}
                                placeholder="Type your answer here..."
                                value={userInput}
                                onChange={handleInputChange}
                            />
                            <br />
                            <button
                                className="quiz-button"
                                style={{ marginTop: '10px' }}
                                onClick={() => handleFreeResponseCheck(["blue", "baby blue", "light blue", "dark blue"])}
                            >
                                Check Answer
                            </button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h2>Question 2</h2>
                        <div className="quiz-content">
                            <p>What is makayla's favorite food?</p>
                            <button className="quiz-button" style={{ marginRight: '16px' }} onClick={() => handleCheckAnswer('mac and cheese', 'mac and cheese')}>mac and cheese</button>
                            <button className="quiz-button" onClick={() => handleCheckAnswer('burgers', 'mac and cheese')}>burgers</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h2>Question 3</h2>
                        <div className="quiz-content">
                            <p>Who is makayla's favorite person ever?</p>
                            <button className="quiz-button" style={{ marginRight: '16px' }} onClick={() => handleCheckAnswer('cardan greenbriar', 'allen jue')}>cardan greenbriar</button>
                            <button className="quiz-button" style={{ marginRight: '16px' }} onClick={() => handleCheckAnswer('allen jue', 'allen jue')}>allen jue</button>
                            <button className="quiz-button" onClick={() => handleCheckAnswer('jimin from bts', 'allen jue')}>jimin from bts</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 5:
                return (
                    <>
                        <h2>Question 4</h2>
                        <div className="quiz-content">
                            <p>What day of the month is our anniversery on?</p>
                            <input
                                type="text"
                                style={{ width: '120px', fontSize: '1rem', fontFamily: "'VT323', monospace", border: '2px solid #000', borderRadius: '8px', marginTop: '10px', padding: '4px', textAlign: 'center' }}
                                placeholder="type answer here"
                                value={userInput}
                                onChange={handleInputChange}
                            />
                            <button
                                className="quiz-button"
                                style={{ marginLeft: '10px' }}
                                onClick={() => handleFreeResponseCheck(["17", "seventeen", "17th", "seventeenth", "the seventeenth", "the 17th"])}
                            >Check Answer</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 6:
                return (
                    <>
                        <h2>Question 5</h2>
                        <div className="quiz-content">
                            <p>Who is the most beautiful, generous, sweet, cute, and sexy girl in the world?</p>
                            <p>Hint: she's your favorite girl ever</p>
                            <input
                                type="text"
                                style={{ width: '120px', fontSize: '1rem', fontFamily: "'VT323', monospace", border: '2px solid #000', borderRadius: '8px', marginTop: '10px', padding: '4px', textAlign: 'center' }}
                                placeholder="type answer here"
                                value={userInput}
                                onChange={handleInputChange}
                            />
                            <button
                                className="quiz-button"
                                style={{ marginLeft: '10px' }}
                                onClick={() => handleFreeResponseCheck(["makayla", "momo", "muzzy"])}
                            >Check Answer</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 7:
                return (
                    <>
                        <h2>Question 6</h2>
                        <div className="quiz-content">
                            <p>Do you love momo?</p>
                            <button className="quiz-button" style={{ marginRight: '16px' }} onClick={() => handleCheckAnswer('yes', 'yes')}>yes</button>
                            <button className="quiz-button" onClick={() => handleCheckAnswer('yes', 'yes')}>yes</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 8:
                return (
                    <>
                        <h2>Question 7</h2>
                        <div className="quiz-content">
                            <p>Does momo love you?</p>
                            <button className="quiz-button" style={{ marginRight: '16px' }} onClick={() => handleCheckAnswer('of course!', ['of course!', 'so so much'])}>of course!</button>
                            <button className="quiz-button" onClick={() => handleCheckAnswer('so so much', ['of course!', 'so so much'])}>so so much</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            case 9:
                return (
                    <>
                        <h2>Question 8</h2>
                        <div className="quiz-content">
                            <p>What is makayla's favorite season?</p>
                            <button className="quiz-button" style={{ marginRight: '10px' }} onClick={() => handleCheckAnswer('winter', ['summer', 'fall'])}>winter</button>
                            <button className="quiz-button" style={{ marginRight: '10px' }} onClick={() => handleCheckAnswer('spring', ['summer', 'fall'])}>spring</button>
                            <button className="quiz-button" style={{ marginRight: '10px' }} onClick={() => handleCheckAnswer('summer', ['summer', 'fall'])}>summer</button>
                            <button className="quiz-button" onClick={() => handleCheckAnswer('fall', ['summer', 'fall'])}>fall</button>
                            <div style={{ marginTop: '10px', fontSize: '1.1rem', color: feedback.color }}>{feedback.text}</div>
                        </div>
                    </>
                );
            // Handling placeholders 10-11
            default:
                return (
                    <>
                        <h2>{currentPage === 12 ? 'The End!' : `Question ${currentPage - 1}`}</h2>
                        <div className="quiz-content">
                            <p>{currentPage === 12 ? "You finished the quiz! I love you so much! <3" : `Add your content here for page ${currentPage}.`}</p>
                            {currentPage === 12 && (
                                <Link to="/main" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', border: '4px solid #000', background: '#fff', fontSize: '1rem', textDecoration: 'none', color: '#000' }}>Back to Main</Link>
                            )}
                        </div>
                    </>
                );
        }
    }


    return (
        <div style={{ fontFamily: "'VT323', monospace" }}>
            <Header title="Q U I Z" />

            <div className="quiz-container">
                {renderContent()}

                <div className="quiz-navigation">
                    <button
                        className="quiz-button"
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                    >
                        ← Previous
                    </button>
                    <span className="page-indicator">
                        Page <span>{currentPage}</span> of 12
                    </span>
                    {showNext && currentPage < 12 && (
                        <button
                            className="quiz-button"
                            onClick={handleNext}
                        >
                            Next →
                        </button>
                    )}
                </div>
            </div>

            <Link to="/main" style={{ display: 'inline-block', marginTop: '40px', marginLeft: '80px', marginBottom: '40px', padding: '10px 20px', border: '4px solid #000', background: '#fff', fontSize: '1rem', textDecoration: 'none', color: '#000' }}>← Back</Link>
        </div>
    );
};

export default Quiz;
