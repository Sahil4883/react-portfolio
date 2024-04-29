import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let interval = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && time === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
      alert("Time is up!");
    }

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime(25 * 60);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="text-center">
            <h1 className="mb-4">Pomodoro Timer</h1>
            <div className="display-1 mb-4">{formatTime()}</div>
            <div className="d-flex justify-content-center gap-5">
              <button
                className="btn btn-primary mr-2"
                onClick={startTimer}
                disabled={isRunning}
              >
                Start
              </button>
              <button
                className="btn btn-danger"
                onClick={stopTimer}
                disabled={!isRunning}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
