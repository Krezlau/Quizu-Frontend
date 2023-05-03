import PageHeader from "../UI/PageHeader";
import QuizList from "../Quizzes/QuizList";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import IQuiz from "../../types/IQuiz";
import { useParams } from "react-router-dom";

const UserQuizzesPage = () => {
  const { isLoading, fetchQuizzes } = useHttp();
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const { userId } = useParams<{ userId?: string }>();
  const [page, setPage] = useState(2);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    fetchQuizzes(1, 5, userId).then((r) => {
      setQuizzes(r.queryResult);
      if (r.pageCount === 1) setIsAllLoaded(true);
    });
  }, [fetchQuizzes]);

  const loadMore = () => {
    fetchQuizzes(page, 5, userId).then((r) => {
      setQuizzes((state) => state.concat(r.queryResult));
      if (r.pageCount === page) setIsAllLoaded(true);
    });
    setPage((page) => page + 1);
  };

  return (
    <>
      <PageHeader text={"Quizzes of User"} />
      <QuizList
        quizzes={quizzes ? quizzes : []}
        isLoading={isLoading ? isLoading : false}
        loadMore={loadMore}
        isAllLoaded={isAllLoaded}
      />
    </>
  );
};

export default UserQuizzesPage;
