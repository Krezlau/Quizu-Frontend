const PlayAnswerMock: React.FC<{num: number, content: string}> = (props) => {
  return (
    <button
      className={`card p-4 md:h-32 transform transition duration-500 ease-in-out hover:scale-[1.05] hover:rotate-1 bg-neutral`}
      tabIndex={props.num}
    >
      <kbd className="absolute hidden md:kbd md:m-2 md:block">{props.num}</kbd>
      <p className="w-full my-auto text-center">{props.content}</p>
    </button>
  );
}

export default PlayAnswerMock;
