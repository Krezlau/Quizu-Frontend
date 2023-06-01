import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import PlayPoints from "./PlayPoints";
import PlayQuestionCount from "./PlayQuestionCount";
import PlayTimer from "./PlayTimer";
import PlayTitle from "./PlayTitle";

const PlayTopBar = () => {
  const playState = useSelector((state: IRootState) => state.play)

  return (
    <div className="fixed left-0 bottom-0 md:static flex flex-col w-full px-4 md:mx-4 md:mt-24">
      <div className="w-full card p-4 bg-neutral flex flex-col justify-between">
        <PlayTitle quizName={playState.quizName}/>
        <div className="flex flex-col sm:flex-row justify-between">
          <PlayQuestionCount current={playState.questionNumber + 1} total={playState.questions.length}/>
          <PlayPoints points={playState.score}/>
        </div>
      </div>
      <PlayTimer time={playState.timeForAnswer_s} />
    </div>
  );
};

export default PlayTopBar;
