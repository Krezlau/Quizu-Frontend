import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../store";
import { playActions } from "../store/play-slice";
import { useDispatch } from "react-redux";
import useHttp from "./useHttp";
import { useCallback } from "react";

const usePostAnswers = () => {
  const playState = useSelector((state: IRootState) => state.play);
  const { postPlayAnswers, isLoading } = useHttp();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const endOfQuiz = useCallback (() => {
    console.log(playState);
    postPlayAnswers(
      playState.quizId,
      playState.score,
      playState.userAnswers,
      playState.timeTaken_s,
      playState.questions.map((q) => q.id)
    ).then((r) => {
      console.log(r);
      dispatch(playActions.setPercentage(r));
      dispatch(playActions.stopPlaying());
      if(!r){
          navigate(`/quizzes/${playState.quizId}/details`)
        }
    });
  }, []);

  return { isLoading, endOfQuiz };
};

export default usePostAnswers;
