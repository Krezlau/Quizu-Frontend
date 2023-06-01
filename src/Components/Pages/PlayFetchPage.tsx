import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import { playActions } from "../../store/play-slice";
import IPlayQuestionsResponse from "../../types/IPlayQuestionsResponse";
import LoadingSpinner from "../UI/LoadingSpinner";
import PageHeader from "../UI/PageHeader";

const PlayFetchPage = () => {
  const isActive = useSelector((state: IRootState) => state.play.isActive);
  const { fetchPlayQuestions, isLoading } = useHttp();
  const quizId = useParams<{ quizId: string }>().quizId;
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<IPlayQuestionsResponse>();

  // fetch questions
  useEffect(() => {
    if (quizId) {
      fetchPlayQuestions(quizId, dispatch).then(r => {
        if (!r) setError(true); 
        else setData(r);
      });
    }
    
  }, [fetchPlayQuestions, quizId]);

  useEffect(() => {
    if (error) navigate(`/quizzes/${quizId}/details`);
  }, [isLoading, isActive, navigate, quizId]);

  const playClickedHandler = () => {
    if (!data) return; 

    // TODO z copilotem
    // timer na 3 sekundy itp
    // some info about quiz

    dispatch(playActions.startPlaying(data));
    navigate(`/${quizId}/play`)
  }

  return <>
    <PageHeader text="Start playing"centered={true} />
    <div className="flex flex-col justify-center mx-auto w-full">
      <button onClick={playClickedHandler} className={`btn btn-primary mx-auto max-w-sm ${isLoading || !data ? "btn-disabled" : ""}`}>
        {isLoading ? <LoadingSpinner /> : "Play"}
      </button>
    </div>
  </>
}

export default PlayFetchPage;
