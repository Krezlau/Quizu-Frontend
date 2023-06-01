import IPlayAnswer from "../../types/IPlayAnswer";

const PlayAnswer: React.FC<{num: number, answer: IPlayAnswer}> = (props) => {
  return (
    <button className="card bg-neutral p-4 md:h-32 transform transition duration-500 ease-in-out hover:scale-[1.05]">
      <kbd className="absolute hidden md:kbd md:m-2 md:block">{props.num}</kbd>
      <p className="w-full my-auto text-center">{props.answer.content}</p>
    </button>
  );
};

export default PlayAnswer;
