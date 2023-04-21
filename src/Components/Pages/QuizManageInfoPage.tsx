import PageHeader from "../UI/PageHeader";
import ManageQuizInfoForm from "../Forms/ManageQuizInfoForm";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizManageInfoPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();

  return (
    <>
      {isLoading && <LoadingSpinner center={true} size="xl" />}
      {quiz && !isLoading && (
        <>
          <PageHeader
            text={`Manage Quiz Info - ${quiz.title}`}
            centered={true}
          />
          <ManageQuizInfoForm quiz={quiz} />
        </>
      )}
      {!quiz && !isLoading && (
        <>
          <PageHeader text="404" centered={true} />
          <p className="text-xl text-center">Could not fetch quiz.</p>
        </>
      )}
    </>
  );
};

export default QuizManageInfoPage;
