import { Link } from "react-router-dom";
import IComment from "../../types/IComment";

const QuizComment: React.FC<{ comment: IComment }> = (props) => {
  return (
    <li className="my-6">
      <div className="flex flex-row gap-4">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>
              {props.comment &&
              props.comment.authorName &&
              props.comment.authorName.length > 0
                ? props.comment.authorName[0]
                : "?"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <h3 className="text-md">
            <Link
              className="link link-accent link-hover hover:no-underline"
              to={`/user/${props.comment.authorId}/profile`}
            >
              {props.comment.authorName}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(props.comment.createdAt).toDateString()}
          </p>
        </div>
      </div>
      <p>{props.comment.content}</p>
    </li>
  );
};

export default QuizComment;
