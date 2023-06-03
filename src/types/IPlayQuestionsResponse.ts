import IPlayQuestion from "./IPlayQuestion";

interface IPlayQuestionsResponse {
  quizName: string;
  quizId: string;
  questionsCount: number;
  answerTimeS: number;
  questions: IPlayQuestion[];
}

export default IPlayQuestionsResponse;
