import React, {useState, useEffect} from 'react';
import './styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isClockActive, setIsClockActive] = useState(true);

  const startClock = () => {
    setIsClockActive(true);
  }
  const stopClock = () => {
    setIsClockActive(false);
  }

  useEffect(() => {
    let currentTime = null;
    if(isClockActive) {
      currentTime = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }
    return () => {
      clearInterval(currentTime);
    }
  }, [isClockActive]);

  return (
    <div className='clock'>
      <div>{time}</div>
      <div className='buttonGroup'>
        <button className='clockBtn' onClick={startClock}>Start</button>
        <button className='clockBtn' onClick={stopClock}>Stop</button>
      </div>
    </div>
  );
};

export default Clock;