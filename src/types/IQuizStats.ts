interface IQuizStats {
  totalPlays: number;
  topScore: number;
  averageScore: number;
  averageTimeS: number;
  plotPoints: { score: number; count: number }[];
}

export default IQuizStats;
