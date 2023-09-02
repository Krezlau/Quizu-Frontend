import SearchResultList from "./SearchResultList";

const SearchResultModal: React.FC<{
  isOpen: boolean;
  closeFunc: () => void;
}> = (props) => {
  return (
    <>
      <SearchResultBackdrop isOpen={props.isOpen} closeFunc={props.closeFunc} />
      <div
        className={`${
          props.isOpen ? "" : "hidden"
        } w-full max-w-2xl p-0 m-0 z-10`}
      >
        <div className="bg-neutral rounded-box p-4 w-full border-base-100 border-2">
          <SearchResultList />
          <div className="flex justify-end">
            <button className="" onClick={props.closeFunc}>
              More Results...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchResultBackdrop: React.FC<{
  isOpen: boolean;
  closeFunc: () => void;
}> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "" : "hidden"
      } fixed top-16 left-0 w-full h-full bg-base-200 bg-opacity-50 z-0`}
      onClick={props.closeFunc}
    ></div>
  );
};

export default SearchResultModal;
