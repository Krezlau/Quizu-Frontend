import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";
import CommentForm from "../Forms/CommentForm";
import QuizDetailsCard from "../Quizzes/QuizDetailsCard";
import useFetchQuizDetails from "../../hooks/useFetchQuizDetails";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuizCommentList from "../Quizzes/QuizCommentList";
import useFetchComments from "../../hooks/useFetchComments";
import useHttp from "../../hooks/useHttp";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const QuizDetailsPage = () => {
  const { isLoading, quiz } = useFetchQuizDetails();
  const {
    isLoading: commentsLoading,
    isAllLoaded,
    comments,
    setComments,
    loadMore,
  } = useFetchComments();
  const { isLoading: addLoading, addNewComment } = useHttp();
  const auth = useSelector((state: IRootState) => state.auth);

  const addCommentHandler = (content: string) => {
    if (quiz)
    addNewComment(content, quiz.id).then((o) => {
      if (o) {
        setComments((s) => [
          ...s,
          {
            content: content,
            id: o,
            authorName: auth.username,
            authorId: auth.userId,
            createdAt: new Date(),
          },
        ]);
      }
    });
  };

  return (
    <>
      <PageHeader text={"Quiz Details"} />
      {isLoading && <LoadingSpinner size="xl" center={true} />}
      {quiz ? <QuizDetailsCard quiz={quiz} commentsCount={comments.length} /> : <p> Could not fetch quiz. </p>}
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
      <CommentForm onAdd={addCommentHandler} isLoading={addLoading ? addLoading : false} />
      <QuizCommentList
        comments={comments}
        loadMore={loadMore}
        isAllLoaded={isAllLoaded}
      />
    </>
  );
};

export default QuizDetailsPage;
