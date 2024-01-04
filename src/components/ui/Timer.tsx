import { useEffect, useState } from "react";

const timer = "Timer:";
const seconds = "seconds";

export default function Timer() {
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setDuration((prevDuration) => {
        if (prevDuration > 0) {
          return prevDuration - 1;
        } else {
          clearInterval(intervalTime);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(intervalTime);
  }, []);

  return (
    <div>
      <div className="flex text-xl text-text">
        <p>{timer}</p>
        <p
          className={`${
            duration > 10 ? "text-timerGood" : "text-timerBad"
          } px-1 font-bold`}
        >
          {duration}
        </p>
        <p>{seconds}</p>
      </div>
    </div>
  );
}
