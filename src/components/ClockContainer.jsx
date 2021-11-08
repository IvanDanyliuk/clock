import React, {useState} from 'react';
import Clock from './Clock';

const ClockContainer = () => {
  const [clockList, setClockList] = useState([0]);

  const addClock = () => {
    setClockList([...clockList, clockList.length]);
  };

  const deleteClock = () => {
    setClockList(prev => {
      const newClockList = Array.from(prev);
      newClockList.pop();
      return newClockList;
    });
  };

  return (
    <div>
      {clockList.map(id => <Clock key={id} />)}
      <div className='buttonGroup'>
        <button onClick={addClock}>Add clock</button>
        <button onClick={deleteClock}>Delete clock</button>
      </div>
    </div>
  );
};

export default ClockContainer;