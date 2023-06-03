import { useSelector } from "react-redux";
import usePostAnswers from "../../hooks/usePostAnswers";
import { IRootState } from "../../store";
import PageHeader from "../UI/PageHeader";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const PlayResultPage = () => {
  const results = useSelector((state: IRootState) => state.play);
  const timeTaken = results.timeTaken_s.reduce((a, b) => a + b, 0);
  const { endOfQuiz, isLoading } = usePostAnswers();

  useEffect(() => {
    if (results.isActive) endOfQuiz();
  }, [endOfQuiz, results.isActive]);

  return (
    <>
      <PageHeader text="Play Results" centered={true} />
      <div className="text-center text-xl mb-4">
        <p>Congratulations! You have completed the quiz.</p>
        <p>Here are your results:</p>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <div className="card bg-neutral p-4 text-center">
        <p className="text-3xl font-bold">{results.quizName}</p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 my-12 text-xl">
          <div className="my-auto">
            <p>Total Questions: {results.questions.length}</p>
            <p className="text-6xl text-primary font-extrabold">
              <p className="inline text-green-500">{results.correctCount}</p>/
              <p className="inline text-red-500">{results.incorrectCount}</p>/
              <p className="inline text-gray-500">{results.unansweredCount}</p>
            </p>
          </div>
          <div className="my-auto">
            <p>Time Taken</p>
            <p className="text-6xl text-primary font-extrabold">
              {timeTaken.toFixed(2)} s
            </p>
          </div>
          <div className="my-auto">
            <p>Score</p>
            <p className="text-6xl text-primary font-extrabold">
              {results.score.toFixed(0)}
            </p>
          </div>
        </div>
        <p>
          You've beaten{" "}
          <p className="text-2xl inline text-primary">
            {results.percentage.toFixed(2)}%
          </p>{" "}
          the players!
        </p>
      </div>}
    </>
  );
};

export default PlayResultPage;
