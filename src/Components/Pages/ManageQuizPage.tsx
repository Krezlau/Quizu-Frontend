import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";
import QuizQuestionList from "../Quizzes/QuizQuestionList";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import QuizManageCard from "../Quizzes/QuizManageCard";
import LoadingSpinner from "../UI/LoadingSpinner";

const ManageQuizPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();

  return (
    <>
      <PageHeader text={"Manage Quiz"} />
      { isLoading && <LoadingSpinner size="xl" center={true} />}
      {quiz && !isLoading && <QuizManageCard quiz={quiz} /> }
      {!quiz && !isLoading && <p>Could not fetch quiz.</p>}
      <SectionHeader text="Questions" />
      <QuizQuestionList />
    </>
  );
};

export default ManageQuizPage;
