import { useEffect, useState } from "react";

const timer = "Timer:";
const seconds = "seconds";

export default function Timer() {
  const [duration, setDuration] = useState(30);
  let start = 30;

  useEffect(() => {
    setInterval(() => {
      if (start > 0) {
        start--;
        setDuration(start);
      } else {
        stop;
      }
    }, 1000);

    console.log(duration);

    return () => clearInterval(timer);
  }, [start]);

  return (
    <div>
      <p>
        {timer} {duration} {seconds}
      </p>
    </div>
  );
}
