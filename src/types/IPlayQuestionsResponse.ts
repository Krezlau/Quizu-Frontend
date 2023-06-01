import IPlayQuestion from "./IPlayQuestion";

interface IPlayQuestionsResponse {
  quizName: string;
  questionsCount: number;
  answerTimeS: number;
  questions: IPlayQuestion[];
}

export default IPlayQuestionsResponse;
