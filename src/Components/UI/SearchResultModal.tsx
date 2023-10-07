import IPageResponse from "../../types/IPageResponse";
import IQuiz from "../../types/IQuiz";
import LoadingSpinner from "./LoadingSpinner";
import SearchResultList from "./SearchResultList";
import { FormEvent } from "react";

const SearchResultModal: React.FC<{
  isOpen: boolean;
  closeFunc: (event: FormEvent) => void;
  isLoading: boolean;
  results: IPageResponse<IQuiz> | undefined | null;
  moreResultsFunc: (event: FormEvent) => void;
}> = (props) => {
  return (
    <>
      <SearchResultBackdrop isOpen={props.isOpen} closeFunc={props.closeFunc} />
      <div
        className={`${
          props.isOpen ? "sm:block" : ""
        } w-full max-w-2xl p-0 m-0 z-10 hidden`}
      >
        <div className="bg-neutral rounded-box p-4 w-full border-base-100 border-2">
          {(props.isLoading || !props.results) && (
            <div className="flex justify-center">
              <LoadingSpinner size="xl"/>
            </div>
          )}
          {!props.isLoading && props.results && (
            <>
              <SearchResultList results={props.results} closeFunc={props.closeFunc}/>
              <div className="flex justify-end">
                <button className="" onClick={props.moreResultsFunc}>
                  More Results...
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const SearchResultBackdrop: React.FC<{
  isOpen: boolean;
  closeFunc: (event: FormEvent) => void;
}> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "sm:block" : ""
      } hidden fixed top-16 left-0 w-full h-full bg-base-200 bg-opacity-50 z-0`}
      onClick={props.closeFunc}
    ></div>
  );
};

export default SearchResultModal;
