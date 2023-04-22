import { FormEvent } from "react";
import useHttp from "../../hooks/useHttp";
import useValidation from "../../hooks/useValidation";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";

const NewQuizForm = () => {
  const { isLoading, addQuiz } = useHttp();
  const {
    value: title,
    inputBlurHandler: titleBlurHandler,
    errorMessage: titleErrorMessage,
    valueChangeHandler: titleChangeHandler,
    isValid: titleIsValid,
  } = useValidation(
    "",
    (v) => v.trim().length >= 5,
    "Title is too short. Must be at least 5 characters long.",
    (v) => v.trim().length <= 100,
    "Title is too long. Must be no longer than 100 characters."
  );

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    addQuiz(title);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col justify-center">
      <SectionHeader text={"Title"} centered={true} label={"title"} />
      <input
        type="text"
        id="title"
        value={title}
        onChange={titleChangeHandler}
        onBlur={titleBlurHandler}
        className="input w-full mx-auto sm:max-w-md"
      />
      <ErrorText text={titleErrorMessage} />
      <div className="mx-auto w-full sm:max-w-sm">
        <button
          className={`btn w-full mx-auto mt-12 ${
            isLoading || !titleIsValid ? "btn-disabled" : ""
          }`}
          type="submit"
        >
          {isLoading ? <LoadingSpinner /> : "Create"}
        </button>
      </div>
    </form>
  );
};

export default NewQuizForm;
