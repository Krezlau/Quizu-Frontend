const PlayQuestionCount: React.FC<{current: number, total: number}> = (props) => {
  return <p>{props.current}/{props.total}</p>;
};

export default PlayQuestionCount;
