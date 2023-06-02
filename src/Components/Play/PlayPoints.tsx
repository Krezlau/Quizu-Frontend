const PlayPoints: React.FC<{ points: number }> = (props) => {
  return <div className="text-2xl font-bold">{props.points.toFixed(0)} Points</div>;
};

export default PlayPoints;
