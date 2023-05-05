import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";
import QuizQuestionList from "../Quizzes/QuizQuestionList";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import QuizManageCard from "../Quizzes/QuizManageCard";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import ForbiddenPage from "./ForbiddenPage";
import QuizNewQuestionForm from "../Forms/QuizNewQuestionForm";

const ManageQuizPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();
  const userId = useSelector((state: IRootState) => state.auth.userId);

  if (quiz && quiz.authorId !== userId) {
    return <ForbiddenPage />
  }

  return (
    <>
      <PageHeader text={"Manage Quiz"} />
      { isLoading && <LoadingSpinner size="xl" center={true} />}
      {quiz && !isLoading && <QuizManageCard quiz={quiz} /> }
      {!quiz && !isLoading && <p>Could not fetch quiz.</p>}
      <SectionHeader text="Questions" />
      <QuizNewQuestionForm />
      <QuizQuestionList />
    </>
  );
};

export default ManageQuizPage;
