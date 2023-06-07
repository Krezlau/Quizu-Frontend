import { ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import IQuizStats from "../../types/IQuizStats";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizStatsCard: React.FC<{
  isLoading: boolean;
  stats: IQuizStats | undefined;
}> = (props) => {
  return (
    <div className="card bg-neutral p-4 text-xl">
      {!props.isLoading && props.stats && props.stats.totalPlays === 0 && (
        <p className="text-center text-2xl my-2">
          This quiz has not been played yet. Be the first!
        </p>
      )}
      {props.isLoading && <LoadingSpinner size="xl" center={true} />}
      {!props.isLoading && props.stats && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-3 my-6">
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">TOTAL PLAYS</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.totalPlays}
              </span>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">AVERAGE SCORE</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.averageScore.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <span className="text-2xl font-bold">AVERAGE TIME</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.averageTimeS.toFixed(2)} s
              </span>
            </div>
            <div className="lg:hidden flex flex-col mx-auto text-center my-auto">
              <span className="text-2xl font-bold">TOP SCORE</span>
              <span className="text-6xl font-extrabold text-primary">
                {props.stats.topScore.toFixed(0)}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-6">
            <div className="hidden lg:flex flex-col mx-auto text-center my-auto">
              <span className="text-4xl font-bold">TOP SCORE</span>
              <span className="text-8xl font-extrabold text-primary">
                {props.stats.topScore.toFixed(0)}
              </span>
            </div>
            {props.stats.totalPlays > 0 && (
              <div className="w-full lg:w-3/5 p-0">
                <p className="text-center text-2xl font-bold mb-4">SCORE CHART</p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={props.stats.plotPoints}
                    margin={{top:0,right:0,bottom:0,left:0}}
                  >
                    <XAxis dataKey="score" />
                    <YAxis allowDecimals={false} width={40}/>
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizStatsCard;
