import React from "react";
import { Link } from "react-router-dom";
import IQuiz from "../../types/IQuiz"

const QuizManageCard: React.FC<{ quiz: IQuiz }> = (props) => {
  return (
    <>
      <div className="card bg-neutral p-4 md:min-w-[40rem] h-full ml-0 text-xl">
        <h1 className="text-5xl font-semibold pb-4">
          {props.quiz.title}
        </h1>
        {!props.quiz.description || props.quiz.description.length === 0 ? (
          <p className="italic text-gray-300">No description provided.</p>
        ) : (
          <p>{props.quiz.description}</p>
        )}
        <div className="flex flex-row flex-wrap justify-left gap-2 mt-4 mb-4">
          {!props.quiz.tags || props.quiz.tags.length === 0 ? (
            <></>
          ) : (
            props.quiz.tags.map((t) => (
              <div className="badge badge-accent">{t}</div>
            ))
          )}
        </div>
        <div className="flex flex-row justify-right px-4 pt-4">
          <Link
            to={`/quizzes/${props.quiz.id}/manage-info`}
            className="btn btn-primary ml-auto"
          >
            Change Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizManageCard;

