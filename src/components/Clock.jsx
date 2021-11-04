import React, {useState, useEffect} from 'react';
import './styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(currentTime);
    };
  }, []);

  return (
    <div className='clock'>{time}</div>
  );
};

export default Clock;