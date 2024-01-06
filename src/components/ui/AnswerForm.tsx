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
  return (
    <div className="mt-4">
      <p className="mb-3">{rules}</p>
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
            <input type="submit" value="Start" className=" rounded border-2" />
          </p>
          <p className="">
            <input
              type="submit"
              value="Confirm"
              className=" rounded border-2"
            />
          </p>
        </div>
      </form>
    </div>
  );
}
