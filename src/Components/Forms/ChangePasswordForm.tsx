import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import useValidation from "../../hooks/useValidation";
import { IRootState } from "../../store";
import ErrorText from "../UI/ErrorText";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";

const ChangePasswordForm = () => {
  const { isLoading, changeUserPassword } = useHttp();
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const navigate = useNavigate();

  const {
    value: oldPassword,
    valueChangeHandler: oldPasswordChangeHandler,
    inputBlurHandler: oldPasswordBlurHandler,
  } = useValidation(
    "",
    (v) => v.trim().length >= 8,
    "Password is too short. Must be at least 8 characters long.",
    (v) => v.trim().length <= 255,
    "Password is too long. Must be no longer than 255 characters."
  );
  const {
    value: password,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    errorMessage: passwordError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 8,
    "Password is too short. Must be at least 8 characters long.",
    (v) => v.trim().length <= 255,
    "Password is too long. Must be no longer than 255 characters."
  );

  const {
    value: repeatPassword,
    isValid: repeatPasswordIsValid,
    valueChangeHandler: repeatPasswordChangeHandler,
    inputBlurHandler: repeatPasswordBlurHandler,
    errorMessage: repeatPasswordError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 8,
    "Password is too short. Must be at least 8 characters long.",
    (v) => v.trim().length <= 255,
    "Password is too long. Must be no longer than 255 characters.",
    (v) => v === password,
    "Passwords do not match."
  );

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (formValid) {
      changeUserPassword(userId, oldPassword, password, navigate);
    }
  };

  const formValid = passwordIsValid && repeatPasswordIsValid;

  return (
    <form onSubmit={submitHandler} className="flex flex-col justify-center">
      <SectionHeader
        text={"Old Password"}
        centered={true}
        label={"old-password"}
      />
      <input
        type="password"
        id="old-password"
        className="input w-full mx-auto sm:max-w-md"
        value={oldPassword}
        onChange={oldPasswordChangeHandler}
        onBlur={oldPasswordBlurHandler}
      />
      <SectionHeader
        text={"New Password"}
        centered={true}
        label={"new-password"}
      />
      <input
        type="password"
        id="new-password"
        className="input w-full mx-auto sm:max-w-md"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      <ErrorText text={passwordError} />
      <SectionHeader
        text={"Repeat New Password"}
        centered={true}
        label={"new-password-repeat"}
      />
      <input
        type="password"
        id="new-password-repeat"
        className="input w-full mx-auto sm:max-w-md"
        value={repeatPassword}
        onChange={repeatPasswordChangeHandler}
        onBlur={repeatPasswordBlurHandler}
      />
      <ErrorText text={repeatPasswordError} />
      <div className="mx-auto w-full mt-12 sm:max-w-sm">
        <button
          className={`btn w-full mx-auto ${
            isLoading || !formValid ? "btn-disabled" : ""
          }`}
          type="submit"
        >
          {isLoading ? <LoadingSpinner /> : "Change"}
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
