import React, { useState } from 'react';

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function startTimer() {
    setIsRunning(true);
    setIntervalId(setInterval(() => setSeconds(seconds + 1)));
  }

  function pauseTimer() {
    setIsRunning(false);
    clearInterval(intervalId);
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(intervalId);
    setSeconds(0);
  }

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {!isRunning && <button onClick={startTimer}>Start</button>}
      {isRunning && <button onClick={pauseTimer}>Pause</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;