import SearchResultModal from "../UI/SearchResultModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

const Search = () => {
  const searchText = useSelector((state: IRootState) => state.search.text);
  const [resultsOpen, setResultsOpen] = useState(false);
  const dispatch = useDispatch();

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change({ text: e.target.value }));
    if (e.target.value.length > 0) {
      setResultsOpen(true);
    } else {
      setResultsOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="form-control w-full flex flex-row justify-center max-w-2xl z-10">
        <input
          type="text"
          placeholder="Search"
          className="hidden input input-bordered opacity-60 w-full rounded-r-none sm:block "
          value={searchText}
          onChange={searchChangeHandler}
        />
        <button className="hidden btn btn-circle opacity-60 rounded-l-none no-animation sm:block">
          <span className="material-symbols-outlined">search</span>
        </button>
        <Link
          to={"/search"}
          className="btn btn-circle ml-auto mr-0 btn-ghost sm:hidden"
        >
          <span className="material-symbols-outlined">search</span>
        </Link>
      </div>
      {
        <SearchResultModal
          isOpen={resultsOpen}
          closeFunc={() => {
            setResultsOpen(false);
          }}
        />
      }
    </div>
  );
};

export default Search;
