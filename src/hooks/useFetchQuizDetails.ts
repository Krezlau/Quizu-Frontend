import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../store";
import IQuizDetails from "../types/IQuizDetails";
import useHttp from "./useHttp";

const useFetchQuizDetails = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchQuizDetails } = useHttp();
  const [quiz, setQuiz] = useState<IQuizDetails>();
  const token = useSelector((state: IRootState) => state.auth.accessToken)

  const fetch = () => {
    if (quizId) {
      fetchQuizDetails(quizId).then((r) => {
        if (r) {
          setQuiz(r);
        }
      });
    }
  }

  useEffect(() => {
    fetch();
  }, [token, quizId]);

  return { quiz, isLoading };
};

export default useFetchQuizDetails;
