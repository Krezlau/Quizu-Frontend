import SectionHeader from "../UI/SectionHeader";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { ChangeEvent, FormEvent, useState } from "react";

const LoginForm = () => {
  const { login, isLoading } = useHttp();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={formSubmitHandler}>
      <SectionHeader text={"Email"} centered={true} label={"email"} />
      <input
        type="text"
        id="email"
        value={email}
        onChange={emailChangeHandler}
        className="input w-full mx-auto sm:max-w-md"
      />
      <SectionHeader text={"Password"} centered={true} label={"password"} />
      <input
        type="password"
        id="password"
        value={password}
        onChange={passwordChangeHandler}
        className="input w-full mx-auto mb-12 sm:max-w-md"
      />
      <div className="mx-auto w-full sm:max-w-sm">
        <button className="btn w-full mx-auto" type="submit">
          Login
        </button>
        <div className="divider">OR</div>
        <Link
          to={"/signup"}
          className="link link-primary link-hover w-full block text-center text-xl hover:no-underline"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
