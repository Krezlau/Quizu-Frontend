import { ChangeEvent, useState } from "react";

const useValidation = (
  defaultValue = "",
  validateFunc: (value: string) => boolean,
  message: string,
  validateFunc2?: (value: string) => boolean,
  message2?: string,
  validateFunc3?: (value: string) => boolean,
  message3?: string,
) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);

  const errorMessage = `${validateFunc(enteredValue) ? "" : message} ${
    validateFunc2 && message2 && !validateFunc2(enteredValue) ? message2 : ""
  } ${
    validateFunc3 && message3 && !validateFunc3(enteredValue) ? message3 : ""
  }`;
  const retMessage = isTouched ? errorMessage.trim() : ""
  const valueIsValid = errorMessage.trim() === "";
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    errorMessage: retMessage,
  };
};

export default useValidation;
