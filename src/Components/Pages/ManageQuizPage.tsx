import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";
import QuizQuestionList from "../Quizzes/QuizQuestionList";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import QuizManageCard from "../Quizzes/QuizManageCard";

const ManageQuizPage = () => {
  const quiz = useFetchQuizDetails();

  return (
    <>
      <PageHeader text={"Manage Quiz"} />
      {quiz ? <QuizManageCard quiz={quiz} /> : <p>Could not fetch quiz.</p>}
      <SectionHeader text="Questions" />
      <QuizQuestionList />
    </>
  );
};

export default ManageQuizPage;
