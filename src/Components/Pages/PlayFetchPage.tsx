import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import LoadingSpinner from "../UI/LoadingSpinner";
import PageHeader from "../UI/PageHeader";

const PlayFetchPage = () => {
  const isActive = useSelector((state: IRootState) => state.play.isActive);
  const { fetchPlayQuestions, isLoading } = useHttp();
  const quizId = useParams<{ quizId: string }>().quizId;
  const navigate = useNavigate();
  const [error, setError] = useState(false);


  // fetch questions
  useEffect(() => {
    if (quizId) {
      fetchPlayQuestions(quizId).then(r => {
        if (!r) setError(true); 
      });
    }
    
  }, [fetchPlayQuestions, quizId]);

  useEffect(() => {
    if (!isLoading && isActive) {
      navigate(`/${quizId}/play`);
    }
    if (error) navigate(`/quizzes/${quizId}/details`);
  }, [isLoading, isActive, navigate, quizId]);

  return <>
    <PageHeader text="Starting play mode..."/>
    <LoadingSpinner />
  </>
}

export default PlayFetchPage;
