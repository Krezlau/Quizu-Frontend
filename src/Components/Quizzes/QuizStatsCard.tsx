import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import IQuizStats from "../../types/IQuizStats";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizStatsCard: React.FC<{
  isLoading: boolean;
  stats: IQuizStats | undefined;
}> = (props) => {
  return (
    <div className="card bg-neutral p-4 text-xl">
      {props.isLoading && <LoadingSpinner size="xl" center={true} />}
      {!props.isLoading && props.stats && (
        <>
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">TOTAL PLAYS</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.totalPlays}
              </span>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">AVERAGE SCORE</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.averageScore}
              </span>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">AVERAGE TIME</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.averageTimeS.toFixed(2)} s
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-col mx-auto text-center my-auto">
              <span className="text-4xl font-bold">TOP SCORE</span>
              <span className="text-8xl font-extrabold text-primary">
                {props.stats.topScore}
              </span>
            </div>
            <div>
              <p className="text-center mb-4">Score chart</p>
              <BarChart data={props.stats.plotPoints} width={730} height={250}>
                <XAxis dataKey="score" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizStatsCard;
