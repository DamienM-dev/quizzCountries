const timer = "Timer:";
const seconds = "seconds";

export default function Timer({ duration }) {
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
