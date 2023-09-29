import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { IRootState } from "../../store";
import { searchActions } from "../../store/search-slice";
import IPageResponse from "../../types/IPageResponse";
import IQuiz from "../../types/IQuiz";
import QuizList from "../Quizzes/QuizList";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";

const SearchPage = () => {
  const searchText = useSelector((state: IRootState) => state.search.text);
  const dispatch = useDispatch();
  const { isLoading, searchQuiz } = useHttp();
  const [result, setResult] = useState<IPageResponse<IQuiz>>();

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change({ text: event.target.value }));
  };

  useEffect(() => {
    if (searchText.length > 0) {
      searchQuiz("123", 0, 10).then((r) => setResult(r));
    }
  }, [searchText]);

  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-16" />
        <input
          className="input input-bordered w-full sm:hidden"
          value={searchText}
          onChange={searchChangeHandler}
        />
        <button className="btn btn-ghost btn-circle sm:hidden">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <SectionHeader text="Search Results" centered={true} />
      {!result && <LoadingSpinner center={true} />}
      {result && (
        <QuizList
          quizzes={result && result.queryResult ? result.queryResult : []}
          isLoading={isLoading ? isLoading : false}
          loadMore={() => {
            searchQuiz("123", 0, 10).then((r) => setResult(r));
          }}
          isAllLoaded={result?.pageCount <= result?.pageNumber + 1}
        />
      )}
    </>
  );
};

export default SearchPage;
