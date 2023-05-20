import { FormEvent } from "react";
import useValidation from "../../hooks/useValidation";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";

const CommentForm: React.FC<{
  onAdd: (content: string) => void;
  isLoading: boolean;
}> = (props) => {
  const {
    value: content,
    inputBlurHandler: contentBlurHandler,
    errorMessage: contentErrorMessage,
    valueChangeHandler: contentChangeHandler,
    isValid: contentIsValid,
    reset: contentReset,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Comment is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 1000,
    "Comment is too long. Must be no longer than 1000 characters."
  );

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (contentIsValid) {
      props.onAdd(content);
    }
  };

  const cancelHandler = () => {
    contentReset();
  }

  return (
    <form className="w-full pb-4" onSubmit={submitHandler}>
      <textarea
        className="input input-ghost w-full border-t-0 border-x-0 border-b-2 border-b-primary resize-none"
        placeholder={"Add a comment..."}
        id="comment"
        value={content}
        onChange={contentChangeHandler}
        onBlur={contentBlurHandler}
      />
      <div className="flex flex-col my-4 md:flex-row justify-between">
        <ErrorText text={contentErrorMessage} verticalCenter={true} />
        <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-8">
          <button
            type="button"
            onClick={cancelHandler}
            className="btn btn-neutral w-full md:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`btn btn-primary w-full md:w-auto ${
              props.isLoading || !contentIsValid ? "btn-disabled" : ""
            }`}
          >
            {props.isLoading ? <LoadingSpinner /> : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
