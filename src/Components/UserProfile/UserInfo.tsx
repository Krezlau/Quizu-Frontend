import SectionHeader from "../UI/SectionHeader";

const UserInfo = () => {
  return <>
    <SectionHeader text={"User Info"}/>
    <div className="card bg-neutral p-4 sm:pl-12 grid grid-rows-5 gap-4">
      <div className="flex flex-row justify-left gap-8 row-start-1">
        <span className="badge text-xl sm:min-w-[8rem]">Email</span>
        <span className="">email@email.email</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-2">
        <span className="badge text-xl sm:min-w-[8rem]">Joined at</span>
        <span className="">march 2023</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-3">
        <span className="badge text-xl sm:min-w-[8rem]">Followers</span>
        <span className="">2137</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-4">
        <span className="badge text-xl sm:min-w-[8rem]">Quizzes</span>
        <span className="">12</span>
      </div>
      <div className="flex flex-row justify-left gap-8 row-start-5">
        <span className="badge text-xl sm:min-w-[8rem]">Location</span>
        <span className="">Poland</span>
      </div>
    </div>
  </>
}

export default UserInfo;
