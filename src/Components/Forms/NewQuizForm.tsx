import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import useHttpValidation from "../../hooks/useHttpValidation";
import useValidation from "../../hooks/useValidation";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";
import ValidationWrapper from "../UI/ValidationWrapper";

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

  const { isLoadingVal, availableMessage } = useHttpValidation(
    title,
    titleIsValid,
    false
  );

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    addQuiz(title, navigate);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col justify-center">
      <SectionHeader text={"Title"} centered={true} label={"title"} />
      <ValidationWrapper
        isLoading={isLoadingVal ? isLoadingVal : false}
        isValid={titleIsValid}
        message={availableMessage}
      >
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
          className="input w-full sm:max-w-md "
        />
      </ValidationWrapper>
      <ErrorText text={titleErrorMessage} />
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
