const PlayTitle: React.FC<{quizName: string}> = (props) => {
  return <h1 className="text-2xl font-semibold text-center">{props.quizName}</h1>
}

export default PlayTitle;
