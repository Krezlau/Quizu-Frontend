import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import IQuiz from "../../types/IQuiz";

const QuizDetailsCard: React.FC<{ quiz: IQuiz, commentsCount: number }> = (props) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [isLiked, setIsLiked] = useState(props.quiz.isLikedByUser);
  const [likesCount, setLikesCount] = useState(props.quiz.likesCount);
  const { isLoading, likeQuiz, unlikeQuiz } = useHttp();

  useEffect(() => {
    if (props.quiz.isLikedByUser) {
      setIsLiked(true);
    }
  }, [props.quiz])

  const likeHandler = () => {
    if (isLiked) {
      unlikeQuiz(props.quiz.id).then((r) => {
        if (r) {
          setIsLiked(false);
          setLikesCount((s) => s - 1);
        }
      });
    } else {
      likeQuiz(props.quiz.id).then((r) => {
        if (r) {
          setIsLiked(true);
          setLikesCount((s) => s + 1);
        }
      });
    }
  };

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
        <div className="flex flex-row flex-wrap justify-left gap-8">
          <div className="flex flex-row justify-left gap-2">
            <div className="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className="hover:scale-110 duration-100 ease-in transition-transform"
                onClick={likeHandler}
              >
                {!isLiked && (
                  <path
                    fill="#EF2CC7"
                    d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"
                  />
                )}
                {isLiked && (
                  <path
                    fill="#EF2CC7"
                    d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"
                  />
                )}
              </svg>
            </div>
            <p className="text-2xl font-bold my-auto">
              {likesCount}
            </p>
          </div>
          <div className="flex flex-row justify-left gap-2">
            <div className="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className="hover:scale-110 duration-100 ease-in transition-transform"
              >
                <path
                  fill="#3BADF9"
                  d="M880 976 720 816H140q-23 0-41.5-18.5T80 756V236q0-23 18.5-41.5T140 176h680q24 0 42 18.5t18 41.5v740ZM140 236v520h605l75 75V236H140Zm0 0v595-595Z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold my-auto">
              {props.commentsCount}
            </p>
          </div>
        </div>
        <Link to={`/quizzes/${props.quiz.id}/start-playing`} className="btn btn-secondary mx-auto w-full max-w-64 md:w-auto mt-12">
          PLAY
        </Link>
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
