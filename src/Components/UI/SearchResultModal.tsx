import SearchResultList from "./SearchResultList";

const SearchResultModal: React.FC<{text: string, title: string, buttonFunc: () => void}> = (props) => {
  return (
    <>
      <SearchResultBackdrop />
      <div className="w-full max-w-2xl p-0 m-0 z-10">
        <div className="bg-neutral rounded-box p-4 w-full border-base-100 border-2">
          <SearchResultList />
          <div className="flex justify-end">
            <button className="" onClick={props.buttonFunc}>More Results...</button>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchResultBackdrop: React.FC = () => {
  return (
    <div className="fixed top-16 left-0 w-full h-full bg-base-200 bg-opacity-50 z-0"></div>
  );
};

export default SearchResultModal;
