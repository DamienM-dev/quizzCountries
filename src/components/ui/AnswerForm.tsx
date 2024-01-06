import { useEffect, useState } from "react";
import Timer from "./Timer";

const rules = "Give the name and the capital of this country :";
const answers = [
  {
    nameAnswer: "Country",
  },
  {
    nameAnswer: "Capital",
  },
];

export default function AnswerForm() {
  const [duration, setDuration] = useState(60);

  function StartTimer() {
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
  }

  return (
    <div className="mt-4">
      <p className="mb-3">{rules}</p>
      <Timer duration={duration} />
      <form>
        {answers.map((answer, index) => (
          <p key={index}>
            <label>
              <input
                type="text"
                name={answer.nameAnswer}
                placeholder={answer.nameAnswer}
                className="mb-2 rounded-full border-2 border-border bg-bg_ui indent-2.5 placeholder:pl-3 placeholder:text-text hover:border-border_hover hover:bg-bg_hover"
              />
            </label>
          </p>
        ))}

        <div className="flex justify-between">
          <p>
            <input
              type="button"
              value="Start"
              className=" rounded border-2"
              onClick={StartTimer}
            />
          </p>
          <p className="">
            <input type="submit" value="Confirm" />
          </p>
        </div>
      </form>
    </div>
  );
}
