const PlayQuestion = () => {
  // card with question and 4 answers
  return <div className="card p-4 bg-neutral">
    <div className="text-2xl font-bold text-center mb-4">Question</div>
    <div className="grid grid-cols-2 gap-4">
      <button className="btn bg-base-100">Answer 1</button>
      <button className="btn bg-base-100">Answer 2</button>
      <button className="btn bg-base-100">Answer 3</button>
      <button className="btn bg-base-100">Answer 4</button>
    </div>
  </div>;

};

export default PlayQuestion;
