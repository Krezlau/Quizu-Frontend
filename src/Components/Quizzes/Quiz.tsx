import React from "react";
import { Link } from "react-router-dom";
import IQuiz from "../../types/IQuiz";

const Quiz: React.FC<{ quiz: IQuiz }> = (props) => {
  return (
    <div
      className="card flex flex-col justify-between bg-primary p-4 md:min-w-[40rem] h-full ml-0
  transition duration-500 ease-in-out transform hover:scale-[1.05]"
    >
      <div>
        <h1 className="text-3xl font-semibold">{props.quiz.title}</h1>
        <h3 className="mb-1 text-sm">
          by{" "}
          <Link
            className="link link-accent link-hover hover:no-underline"
            to={`/user/${props.quiz.authorId}/profile`}
          >
            {props.quiz.authorName}
          </Link>
        </h3>
        {!props.quiz.description || props.quiz.description.length === 0 ? (
          <p className="italic text-warning">No description provided.</p>
        ) : (
          <p>{props.quiz.description}</p>
        )}
        <div className="flex flex-row flex-wrap justify-left gap-2 mt-4 mb-4">
          {!props.quiz.tagNames || props.quiz.tagNames.length === 0 ? (
            <></>
          ) : (
            props.quiz.tagNames.map((t) => (
              <div className="badge badge-accent">{t}</div>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between">
        <div className="flex flex-row flex-wrap justify-left gap-4">
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p className="mt-1">{props.quiz.playsCount}</p>
          </div>
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <p className="mt-1">{props.quiz.likesCount}</p>
          </div>
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                className="inline-block w-8 h-8 stroke-current fill-current pt-1 pl-1"
              >
                <path d="m22 22-4-4H4q-.825 0-1.412-.587Q2 16.825 2 16V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z" />
              </svg>
            </div>
            <p className="mt-1">{props.quiz.commentsCount}</p>
          </div>
        </div>
        <Link
          to={`/quizzes/${props.quiz.id}/details`}
          className="btn btn-secondary btn-sm mx-auto w-full mt-2 sm:mr-4 sm:w-auto sm:mt-0"
        >
          Play
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
