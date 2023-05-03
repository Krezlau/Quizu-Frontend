import React from "react";
import IUserProfile from "../../types/IUserProfile";
import SectionHeader from "../UI/SectionHeader";

const UserInfo: React.FC<{user: IUserProfile}> = (props) => {
  return <>
    <SectionHeader text={"User Info"}/>
    <div className="card bg-neutral p-4 sm:pl-12 grid grid-rows-5 gap-4">
      <div className="flex flex-row justify-left gap-8 row-start-1">
        <span className="badge text-xl sm:min-w-[8rem]">Email</span>
        <span className="">{props.user.email}</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-2">
        <span className="badge text-xl sm:min-w-[8rem]">Joined at</span>
        <span className="">{props.user.joinedAt.toString()}</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-3">
        <span className="badge text-xl sm:min-w-[8rem]">Followers</span>
        <span className="">{props.user.followersCount}</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-4">
        <span className="badge text-xl sm:min-w-[8rem]">Quizzes</span>
        <span className="">{props.user.quizzesCount}</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-5">
        <span className="badge text-xl sm:min-w-[8rem]">Location</span>
        <span className="">{props.user.location}</span>
      </div>
    </div>
  </>
}

export default UserInfo;
