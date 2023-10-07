import PlayAnswerMock from "./PlayAnswerMock";

const PlayQuestionMock = () => {
  return (
    <div>
      <div className="card bg-primary dark:bg-neutral text-3xl font-bold text-center mb-4 p-4 md:h-64">
        <p className="my-auto">
          What is the tallest building in the world?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-5">
        <PlayAnswerMock num={1} content="Shanghai Tower" />
        <PlayAnswerMock num={2} content="Burj Khalifa" />
        <PlayAnswerMock num={3} content="Abraj Al Bait Clock Tower" />
        <PlayAnswerMock num={4} content="Lotte World Tower" />
      </div>
    </div>
  );
};

export default PlayQuestionMock;
