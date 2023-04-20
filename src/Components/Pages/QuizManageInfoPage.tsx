import PageHeader from "../UI/PageHeader";
import ManageQuizInfoForm from "../Forms/ManageQuizInfoForm";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";

const QuizManageInfoPage = () => {
  const quiz = useFetchQuizDetails();

  return (
  <>
      {quiz ? (
      <>
      <PageHeader text={`Manage Quiz Info - ${quiz.title}`} centered={true} />
      <ManageQuizInfoForm quiz={quiz}/>
      </>
      ) : (
      <>
      <PageHeader text="404" centered={true} />
      <p className="text-xl text-center">Could not fetch quiz.</p>
      </>
      )}
  </>
  );
};

export default QuizManageInfoPage;
