import IAnswer from "./IAnswer";

interface IQuestion {
  content: string,
  quizId: string,
  answers: IAnswer[],
}

export default IQuestion;
