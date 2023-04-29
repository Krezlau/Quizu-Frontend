import SectionHeader from "../UI/SectionHeader";
import QuizCarousel from "../Quizzes/QuizCarousel";
import ProfilePageHeading from "../UserProfile/ProfilePageHeading";
import UserInfo from "../UserProfile/UserInfo";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetchUserDetails from "../../hooks/useFetchUserDetails";

const UserProfilePage = () => {
  const {isLoading, user} = useFetchUserDetails();

  return <>
    
    {isLoading && <LoadingSpinner center={true} />}
    {user && <ProfilePageHeading user={user}/>}
    {!isLoading && !user && <p className="text-center text-xl">Could not fetch user profile</p>}
    <SectionHeader text={"About"} />
    <div className="card bg-neutral p-4 px-12">
      {isLoading && <LoadingSpinner center={true}/>}
      {user && user.about && user.about.length > 0 && <p>{user.about}</p>}
      {user && (!user.about || user.about.length === 0) && <p className="italic text-gray-500">No about provided.</p>}
      {!isLoading && !user && <p>Could not fetch user profile.</p>}
    </div>
    {user && <UserInfo user={user}/> }
    <SectionHeader text={"Most Popular Quizzes"} />
    <QuizCarousel quizzes={[]}/>
  </>
}

export default UserProfilePage;
