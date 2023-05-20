import React, { FormEvent, useState } from "react";
import useHttp from "../../hooks/useHttp";
import useValidation from "../../hooks/useValidation";
import IAnswer from "../../types/IAnswer";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuizNewQuestionForm: React.FC<{ quizId: string; onAdd: () => void }> = (
  props
) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCorrect1, setIsCorrect1] = useState(false);
  const [isCorrect2, setIsCorrect2] = useState(false);
  const [isCorrect3, setIsCorrect3] = useState(false);
  const [isCorrect4, setIsCorrect4] = useState(false);

  const { isLoading, addNewQuestion } = useHttp();

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const cancelHandler = (event: FormEvent) => {
    event.preventDefault();
    resetQuestion();
    resetAnswer1();
    resetAnswer2();
    resetAnswer3();
    resetAnswer4();
    setIsFormOpen(false);
  };

  const {
    value: question,
    isValid: questionIsValid,
    valueChangeHandler: questionChangeHandler,
    inputBlurHandler: questionBlurHandler,
    errorMessage: questionError,
    reset: resetQuestion,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Question is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 255,
    "Question is too long. Must be no longer than 255 characters."
  );

  const {
    value: answer1,
    isValid: answer1IsValid,
    valueChangeHandler: answer1ChangeHandler,
    inputBlurHandler: answer1BlurHandler,
    errorMessage: answer1Error,
    reset: resetAnswer1,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Answer 1 is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 255,
    "Answer 1 is too long. Must be no longer than 255 characters."
  );

  const {
    value: answer2,
    isValid: answer2IsValid,
    valueChangeHandler: answer2ChangeHandler,
    inputBlurHandler: answer2BlurHandler,
    errorMessage: answer2Error,
    reset: resetAnswer2,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Answer 2 is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 255,
    "Answer 2 is too long. Must be no longer than 255 characters."
  );

  const {
    value: answer3,
    isValid: answer3IsValid,
    valueChangeHandler: answer3ChangeHandler,
    inputBlurHandler: answer3BlurHandler,
    errorMessage: answer3Error,
    reset: resetAnswer3,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Answer 3 is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 255,
    "Answer 3 is too long. Must be no longer than 255 characters."
  );

  const {
    value: answer4,
    isValid: answer4IsValid,
    valueChangeHandler: answer4ChangeHandler,
    inputBlurHandler: answer4BlurHandler,
    errorMessage: answer4Error,
    reset: resetAnswer4,
  } = useValidation(
    "",
    (v) => v.trim().length >= 1,
    "Answer 4 is too short. Must be at least 1 character long.",
    (v) => v.trim().length <= 255,
    "Answer 4 is too long. Must be no longer than 255 characters."
  );

  const isCorrectValid =
    `${isCorrect1 ? "x" : ""}${isCorrect2 ? "x" : ""}${isCorrect3 ? "x" : ""}${
      isCorrect4 ? "x" : ""
    }` === "x";

  const isFormValid =
    isCorrectValid &&
    questionIsValid &&
    answer1IsValid &&
    answer2IsValid &&
    (answer3IsValid || answer3 === "") &&
    (answer4IsValid || answer4 === "");

  const error = `${questionError}${answer1Error ? " " + answer1Error : ""}${
    answer2Error ? " " + answer2Error : ""
  }${answer3Error && answer3 !== "" ? " " + answer3Error : ""}${
    answer4Error && answer4 !== "" ? " " + answer4Error : ""
  }${!isCorrectValid ? " Exactly one answer must be correct." : ""}`;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!isFormValid) return;

    const answers: IAnswer[] = [
      { content: answer1, isCorrect: isCorrect1 },
      { content: answer2, isCorrect: isCorrect2 },
    ];

    if (answer3 !== "")
      answers.push({ content: answer3, isCorrect: isCorrect3 });
    if (answer4 !== "")
      answers.push({ content: answer4, isCorrect: isCorrect4 });

    addNewQuestion({
      quizId: props.quizId,
      content: question,
      answers: answers,
    });

    resetQuestion();
    resetAnswer1();
    resetAnswer2();
    resetAnswer3();
    resetAnswer4();

    setTimeout(() => {props.onAdd()}, 1000)
  };

  return (
    <>
      {!isFormOpen && (
        <div
          className="text-2xl btn btn-primary card p-4 m-4 text-center"
          onClick={openFormHandler}
        >
          +
        </div>
      )}
      {isFormOpen && (
        <form onSubmit={submitHandler} className="p-4 w-full my-2 text-center">
          <input
            className="card bg-neutral text-xl p-4 mb-2 w-full text-center"
            placeholder="Question"
            value={question}
            onChange={questionChangeHandler}
            onBlur={questionBlurHandler}
          />
          <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 1"
                value={answer1}
                onChange={answer1ChangeHandler}
                onBlur={answer1BlurHandler}
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input
                  type="checkbox"
                  checked={isCorrect1}
                  onChange={() => setIsCorrect1((s) => !s)}
                />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 2"
                value={answer2}
                onChange={answer2ChangeHandler}
                onBlur={answer2BlurHandler}
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input
                  type="checkbox"
                  checked={isCorrect2}
                  onChange={() => setIsCorrect2((s) => !s)}
                />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 3"
                value={answer3}
                onChange={answer3ChangeHandler}
                onBlur={answer3BlurHandler}
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input
                  type="checkbox"
                  checked={isCorrect3}
                  onChange={() => setIsCorrect3((s) => !s)}
                />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 4"
                value={answer4}
                onChange={answer4ChangeHandler}
                onBlur={answer4BlurHandler}
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input
                  type="checkbox"
                  checked={isCorrect4}
                  onChange={() => setIsCorrect4((s) => !s)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col my-4 md:flex-row justify-between">
            <ErrorText text={error} verticalCenter={true} />
            <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-8 mt-4">
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
                  isLoading || !isFormValid ? "btn-disabled" : ""
                }`}
              >
                {isLoading ? <LoadingSpinner /> : "Add"}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default QuizNewQuestionForm;
