import QuizList from "../Quizzes/QuizList";
import SectionHeader from "../UI/SectionHeader";

const SearchPage = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-16" />
        <input className="input input-bordered w-full sm:hidden" />
        <button className="btn btn-ghost btn-circle sm:hidden">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <SectionHeader text="Search Results" centered={true} />
      <QuizList
        quizzes={[
          { id: "jadksa", authorName: "xd", authorId: "sfa", title: "LMAOOOO" },
        ]}
      />
    </>
  );
};

export default SearchPage;
