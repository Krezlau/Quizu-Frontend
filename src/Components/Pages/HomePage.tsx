import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import IQuiz from "../../types/IQuiz";
import QuizCarousel from "../Quizzes/QuizCarousel";
import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const { fetchQuizzes } = useHttp();
  useEffect(() => {
    setQuizzes(fetchQuizzes(1, 5));
  }, [fetchQuizzes]);

  return (
    <>
      <PageHeader text={"Hello, User! 👋"} />
      <SectionHeader text={"Recent Activity"} />
      <QuizCarousel quizzes={quizzes}/>
      <SectionHeader text={"Streak"} />
      <div className="card p-4 w-full h-64 bg-neutral">xd</div>
      <SectionHeader text={"Recommendations"} />
      <QuizCarousel quizzes={quizzes}/>
    </>
  );
};

export default HomePage;
