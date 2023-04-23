import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IQuizDetails from "../types/IQuizDetails";
import useHttp from "./useHttp";

const useFetchQuizDetails = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchQuizDetails } = useHttp();
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

  return { quiz, isLoading };
};

export default useFetchQuizDetails;
