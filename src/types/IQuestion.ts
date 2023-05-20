import IAnswer from "./IAnswer";

interface IQuestion {
  id?: string,
  content: string,
  quizId: string,
  answers: IAnswer[],
}

export default IQuestion;
