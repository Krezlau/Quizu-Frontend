import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../store";
import IQuestion from "../types/IQuestion";
import useHttp from "./useHttp";

const useFetchQuestions = () => {
  const { quizId } = useParams<{ quizId?: string }>();
  const { isLoading, fetchQuestions } = useHttp();
  const token = useSelector((state: IRootState) => state.auth.accessToken)
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
  }, [token]);

  return { questions, renew, isLoading };
};

export default useFetchQuestions;
