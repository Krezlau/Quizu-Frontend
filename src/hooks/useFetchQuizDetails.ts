import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../store";
import IQuizDetails from "../types/IQuizDetails";
import IQuizStats from "../types/IQuizStats";
import useHttp from "./useHttp";

const useFetchQuizDetails = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchQuizDetails, fetchPlayStats } = useHttp();
  const [stats, setStats] = useState<IQuizStats>();;
  const [quiz, setQuiz] = useState<IQuizDetails>();
  const token = useSelector((state: IRootState) => state.auth.accessToken)

  const fetch = () => {
    if (quizId) {
      fetchQuizDetails(quizId).then((r) => {
        if (r) {
          setQuiz(r);
        }
      });
      fetchPlayStats(quizId).then((o) => setStats(o));
    }
  }

  useEffect(() => {
    fetch();
  }, [token, quizId, fetchQuizDetails, fetchPlayStats]);

  return { quiz, isLoading, stats };
};

export default useFetchQuizDetails;
