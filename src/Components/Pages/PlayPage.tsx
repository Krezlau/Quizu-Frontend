import PlayPoints from "../Play/PlayPoints";
import PlayQuestion from "../Play/PlayQuestion";
import PlayTimer from "../Play/PlayTimer";
import PlayTitle from "../Play/PlayTitle";

const PlayPage = () => {
  return (
    <>
      <div>
        <div className="card p-4 bg-neutral flex flex-row justify-between">
          <PlayTitle />
          <PlayPoints />
        </div>
        <PlayTimer />
      </div>
      <PlayQuestion />
      <div>
      </div>
    </>
  );
};

export default PlayPage;
