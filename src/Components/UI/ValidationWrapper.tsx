import ErrorText from "./ErrorText";
import LoadingSpinner from "./LoadingSpinner";

const ValidationWrapper: React.FC<{
  isLoading: boolean;
  message: string;
  isValid: boolean;
  left?: boolean;
  children: React.ReactNode;
}> = (props) => {
  return (
    <>
      <div
        className={`flex flex-row gap-2 justify-center mx-auto w-full ${
          props.left ? "sm:mx-0 sm:w-auto" : ""
        }`}
      >
        {props.left ? <></> : <div className="w-5"></div>}
        {props.children}
        <div className="w-5">
          {props.isLoading && <LoadingSpinner center={true} />}
          {!props.isLoading && props.message === "" && props.isValid && (
            <svg
              className="scale-50"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path
                fill="green"
                d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z"
              />
            </svg>
          )}
          {!props.isLoading && props.message !== "" && props.isValid && (
            <svg
              className="scale-50"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path
                fill="red"
                d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
              />
            </svg>
          )}
        </div>
      </div>
      <ErrorText text={props.message} />
    </>
  );
};

export default ValidationWrapper;
