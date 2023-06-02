import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { playActions } from "../../store/play-slice";

const PlayTimer: React.FC<{time: number, isRunning: boolean, timeLeft: number, hasNextQuestion: boolean}> = (props) => {
  const dispatch = useDispatch();
  const [timesUp, setTimesUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isRunning && props.timeLeft <= 0) {
      setTimesUp(true);
      setTimeout(() => {
        setTimesUp(false);
        if (!props.hasNextQuestion) {
          navigate("/play/results");
        }
        dispatch(playActions.nextQuestion());
      }, 1000);
    }
    if (!props.isRunning) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(playActions.tick());
    }, 10);
    return () => clearTimeout(timer);
  }, [props.isRunning, props.timeLeft]);

  return (
    <>
    <div className="w-full flex flex-row justify-center py-4">
      <div className="w-full h-4 bg-gray-300 rounded-full">
        <div
          className={`h-full ${timesUp ? "bg-red-500" : "bg-green-500"} text-xs font-medium text-white text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${timesUp ? 100 : (props.timeLeft / props.time) * 100}%` }}
        ></div>
      </div>
    </div>
    </>
  );
};

export default PlayTimer;
