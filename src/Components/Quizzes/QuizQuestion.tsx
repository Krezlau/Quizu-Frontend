import IQuestion from "../../types/IQuestion";

const QuizQuestion: React.FC<{ question: IQuestion }> = (props) => {
  return (
    <li className="p-4 w-full my-2 text-center">
      <div className="card bg-neutral text-xl p-4 mb-2">
        {props.question.content}
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
        <div
          className={`card ${
            props.question.answers[0].isCorrect ? "bg-green-500" : "bg-neutral"
          } p-4`}
        >
          {props.question.answers[0].content}
        </div>
        {props.question.answers.length > 1 && (
          <div
            className={`card ${
              props.question.answers[1].isCorrect
                ? "bg-green-500"
                : "bg-neutral"
            } p-4`}
          >
            {props.question.answers[1].content}
          </div>
        )}
        {props.question.answers.length > 2 && (
          <div
            className={`card ${
              props.question.answers[2].isCorrect
                ? "bg-green-500"
                : "bg-neutral"
            } p-4`}
          >
            {props.question.answers[2].content}
          </div>
        )}
        {props.question.answers.length > 3 && (
          <div
            className={`card ${
              props.question.answers[3].isCorrect
                ? "bg-green-500"
                : "bg-neutral"
            } p-4`}
          >
            {props.question.answers[3].content}
          </div>
        )}
      </div>
    </li>
  );
};

export default QuizQuestion;
