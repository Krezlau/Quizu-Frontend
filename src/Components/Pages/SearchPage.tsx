import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { searchActions } from "../../store/search-slice";
import QuizList from "../Quizzes/QuizList";
import SectionHeader from "../UI/SectionHeader";

const SearchPage = () => {
  const searchText = useSelector((state: IRootState) => state.search.text);
  const dispatch = useDispatch();

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.change({ text: event.target.value }));
  };

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
    </>
  );
};

export default SearchPage;
