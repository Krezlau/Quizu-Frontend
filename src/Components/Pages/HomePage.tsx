import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import IQuiz from "../../types/IQuiz";
import QuizCarousel from "../Quizzes/QuizCarousel";
import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const { isLoading, fetchQuizzes } = useHttp();
  const username = useSelector((state: IRootState) => state.auth.username);

  useEffect(() => {
    fetchQuizzes(1, 5).then((r) => setQuizzes(r.queryResult));
  }, [fetchQuizzes]);

  return (
    <>
      <PageHeader text={`Hello, ${username}! 👋`} />
      <SectionHeader text={"Recent Quizzes"} />
      <QuizCarousel quizzes={quizzes} isLoading={isLoading}/>
    </>
  );
};

export default HomePage;
