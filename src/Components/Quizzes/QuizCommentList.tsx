import IComment from "../../types/IComment";
import QuizComment from "./QuizComment";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizCommentList: React.FC<{
  comments: IComment[];
  isAllLoaded: boolean;
  loadMore: () => void;
  onDelete: (id: string) => void;
  isDelLoading: boolean;
}> = (props) => {
  return (
    <InfiniteScroll
      next={props.loadMore}
      loader={<LoadingSpinner />}
      dataLength={props.comments ? props.comments.length : 0}
      hasMore={!props.isAllLoaded}
      endMessage={
        props.comments &&
        props.comments.length > 0 && (
          <p className="text-center text-xl italic text-warning">
            No more comments to load.
          </p>
        )
      }
    >
      <ul>
        {props.comments &&
          props.comments.length > 0 &&
          props.comments.map((c) => (
            <QuizComment
              key={c.id}
              comment={c}
              onDelete={props.onDelete}
              isDelLoading={props.isDelLoading}
            />
          ))}
        {(!props.comments || props.comments.length === 0) && (
          <p className="text-center text-xl italic text-warning">
            Currently no comments. Be the first!
          </p>
        )}
      </ul>
    </InfiniteScroll>
  );
};

export default QuizCommentList;
