import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import { playActions } from "../../store/play-slice";
import IPlayQuestionsResponse from "../../types/IPlayQuestionsResponse";
import PlayInfoCard from "../Play/PlayInfoCard";
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
  const [countdown, setCountdown] = useState(3);
  const [countdownActive, setCountdownActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // fetch questions
  useEffect(() => {
    if (quizId) {
      fetchPlayQuestions(quizId).then((r) => {
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
    if (isClicked) return;

    setIsClicked(true);

    // start playing after 3 seconds
    // but with state to display countdown
    setCountdownActive(true);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      // todo check if user still on page
      clearInterval(interval);
      dispatch(playActions.startPlaying(data));
      navigate(`/${quizId}/play`);
    }, 4000);
  };

  return (
    <>
      <PageHeader
        text={`Start playing ${data ? data.quizName : ""}`}
        centered={true}
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && <PlayInfoCard info={data} />}
      <div className="flex flex-col justify-center mx-auto w-full">
        <button
          onClick={playClickedHandler}
          className={`btn btn-primary mx-auto my-6 max-w-sm ${
            isLoading || !data ? "btn-disabled" : ""
          }`}
        >
          {isLoading ? <LoadingSpinner /> : "Play"}
        </button>
      </div>
      <div className="flex flex-col justify-center mx-auto">
        {countdownActive && <p className="mx-auto my-6 w-16 text-center font-bold text-6xl animate-ping">
          {countdownActive && `${countdown < 1 ? "Go!" : countdown}`}
        </p>}
      </div>
    </>
  );
};

export default PlayFetchPage;
