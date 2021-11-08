import React, {useState, useEffect} from 'react';
import './styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('Clock started...')
    const currentTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log('Clock stopped')
      clearInterval(currentTime);
    };
  }, []);

  return (
    <div className='clock'>{time}</div>
  );
};

export default Clock;