import SectionHeader from "../UI/SectionHeader";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useValidation from "../../hooks/useValidation";
import useHttpValidation from "../../hooks/useHttpValidation";
import countries from "../../auxiliary/countries";
import ErrorText from "../UI/ErrorText";
import ValidationWrapper from "../UI/ValidationWrapper";
import LoadingSpinner from "../UI/LoadingSpinner";
import IUserProfile from "../../types/IUserProfile";

const EditProfileForm: React.FC<{user: IUserProfile}> = (props) => {
  const { isLoading, signUp } = useHttp();
  const [location, setLocation] = useState<string>(props.user.location);

  const {
    value: username,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    errorMessage: usernameError,
  } = useValidation(
    props.user.username,
    (v) => v.trim().length >= 3,
    "Username is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Username is too long. Must be no longer than 25 characters."
  );

  const { isLoadingVal, availableMessage } = useHttpValidation(
    username,
    usernameIsValid,
    true,
    props.user.username
  );

  const {
    value: name,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    errorMessage: nameError,
  } = useValidation(
    props.user.name,
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
    props.user.surname,
    (v) => v.trim().length >= 3,
    "Surname is too short. Must be at least 3 characters long.",
    (v) => v.trim().length <= 25,
    "Surname is too long. Must be no longer than 25 characters."
  );

  const {
    value: about,
    inputBlurHandler: aboutBlurHandler,
    errorMessage: aboutErrorMessage,
    valueChangeHandler: aboutChangeHandler,
    isValid: aboutIsValid,
  } = useValidation(
    props.user.about,
    (v) => v.trim().length <= 1000,
    "About section too long. Must be no longer than 1000 characters."
  );

  const locationChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const formValid =
    aboutIsValid &&
    usernameIsValid &&
    nameIsValid &&
    surnameIsValid &&
    location !== "";

  return (
    <div className="card bg-neutral p-4">
      <h1 className="text-2xl font-semibold mb-4 ml-4">User Info</h1>
      <form
        className="mx-4 grid grid-rows-10 grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-5"
        onSubmit={submitHandler}
      >
        <div className="row-start-1">
          <div className="flex flex-col justify-left gap-2 sm:flex-row sm:gap-8">
            <label className="badge text-xl sm:min-w-[8rem] my-auto">
              Username
            </label>
            <ValidationWrapper
              isValid={usernameIsValid}
              isLoading={isLoadingVal ? isLoadingVal : false}
              message={availableMessage}
              left={true}
            >
              <input
                className="input w-full"
                type="text"
                id="username"
                value={username}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
              />
            </ValidationWrapper>
          </div>
          <ErrorText text={usernameError} />
        </div>
        <div className="row-start-2">
          <div className="flex flex-col justify-left gap-2 sm:flex-row sm:gap-8">
            <label className="badge text-xl sm:min-w-[8rem] my-auto">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
          </div>
          <ErrorText text={nameError} />
        </div>
        <div className="row-start-3">
          <div className="flex flex-col justify-left gap-2 sm:flex-row sm:gap-8">
            <label className="badge text-xl sm:min-w-[8rem] my-auto">
              Surname
            </label>
            <input
              className="input"
              type="text"
              id="surname"
              value={surname}
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
            />
          </div>
          <ErrorText text={surnameError} />
        </div>
        <div className="flex flex-col justify-left gap-2 row-start-4 sm:flex-row sm:gap-8">
          <label className="badge text-xl sm:min-w-[8rem] my-auto">
            Location
          </label>
          <select
            className="select"
            onChange={locationChangeHandler}
            value={location}
          >
            <option disabled>Choose a country</option>
            {countries.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col row-span-4 row-start-5 lg:col-start-2 lg:row-start-1">
          <SectionHeader text={"About section"} label={"about"} />
          <textarea
            className="input w-full h-full resize-none min-h-[8rem]"
            value={about}
            onChange={aboutChangeHandler}
            onBlur={aboutBlurHandler}
          />
          <ErrorText text={aboutErrorMessage} />
        </div>
        <button
          type="submit"
          className={`btn btn-primary mx-auto w-full row-start-11 col-span-1 lg:row-start-5 lg:col-span-2 sm:w-auto ${
            isLoading || !formValid || isLoadingVal || availableMessage !== "" ? "btn-disabled border-primary" : ""
          }`}
        >
          {isLoading ? <LoadingSpinner /> : "Save"}
        </button>
      </form>
      <span className="border-2 border-primary my-8 mx-4"></span>
      <h1 className="text-2xl font-semibold mb-4 ml-4">Danger zone</h1>
      <div className="flex flex-col gap-2 mx-4 sm:flex-row mb-4 sm:gap-8">
        <Link to={"/change-password"} className="btn btn-error btn-sm">
          Change password
        </Link>
        <p className="my-auto">This will log you out on all your devices.</p>
      </div>
      <div className="flex flex-col gap-2 mx-4 sm:flex-row sm:gap-8">
        <button className="btn btn-error btn-sm">Delete account</button>
        <p className="my-auto">
          Deletes the account. This action is irreversible.
        </p>
      </div>
    </div>
  );
};
export default EditProfileForm;
