import PlayAnswer from "./PlayAnswer";

const PlayQuestion = () => {
  // card with question and 4 answers
  return <div className="">
    <div className="card bg-neutral text-3xl font-bold text-center mb-4 p-4 h-64">
      <p className="my-auto">Question?</p>
    </div>
    <div className="grid grid-cols-2 gap-2 sm:gap-5">
      <PlayAnswer />
      <PlayAnswer />
      <PlayAnswer />
      <PlayAnswer />
    </div>
  </div>;

};

export default PlayQuestion;
