import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../store";
import { playActions } from "../store/play-slice";
import useHttp from "./useHttp";

const usePostAnswers = () => {
  const playState = useSelector((state: IRootState) => state.play);
  const { postPlayAnswers } = useHttp();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const endOfQuiz = async () => {
    postPlayAnswers(
      playState.quizId,
      playState.score,
      playState.userAnswers,
      playState.timeTaken_s
    ).then((r) => {
      if (r) {
        // store in some state?
      }
      navigate("/play/results");
    });

    dispatch(playActions.stopPlaying());
  };

  return endOfQuiz;
};

export default usePostAnswers;
