import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import PlayAnswer from "./PlayAnswer";

const PlayQuestion = () => {
  const playState = useSelector((state:IRootState) => state.play)
  const currentAnswers = playState.questions[playState.questionNumber].answers;
  // card with question and 4 answers
  return <div className="">
    <div className="card bg-neutral text-3xl font-bold text-center mb-4 p-4 md:h-64">
      <p className="my-auto">{playState.questions[playState.questionNumber].content}</p>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-5">
      <PlayAnswer num={1} answer={currentAnswers[0]}/>
      <PlayAnswer num={2} answer={currentAnswers[1]}/>
      {currentAnswers.length > 2 && <PlayAnswer num={3} answer={currentAnswers[2]}/>}
      {currentAnswers.length > 3 && <PlayAnswer num={4} answer={currentAnswers[3]}/>}
    </div>
  </div>;

};

export default PlayQuestion;
