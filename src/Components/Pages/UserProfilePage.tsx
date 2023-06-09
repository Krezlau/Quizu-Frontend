import SectionHeader from "../UI/SectionHeader";
import QuizCarousel from "../Quizzes/QuizCarousel";
import ProfilePageHeading from "../UserProfile/ProfilePageHeading";
import UserInfo from "../UserProfile/UserInfo";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetchUserDetails from "../../hooks/useFetchUserDetails";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import IQuiz from "../../types/IQuiz";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const {isLoading, user} = useFetchUserDetails();
  const { userId } = useParams<{ userId?: string }>();

  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const { isLoading: quizzesLoading, fetchQuizzes } = useHttp();

  useEffect(() => {
    fetchQuizzes(1, 5, userId).then((r) => setQuizzes(r.queryResult));
  }, [fetchQuizzes]);

  return <>
    
    {isLoading && <LoadingSpinner center={true} />}
    {user && <ProfilePageHeading user={user}/>}
    {!isLoading && !user && <p className="text-center text-xl">Could not fetch user profile</p>}
    <SectionHeader text={"About"} />
    <div className="card bg-neutral p-4 px-12">
      {isLoading && <LoadingSpinner center={true}/>}
      {user && user.about && user.about.length > 0 && <p>{user.about}</p>}
      {user && (!user.about || user.about.length === 0) && <p className="italic text-warning">No about provided.</p>}
      {!isLoading && !user && <p>Could not fetch user profile.</p>}
    </div>
    {user && <UserInfo user={user}/> }
    <SectionHeader text={"Most Popular Quizzes"} />
    <QuizCarousel quizzes={quizzes} isLoading={quizzesLoading}/>
  </>
}

export default UserProfilePage;
