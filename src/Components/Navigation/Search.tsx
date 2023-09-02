import SearchResultModal from "../UI/SearchResultModal";
import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [resultsOpen, setResultsOpen] = useState(false);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
        <button className="btn btn-circle ml-auto mr-0 btn-ghost sm:hidden">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      {<SearchResultModal isOpen={resultsOpen} closeFunc={() => {setResultsOpen(false);}}/>}
    </div>
  );
};

export default Search;
