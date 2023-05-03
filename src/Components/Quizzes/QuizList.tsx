import React from "react";
import IQuiz from "../../types/IQuiz";
import LoadingSpinner from "../UI/LoadingSpinner";
import Quiz from "./Quiz";

const QuizList: React.FC<{
  quizzes: IQuiz[];
  isLoading: boolean;
  loadMore: () => void;
  isAllLoaded: boolean;
}> = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <ul className="p-4">
        {props.quizzes.map((q) => (
          <li key={q.id} className="py-2">
            <Quiz quiz={q} />
          </li>
        ))}
      </ul>
      {!props.isAllLoaded && (
        <button
          className={`btn btn-primary mx-auto ${
            props.isLoading ? "btn-disabled" : ""
          }`}
          onClick={props.loadMore}
        >
          {props.isLoading ? <LoadingSpinner /> : "Load More"}
        </button>
      )}
      {props.isAllLoaded && <p className="italic text-xl text-center">That's all quizzes.</p>}
    </div>
  );
};

export default QuizList;
