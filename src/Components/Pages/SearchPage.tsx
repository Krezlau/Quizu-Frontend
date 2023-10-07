import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { isLoading, searchQuiz } = useHttp();
  const [result, setResult] = useState<IPageResponse<IQuiz>>();

  // get query param
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("Query");

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change({ text: event.target.value }));
  };

  const submitSearchHandler = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/search?Query=${searchText}`);
  };

  useEffect(() => {
    if (search && search.length > 0) {
      searchQuiz(search, 0, 10).then((r) => setResult(r));
    }
  }, [search]);

  if (!search || search.length === 0) {
    return (
      <>
        <form onSubmit={submitSearchHandler} className="flex flex-row gap-2">
          <div className="w-16" />
          <input
            className="input input-bordered w-full sm:hidden"
            value={searchText}
            onChange={searchChangeHandler}
          />
          <button type="submit" className="btn btn-ghost btn-circle sm:hidden">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <SectionHeader
          text={`Search for quizzes. Just type in the search bar above.`}
          centered={true}
        />
      </>
    );
  }

  return (
    <>
      <form onSubmit={submitSearchHandler} className="flex flex-row gap-2">
        <div className="w-16" />
        <input
          className="input input-bordered w-full sm:hidden"
          value={searchText}
          onChange={searchChangeHandler}
        />
        <button type="submit" className="btn btn-ghost btn-circle sm:hidden">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      <SectionHeader text={`Search Results for "${search}"`} centered={true} />
      {!result && <LoadingSpinner center={true} />}
      {result && result.queryResult.length > 0 && (
        <QuizList
          quizzes={result && result.queryResult ? result.queryResult : []}
          isLoading={isLoading ? isLoading : false}
          loadMore={() => {
            searchQuiz("123", 0, 10).then((r) => setResult(r));
          }}
          isAllLoaded={result?.pageCount <= result?.pageNumber + 1}
        />
      )}
      {result && result.queryResult.length === 0 && (
        <p className="text-center">No quizzes found.</p>
      )}
    </>
  );
};

export default SearchPage;
