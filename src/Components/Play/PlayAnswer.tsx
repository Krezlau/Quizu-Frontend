import IPlayAnswer from "../../types/IPlayAnswer";
import { useState } from "react";
import { playActions } from "../../store/play-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlayAnswer: React.FC<{
  num: number;
  answer: IPlayAnswer;
  canClick: boolean;
  hasNextQuestion: boolean;
}> = (props) => {
  const NOTCLICKED = 0;
  const CORRECT = 1;
  const INCORRECT = 2;
  const [correctstate, setCorrectState] = useState(NOTCLICKED);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // todo handle key shortcuts
  const handleClick = () => {
    if (!props.canClick) return;

    if (props.answer.isCorrect) {
      setCorrectState(CORRECT);
      dispatch(
        playActions.answerQuestion({ answerId: props.answer.id, score: 1000 })
      );
    } else {
      setCorrectState(INCORRECT);
      dispatch(
        playActions.answerQuestion({ answerId: props.answer.id, score: 0 })
      );
    }
    // next question after 2 seconds
    setTimeout(() => {
      setCorrectState(NOTCLICKED);
      if (!props.hasNextQuestion){
        navigate("/play/results");
        return;
      } 
      dispatch(playActions.nextQuestion());
    }, 2000);
  };

  return (
    <button
      className={`card p-4 md:h-32 transform transition duration-500 ease-in-out hover:scale-[1.05] hover:rotate-1 active:scale-[1.05] active:rotate-1 ${
        correctstate === NOTCLICKED
          ? "dark:bg-neutral bg-primary"
          : correctstate === CORRECT
          ? "bg-green-500 animate-bounce"
          : "bg-red-500"
      }`}
      onClick={handleClick}
      tabIndex={props.num}
    >
      <kbd className="absolute hidden md:kbd md:m-2 md:block">{props.num}</kbd>
      <p className="w-full my-auto text-center">{props.answer.content}</p>
    </button>
  );
};

export default PlayAnswer;
