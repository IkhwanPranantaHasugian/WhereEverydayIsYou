import React, { useState, useEffect } from 'react';
import FlowerBloom from '../components/FlowerBloom';
import { messages, ANNIVERSARY_START_DATE } from '../data/messages';
import { Sparkles } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentFlower, setCurrentFlower] = useState('rose');
  const [isBloomAnimating, setIsBloomAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [canReplay, setCanReplay] = useState(false);

  const FLOWERS = ['rose', 'tulip', 'lavender', 'sunflower', 'cherry'];

  const [flowerHistory, setFlowerHistory] = useState([]);

  const getRandomFlower = (previousFlower) => {
  let flower;
  do {
    flower = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
  } while (flower === previousFlower);
  return flower;
};



  useEffect(() => {
    calculateCurrentDay();
  }, []);

  const calculateCurrentDay = () => {
    const startDate = new Date(ANNIVERSARY_START_DATE);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const dayNumber = Math.min(Math.max(diffDays, 1), 365);
    setCurrentDay(dayNumber);
    
    const previousFlower = flowerHistory[dayNumber - 2];
    const newFlower = getRandomFlower(previousFlower);

    setCurrentFlower(newFlower);

    setFlowerHistory(prev => {
      const updated = [...prev];
      updated[dayNumber - 1] = newFlower;
      return updated;
    });

    setCurrentMessage(messages[dayNumber - 1] || "You are loved beyond measure.");
    
    startAnimationSequence();
  };

  const startAnimationSequence = () => {
    setIsBloomAnimating(false);
    setShowMessage(false);
    setCanReplay(false);
    
    setTimeout(() => {
      setIsBloomAnimating(true);
    }, 300);
    
    setTimeout(() => {
      setShowMessage(true);
      setCanReplay(true);
    }, 2800);
  };

  const handleReplay = () => {
    startAnimationSequence();
  };

  const getBackgroundColor = () => {
    switch (currentFlower) {
      case 'rose':
        return 'linear-gradient(135deg, #fff5f7 0%, #ffe5ec 100%)';
      case 'tulip':
        return 'linear-gradient(135deg, #fff7f3 0%, #ffe8dc 100%)';
      case 'lavender':
        return 'linear-gradient(135deg, #f8f5ff 0%, #f0e7ff 100%)';
      case 'sunflower':
        return 'linear-gradient(135deg, #fffdf5 0%, #fff4d4 100%)';
      case 'cherry':
        return 'linear-gradient(135deg, #fff9fb 0%, #ffebf3 100%)';
      default:
        return 'linear-gradient(135deg, #fff5f7 0%, #ffe5ec 100%)';
    }
  };

  return (
    <div className="home-page" style={{ background: getBackgroundColor() }}>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="content-container">
        <div className="header">
          <Sparkles className="sparkle-icon message-text2" size={40} />
          <h1 className="title message-text2">365 Messages in a Jar 💝</h1>
          <Sparkles className="sparkle-icon message-text2" size={40} />
        </div>

        <div className="day-counter">
          <span className="day-label message-text2">Day</span>
          <span className="day-number">{currentDay}</span>
          <span className="day-total message-text2">of 365</span>
        </div>

        <div className="flower-container">
          <FlowerBloom flowerType={currentFlower} isAnimating={isBloomAnimating} />
        </div>

        <div className={`message-container ${showMessage ? 'show' : ''}`}>
          <p className="message-text">{currentMessage}</p>
        </div>

        {canReplay && (
          <button className="replay-button" onClick={handleReplay}>
            Watch Again
          </button>
        )}

        <div className="footer">
          <p className="jar-text">A jar filled with love, one day at a time</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
