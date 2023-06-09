import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../../store";
import IComment from "../../types/IComment";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizComment: React.FC<{
  comment: IComment;
  isDelLoading: boolean;
  onDelete: (id: string) => void;
}> = (props) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);

  const canDelete = userId === props.comment.authorId;

  const deleteHandler = () => {
    props.onDelete(props.comment.id);
  };

  return (
    <li className="my-6">
      <div className="flex flex-row justify-between">
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
            <p className="text-sm text-warning">
              {new Date(props.comment.createdAt).toDateString()}
            </p>
          </div>
        </div>
        <div className="py-auto px-10">
          {canDelete && !props.isDelLoading && (
            <svg
              className="my-3 hover:scale-125 duration-100 ease-in transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 96 960 960"
              width="24"
              onClick={deleteHandler}
            >
              <path
                fill="white"
                d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z"
              />
            </svg>
          )}
          {canDelete && props.isDelLoading && <LoadingSpinner />}
        </div>
      </div>
      <p>{props.comment.content}</p>
    </li>
  );
};

export default QuizComment;
