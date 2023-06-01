const PlayPoints: React.FC<{ points: number }> = (props) => {
  return <div className="text-2xl font-bold">{props.points} Points</div>;
};

export default PlayPoints;
