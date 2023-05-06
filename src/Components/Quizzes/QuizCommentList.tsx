import IComment from "../../types/IComment";
import QuizComment from "./QuizComment";

const QuizCommentList: React.FC<{comments: IComment[]}> = (props) => {
  return <ul>
    {props.comments && props.comments.length > 0 && props.comments.map(c => <QuizComment key={c.id} comment={c}/>)}
    {(!props.comments || props.comments.length === 0) && <p>Currently no comments. Be the first!</p>}
  </ul>
}

export default QuizCommentList;
