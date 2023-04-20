import PageHeader from "../UI/PageHeader";
import { useParams } from "react-router-dom";
import SectionHeader from "../UI/SectionHeader";
import CommentForm from "../Forms/CommentForm";
import QuizDetailsCard from "../Quizzes/QuizDetailsCard";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import IQuizDetails from "../../types/IQuizDetails";

const QuizDetailsPage = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { fetchQuizDetails } = useHttp();
  const [quiz, setQuiz] = useState<IQuizDetails>();

  useEffect(() => {
    if (quizId) {
      fetchQuizDetails(quizId).then((r) => {
        if (r) {
          setQuiz(r);
        }
      });
    }
  }, []);
  return (
    <>
      <PageHeader text={"Quiz Details"} />
      {quiz ? <QuizDetailsCard quiz={quiz} /> : <p> Could not fetch quiz. </p>}
      <SectionHeader text={"About"} />
      <div className="card bg-neutral p-4 text-xl">
        {quiz && quiz.about && quiz.about.length > 0 ? (
          <p>{quiz.about}</p>
        ) : (
          <p className="italic text-gray-300">No about provided.</p>
        )}
      </div>
      <SectionHeader text={"Additional Info"} />
      <div className="card bg-neutral p-4 text-xl">
        <p>
          Coming soon! (stats)
        </p>
      </div>
      <SectionHeader text={"Comments"} />
      <CommentForm />
      <p>TODO Lista komentarzy tutaj, może infinite scroll??</p>
    </>
  );
};

export default QuizDetailsPage;
