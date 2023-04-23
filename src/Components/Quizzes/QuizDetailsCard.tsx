import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../../store";
import IQuiz from "../../types/IQuiz";

const QuizDetailsCard: React.FC<{ quiz: IQuiz }> = (props) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  return (
    <>
      <div className="card bg-neutral p-4 md:min-w-[40rem] h-full ml-0 text-xl">
        <div className="flex flex-col justify-between md:flex-row">
          <h1 className="text-5xl font-semibold">{props.quiz.title}</h1>
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-12 h-12 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p className="my-auto">{props.quiz.playsCount}</p>
          </div>
        </div>
        <h3 className="mb-4 text-xl">
          by{" "}
          <Link
            className="link link-accent link-hover hover:no-underline"
            to={`/user/${props.quiz.authorId}/profile`}
          >
            {props.quiz.authorName}
          </Link>
        </h3>
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
        <div className="flex flex-row flex-wrap justify-left gap-4">
          <div className="btn btn-neutral flex flex-row justify-left gap-1">
            <div className="stat-figure">
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
            <p className="text-xl">{props.quiz.likesCount}</p>
          </div>
          <div className="btn btn-neutral flex flex-row justify-left gap-1">
            <div className="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                className="inline-block w-8 h-8 stroke-current fill-current pt-1 pl-1"
              >
                <path d="m22 22-4-4H4q-.825 0-1.412-.587Q2 16.825 2 16V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z" />
              </svg>
            </div>
            <p className="text-xl">{props.quiz.commentsCount}</p>
          </div>
        </div>
        <button className="btn btn-secondary mx-auto w-full max-w-64 md:w-auto mt-12">
          PLAY
        </button>
      </div>
      {userId === props.quiz.authorId ? (
        <div className="flex flex-row justify-right w-full pt-4 px-4">
          <Link
            to={`/quizzes/${props.quiz.id}/manage`}
            className="btn btn-secondary ml-auto"
          >
            Manage
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default QuizDetailsCard;
