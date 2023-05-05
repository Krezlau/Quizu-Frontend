import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IQuestion from "../types/IQuestion";
import useHttp from "./useHttp";

const useFetchQuestions = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchQuestions } = useHttp();
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const renew = () => {
    if (quizId) {
      fetchQuestions(quizId).then((r) => {
        if (r) {
          setQuestions(r);
        }
      });
    }
  };

  useEffect(() => {
    renew();
  }, []);

  return { questions, renew, isLoading };
};

export default useFetchQuestions;
