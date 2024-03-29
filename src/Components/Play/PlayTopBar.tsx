import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import PlayPoints from "./PlayPoints";
import PlayQuestionCount from "./PlayQuestionCount";
import PlayTimer from "./PlayTimer";
import PlayTitle from "./PlayTitle";

const PlayTopBar = () => {
  const playState = useSelector((state: IRootState) => state.play);

  return (
    <div className="fixed left-0 bottom-0 md:static text-black dark:text-white flex flex-col w-full px-4 md:ml-4 md:mr-[5.25rem] md:mt-24">
      <div className="w-full card p-4 bg-primary dark:bg-neutral flex flex-col justify-between">
        <PlayTitle quizName={playState.quizName} />
        <div className="flex flex-col sm:flex-row justify-between">
          <PlayQuestionCount
            current={playState.questionNumber + 1}
            total={playState.questions.length}
          />
          <PlayPoints points={playState.score} />
        </div>
      </div>
      <PlayTimer
        time={playState.timeForAnswer_s}
        isRunning={playState.timer.isRunning}
        timeLeft={playState.timer.timeLeft_s}
        hasNextQuestion={
          playState.questionNumber < playState.questions.length - 1
        }
      />
    </div>
  );
};

export default PlayTopBar;
