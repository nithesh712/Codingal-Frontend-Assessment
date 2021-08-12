import React, { useState, useEffect } from 'react';

const Counter = ({ MinSecs, endCountDown }) => {
  const { minutes = 10, seconds = 0 } = MinSecs;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (secs === 59) {
      setTime([mins + 1, 0]);
    } else {
      setTime([mins, secs + 1]);
    }
  };

  useEffect(() => {
    if (!endCountDown) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  });

  return (
    <>
      <p>{`${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`}</p>
    </>
  );
};

export default Counter;
