import { useState, useEffect } from "react";
import './homecountdown.css'

const HomeCountdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-title">Countdown to forever:</div>
      <div className="countdown-values-wrapper">
        <div className="countdown-value">
          <p>{countdown.days}</p>
          <p>Days</p>
        </div>
        <div className="countdown-value">
          <p>{countdown.hours}</p>
          <p>Hours</p>
        </div>
        <div className="countdown-value">
          <p>{countdown.minutes}</p>
          <p>Minutes</p>
        </div>
        <div className="countdown-value">
          <p>{countdown.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCountdown;