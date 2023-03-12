import {Link} from "react-router-dom";

const ProfilePageHeading = () => {
  return <>
    <div className="flex flex-col justify-between sm:gap-8 sm:flex-row lg:px-32">
      <div className="avatar placeholder h-32 my-auto mx-auto">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
          <span>MX</span>
        </div>
      </div>
      <div className="w-full grid grid-rows-3">
        <div className="row-start-2">
          <h1 className="text-4xl font-bold border-b-2 w-full px-4">User</h1>
          <p className="px-4">Name Surname</p>
        </div>
      </div>

    </div>
    <div className="flex flex-col justify-between gap-8 px-4 sm:flex-row">
      <div className="mx-auto sm:mx-0">
        <Link to={"/user/{id}/quizzes"} className="btn mr-8">All Stories</Link>
        <Link to={"/user/{id}/stats"} className="btn">Stats</Link>
      </div>
      <Link to={"/user/{id}/edit"} className="btn w-48 mx-auto sm:mx-0">Edit my profile</Link>
    </div>
  </>
}

export default ProfilePageHeading;
