import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import IQuiz from "../../types/IQuiz";
import QuizCarousel from "../Quizzes/QuizCarousel";
import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [recommended, setRecommended] = useState<IQuiz[]>([]);
  const { fetchQuizzes } = useHttp();
  useEffect(() => {
    fetchQuizzes(1, 5).then((r) => setQuizzes(r));
    fetchQuizzes(2, 5).then((r) => setRecommended(r));
  }, [fetchQuizzes]);

  return (
    <>
      <PageHeader text={"Hello, User! 👋"} />
      <SectionHeader text={"Recent Activity"} />
      <QuizCarousel quizzes={quizzes} />
      <SectionHeader text={"Streak"} />
      <div className="card p-4 w-full h-64 bg-neutral">xd</div>
      <SectionHeader text={"Recommendations"} />
      <QuizCarousel quizzes={recommended} />
    </>
  );
};

export default HomePage;
