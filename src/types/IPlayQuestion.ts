import IPlayAnswer from "./IPlayAnswer";

interface IPlayQuestion {
  content: string,
  answers: IPlayAnswer[],
}

export default IPlayQuestion;
