import IPlayAnswer from "./IPlayAnswer";

interface IPlayQuestion {
  id: string,
  content: string,
  answers: IPlayAnswer[],
}

export default IPlayQuestion;
