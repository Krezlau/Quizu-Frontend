import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";
import CommentForm from "../Forms/CommentForm";
import QuizDetailsCard from "../Quizzes/QuizDetailsCard";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizDetailsPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();

  return (
    <>
      <PageHeader text={"Quiz Details"} />
      {isLoading && <LoadingSpinner size="xl" center={true}/>}
      {quiz ? <QuizDetailsCard quiz={quiz} /> : <p> Could not fetch quiz. </p>}
      <SectionHeader text={"About"} />
      <div className="card bg-neutral p-4 text-xl">
        {isLoading && <LoadingSpinner size="xl" center={true} />}
        {quiz && quiz.about && quiz.about.length > 0 ? (
          <p>{quiz.about}</p>
        ) : (
          <p className="italic text-gray-300">No about provided.</p>
        )}
      </div>
      <SectionHeader text={"Additional Info"} />
      <div className="card bg-neutral p-4 text-xl">
        {isLoading && <LoadingSpinner size="xl" center={true} />}
        <p>Coming soon! (stats)</p>
      </div>
      <SectionHeader text={"Comments"} />
      <CommentForm />
      <p>TODO Lista komentarzy tutaj, może infinite scroll??</p>
    </>
  );
};

export default QuizDetailsPage;
