import SearchResultModal from "../UI/SearchResultModal";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import useHttp from "../../hooks/useHttp";
import IPageResponse from "../../types/IPageResponse";
import IQuiz from "../../types/IQuiz";

const Search = () => {
  const { text: searchText, supressSearchWindow} = useSelector((state: IRootState) => state.search);
  const [resultsOpen, setResultsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, searchQuiz } = useHttp();
  const [results, setResults] = useState<IPageResponse<IQuiz> | null>();
  const navigate = useNavigate();

  // after 1 second of no typing, show the results

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.length > 2) {
        setResultsOpen(true);
        searchQuiz(searchText, 0, 5).then((res) => {
          setResults(res);
        });
      } else {
        setResultsOpen(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, supressSearchWindow]);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change({ text: e.target.value }));
    setResults(null);
    if (e.target.value.length === 0) {
      setResultsOpen(false);
    }
  };

  const moreResultsClickHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(searchActions.supress())
    setResultsOpen(false);

    navigate(`/search?Query=${searchText}`);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <form onSubmit={moreResultsClickHandler} className="form-control w-full flex flex-row justify-center max-w-2xl z-10">
        <input
          type="text"
          placeholder="Search"
          className="hidden input input-bordered opacity-60 w-full rounded-r-none sm:block "
          value={searchText}
          onChange={searchChangeHandler}
        />
        <button type="submit" className="hidden btn btn-circle opacity-60 rounded-l-none no-animation sm:block">
          <span className="material-symbols-outlined">search</span>
        </button>
        <Link
          to={"/search"}
          className="btn btn-circle ml-auto mr-0 btn-ghost sm:hidden"
        >
          <span className="material-symbols-outlined">search</span>
        </Link>
      </form>
      {
        <SearchResultModal
          isOpen={resultsOpen && !supressSearchWindow}
          closeFunc={() => {
            setResultsOpen(false);
          }}
          moreResultsFunc={moreResultsClickHandler}
          isLoading={isLoading ? isLoading : false}
          results={results}
        />
      }
    </div>
  );
};

export default Search;
