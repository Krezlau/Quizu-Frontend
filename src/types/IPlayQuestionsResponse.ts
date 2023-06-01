import IPlayQuestion from "./IPlayQuestion";

interface IPlayQuestionsResponse {
  questionsCount: number;
  answerTime_s: number;
  questions: IPlayQuestion[];
}

export default IPlayQuestionsResponse;
