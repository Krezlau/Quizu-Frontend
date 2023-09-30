import IPageResponse from "../../types/IPageResponse";
import IQuiz from "../../types/IQuiz";
import QuizSearchResult from "../Quizzes/QuizSearchResult";
import { FormEvent } from "react";

const SearchResultList: React.FC<{
  results: IPageResponse<IQuiz>;
  closeFunc: (event: FormEvent) => void;
}> = (props) => {
  return (
    <ul className="flex flex-col gap-2 pb-2">
      {props.results.queryResult.length > 0 &&
        props.results.queryResult.map((q) => (
          <QuizSearchResult
            key={q.id}
            title={q.title}
            id={q.id}
            likesCount={q.likesCount}
            playsCount={q.playsCount}
            tags={q.tagNames}
            commentsCount={q.commentsCount}
            closeFunc={props.closeFunc}
          />
        ))}
      {props.results.queryResult.length === 0 && <p>No results found</p>}
    </ul>
  );
};

export default SearchResultList;
