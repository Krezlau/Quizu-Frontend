import SectionHeader from "../UI/SectionHeader";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { ChangeEvent, FormEvent, useState } from "react";

const SignupForm = () => {
  const { useLoading, signUp } = useHttp();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const repeatPasswordChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
  };

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const surnameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  const locationChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    signUp(username, email, password, repeatPassword, name, surname, location);
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={submitHandler}>
      <SectionHeader text={"Username"} centered={true} label={"username"} />
      <input
        type="text"
        id="username"
        className="input w-full mx-auto sm:max-w-md"
        value={username}
        onChange={usernameChangeHandler}
      />
      <SectionHeader text={"Email"} centered={true} label={"email"} />
      <input
        type="text"
        id="email"
        className="input w-full mx-auto sm:max-w-md"
        value={email}
        onChange={emailChangeHandler}
      />
      <SectionHeader text={"Password"} centered={true} label={"password"} />
      <input
        type="password"
        id="password"
        className="input w-full mx-auto sm:max-w-md"
        value={password}
        onChange={passwordChangeHandler}
      />
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
      />
      <SectionHeader text={"Name"} centered={true} label={"name"} />
      <input
        type="text"
        id="name"
        className="input w-full mx-auto sm:max-w-md"
        value={name}
        onChange={nameChangeHandler}
      />
      <SectionHeader text={"Surname"} centered={true} label={"surname"} />
      <input
        type="text"
        id="surname"
        className="input w-full mx-auto sm:max-w-md"
        value={surname}
        onChange={surnameChangeHandler}
      />
      <SectionHeader text="Location" centered={true} label="location" />
      <select
        className="select w-full max-w-xs mx-auto mb-12"
        onChange={locationChangeHandler}
        defaultValue="Choose a country"
      >
        <option disabled >
          Choose a country
        </option>
        <option>Poland</option>
        <option>USA</option>
      </select>
      <div className="mx-auto w-full sm:max-w-sm">
        <button className="btn w-full mx-auto" type="submit">
          Register
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
