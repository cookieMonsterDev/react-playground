import { useState, useEffect } from "react";

type TimerProps = {
  startTime: number;
};

const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const [curTime, setCurTime] = useState(startTime);
  const [isRunning, setRunning] = useState(false);

  const formater = (time: number): string => {
    return time.toString();
  };

  useEffect(() => {
    let int: ReturnType<typeof setInterval>;

    if(isRunning) {
      int = setInterval(() => setCurTime((prev) => prev - 1000), 1000)
    }

    return () => {
      clearInterval(int);
    };
    
  }, [startTime, isRunning]);

  return (
    <div>
      <h1>{formater(curTime)}</h1>
      <section>
        <button
          onClick={() => {
            if (isRunning) {
              setRunning(false);
            } else {
              setRunning(true);
            }
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => {
            setCurTime(startTime);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default Timer;
