import IQuiz from "./IQuiz";

interface IQuizDetails extends IQuiz {
  isPlayAllowed: boolean;
  about: string;
  questionsPerPlay: number;
  answerTimeS: number;
}

export default IQuizDetails;

