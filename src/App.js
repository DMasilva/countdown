import { useState, useEffect } from 'react';
import './App.css';
import royalLogo from './images/royal_logo.jpg';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: January 1, 2026, 00:00:00
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="countdown-container">
        <div className="logo-container">
          <img src={royalLogo} alt="ROYAL DASTINOS" className="royal-logo" />
        </div>
        
        <h1 className="main-title">ROYAL DASTINOS</h1>

        <h2 className="subtitle">Coming Soon</h2>
        
        <div className="countdown">
          <div className="time-box">
            <div className="time-value">{timeLeft.days}</div>
            <div className="time-label">Days</div>
          </div>
          
          <div className="time-box">
            <div className="time-value">{timeLeft.hours}</div>
            <div className="time-label">Hours</div>
          </div>
          
          <div className="time-box">
            <div className="time-value">{timeLeft.minutes}</div>
            <div className="time-label">Minutes</div>
          </div>
          
          <div className="time-box">
            <div className="time-value">{timeLeft.seconds}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
        
        <p className="launch-text">Until we go live and online!</p>
      </div>
    </div>
  );
}

export default App;
