import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import IQuiz from "../../types/IQuiz";
import LoadingSpinner from "../UI/LoadingSpinner";
import Quiz from "./Quiz";

const QuizList: React.FC<{
  quizzes: IQuiz[];
  isLoading: boolean;
  loadMore: () => void;
  isAllLoaded: boolean;
}> = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <InfiniteScroll
        dataLength={props.quizzes ? props.quizzes.length : 0}
        next={props.loadMore}
        hasMore={!props.isAllLoaded}
        loader={<LoadingSpinner />}
        endMessage={
          <p className="italic text-xl text-center">That's all quizzes.</p>
        }
        className="p-4"
      >
        <ul className="p-4">
          {props.quizzes.map((q) => (
            <li key={q.id} className="py-2">
              <Quiz quiz={q} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default QuizList;
