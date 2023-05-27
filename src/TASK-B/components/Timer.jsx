import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <div>{seconds > 0 ? <h1>Timer: {seconds}</h1> : <h1>Time's Up!</h1>}</div>
  );
};

export default Timer;
