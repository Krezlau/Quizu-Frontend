import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../../store";
import IUserProfile from "../../types/IUserProfile";

const ProfilePageHeading: React.FC<{ user: IUserProfile }> = (props) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);

  return (
    <>
      <div className="flex flex-col justify-between sm:gap-8 sm:flex-row lg:px-32">
        <div className="avatar placeholder h-32 my-auto mx-auto">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
            <span className="text-6xl font-semibold">{props.user.username[0]}</span>
          </div>
        </div>
        <div className="w-full grid grid-rows-3">
          <div className="row-start-2">
            <h1 className="text-4xl font-bold border-b-2 w-full px-4">
              {props.user.username}
            </h1>
            <p className="px-4">
              {props.user.name} {props.user.surname}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 px-4 mt-8 sm:flex-row">
        <div className="mx-auto sm:mx-0">
          <Link
            to={`/user/${props.user.id}/quizzes`}
            className="btn btn-primary mr-8"
          >
            All Quizzes
          </Link>
          <Link to={`/user/${props.user.id}/stats`} className="btn btn-primary">
            Stats
          </Link>
        </div>
        {props.user.id === userId && (
          <Link
            to={`/user/${props.user.id}/edit`}
            className="btn btn-primary w-48 mx-auto sm:mx-0"
          >
            Edit my profile
          </Link>
        )}
      </div>
    </>
  );
};

export default ProfilePageHeading;
