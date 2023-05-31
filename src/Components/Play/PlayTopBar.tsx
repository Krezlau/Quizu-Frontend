import PlayPoints from "./PlayPoints";
import PlayQuestionCount from "./PlayQuestionCount";
import PlayTimer from "./PlayTimer";
import PlayTitle from "./PlayTitle";

const PlayTopBar = () => {
  return (
    <div className="flex flex-col w-full mx-4 mt-24">
      <div className="w-full card p-4 bg-neutral flex flex-col justify-between">
        <PlayTitle />
        <div className="flex flex-row justify-between">
          <PlayQuestionCount />
          <PlayPoints />
        </div>
      </div>
      <PlayTimer />
    </div>
  );
};

export default PlayTopBar;
