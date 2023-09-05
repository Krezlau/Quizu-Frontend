import QuizSearchResult from "../Quizzes/QuizSearchResult";

const SearchResultList = () => {
  return <ul className="flex flex-col gap-2 pb-2">
    <QuizSearchResult />
    <QuizSearchResult />
    <QuizSearchResult />
    <QuizSearchResult />
  </ul>;
}

export default SearchResultList;
