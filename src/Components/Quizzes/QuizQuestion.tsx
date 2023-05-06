import IQuestion from "../../types/IQuestion";

const QuizQuestion: React.FC<{ question: IQuestion; onDelete: (questionId: string) => void }> = (
  props
) => {
  return (
    <li className="p-4 w-full my-2 text-center">
      <div className="flex flex-row gap-4 justify-end pt-4 pb-2 px-4 border-t-2 border-t-gray-700">
        <button className="my-auto" >
          <svg
            className="hover:scale-125 duration-100 ease-in transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
          >
            <path
              fill="white"
              d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"
            />
          </svg>
        </button>
        <button className="my-auto" onClick={() => props.onDelete(props.question.id ? props.question.id : "")}>
          <svg
            className="hover:scale-125 duration-100 ease-in transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
          >
            <path
              fill="white"
              d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z"
            />
          </svg>
        </button>
      </div>
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
