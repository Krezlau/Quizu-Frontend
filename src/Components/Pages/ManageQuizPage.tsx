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
import useFetchQuestions from "../../hooks/useFetchQuestions";

const ManageQuizPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();
  const {
    isLoading: isLoadingQuestions,
    questions,
    renew
  } = useFetchQuestions();
  const userId = useSelector((state: IRootState) => state.auth.userId);

  if (quiz && quiz.authorId !== userId) {
    return <ForbiddenPage />;
  }

  return (
    <>
      <PageHeader text={"Manage Quiz"} />
      {isLoading && <LoadingSpinner size="xl" center={true} />}
      {quiz && !isLoading && <QuizManageCard quiz={quiz} />}
      {!quiz && !isLoading && <p>Could not fetch quiz.</p>}
      <SectionHeader text="Questions" />
      {quiz && <QuizNewQuestionForm quizId={quiz.id} onAdd={renew} />}
      {questions && !isLoadingQuestions && <QuizQuestionList questions={questions}/>}
    </>
  );
};

export default ManageQuizPage;
