import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import useHttpValidation from "../../hooks/useHttpValidation";
import useValidation from "../../hooks/useValidation";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";

const NewQuizForm = () => {
  const { isLoading, addQuiz } = useHttp();
  const navigate = useNavigate();
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

  const {isLoadingVal, availableMessage} = useHttpValidation(title, titleIsValid);

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    addQuiz(title, navigate);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col justify-center">
      <SectionHeader text={"Title"} centered={true} label={"title"} />
      <div className="flex flex-row gap-2 justify-center w-full mx-auto">
        <div className="w-5"></div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
          className="input w-full sm:max-w-md "
        />
        <div className="w-5">
          {isLoadingVal && <LoadingSpinner center={true}/>}
          {!isLoadingVal && availableMessage === "" && titleIsValid && (
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
          {!isLoadingVal && availableMessage !== "" && titleIsValid && (
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
      <ErrorText text={titleErrorMessage} />
      <ErrorText text={availableMessage} />
      <div className="mx-auto w-full sm:max-w-sm">
        <button
          className={`btn w-full mx-auto mt-12 ${
            isLoading || !titleIsValid || availableMessage !== ""
              ? "btn-disabled"
              : ""
          }`}
          type="submit"
        >
          {isLoading || isLoadingVal ? <LoadingSpinner /> : "Create"}
        </button>
      </div>
    </form>
  );
};

export default NewQuizForm;
