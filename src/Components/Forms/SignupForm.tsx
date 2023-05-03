import SectionHeader from "../UI/SectionHeader";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { ChangeEvent, FormEvent, useState } from "react";
import countries from "../../auxiliary/countries";
import LoadingSpinner from "../UI/LoadingSpinner";
import useValidation from "../../hooks/useValidation";
import ErrorText from "../UI/ErrorText";
import useHttpValidation from "../../hooks/useHttpValidation";
import ValidationWrapper from "../UI/ValidationWrapper";

const SignupForm = () => {
  const { isLoading, signUp } = useHttp();
  const [location, setLocation] = useState<string>("");

  const {
    value: username,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    errorMessage: usernameError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 3,
    "Username is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Username is too long. Must be no longer than 25 characters."
  );

  const { isLoadingVal, availableMessage } = useHttpValidation(
    username,
    usernameIsValid,
    true
  );

  const {
    value: email,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    errorMessage: emailError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 3,
    "Email is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Email is too long. Must be no longer than 25 characters.",
    (v) => v.includes("@"),
    "Not a valid email."
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

  const {
    value: name,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    errorMessage: nameError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 3,
    "Name is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Name is too long. Must be no longer than 25 characters."
  );

  const {
    value: surname,
    isValid: surnameIsValid,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    errorMessage: surnameError,
  } = useValidation(
    "",
    (v) => v.trim().length >= 3,
    "Surname is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Surname is too long. Must be no longer than 25 characters."
  );

  const locationChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    signUp(username, email, password, repeatPassword, name, surname, location);
  };

  const formValid =
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    repeatPasswordIsValid &&
    nameIsValid &&
    surnameIsValid &&
    location !== "";

  return (
    <form className="flex flex-col justify-center" onSubmit={submitHandler}>
      <SectionHeader text={"Username"} centered={true} label={"username"} />
      <ValidationWrapper
        isValid={usernameIsValid}
        isLoading={isLoadingVal ? isLoadingVal : false}
        message={availableMessage}
      >
        <input
          type="text"
          id="username"
          className="input w-full sm:max-w-md"
          value={username}
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
        />
      </ValidationWrapper>
      <ErrorText text={usernameError} />
      <SectionHeader text={"Email"} centered={true} label={"email"} />
      <input
        type="text"
        id="email"
        className="input w-full mx-auto sm:max-w-md"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      <ErrorText text={emailError} />
      <SectionHeader text={"Password"} centered={true} label={"password"} />
      <input
        type="password"
        id="password"
        className="input w-full mx-auto sm:max-w-md"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      <ErrorText text={passwordError} />
      <SectionHeader
        text={"Repeat Password"}
        centered={true}
        label={"repeat-password"}
      />
      <input
        type="password"
        id="repeat-password"
        className="input w-full mx-auto sm:max-w-md"
        value={repeatPassword}
        onChange={repeatPasswordChangeHandler}
        onBlur={repeatPasswordBlurHandler}
      />
      <ErrorText text={repeatPasswordError} />
      <SectionHeader text={"Name"} centered={true} label={"name"} />
      <input
        type="text"
        id="name"
        className="input w-full mx-auto sm:max-w-md"
        value={name}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      <ErrorText text={nameError} />
      <SectionHeader text={"Surname"} centered={true} label={"surname"} />
      <input
        type="text"
        id="surname"
        className="input w-full mx-auto sm:max-w-md"
        value={surname}
        onChange={surnameChangeHandler}
        onBlur={surnameBlurHandler}
      />
      <ErrorText text={surnameError} />
      <SectionHeader text="Location" centered={true} label="location" />
      <select
        className="select w-full max-w-xs mx-auto mb-12"
        onChange={locationChangeHandler}
        defaultValue="Choose a country"
      >
        <option disabled>Choose a country</option>
        {countries.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
      <div className="mx-auto w-full sm:max-w-sm">
        <button
          className={`btn w-full mx-auto ${
            isLoading || !formValid ? "btn-disabled" : ""
          }`}
          type="submit"
        >
          {isLoading ? <LoadingSpinner /> : "Register"}
        </button>
        <div className="divider">OR</div>
        <p className="w-full block text-center text-xl">
          Already have an account?
          <Link
            to={"/login"}
            className="link link-primary link-hover hover:no-underline ml-4"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
