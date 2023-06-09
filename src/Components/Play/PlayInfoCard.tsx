import IPlayQuestionsResponse from "../../types/IPlayQuestionsResponse";

const PlayInfoCard: React.FC<{info: IPlayQuestionsResponse}> = (props) => {
  return <div className="card bg-neutral p-4">
    <p>Questions: {props.info.questions.length}</p>
    <p>Time per question: {props.info.answerTimeS} s</p>
  </div>
}

export default PlayInfoCard;
