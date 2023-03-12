import SectionHeader from "../UI/SectionHeader";
import {Link} from "react-router-dom";

const LoginForm = () => {
  return <form className="flex flex-col justify-center">
    <SectionHeader text={"Username"} centered={true} label={"username"}/>
    <input type="text" id="username" className="input w-full mx-auto mb-12 sm:max-w-md" />
    <SectionHeader text={"Password"} centered={true} label={"password"} />
    <input type="password" id="password" className="input w-full mx-auto mb-24 sm:max-w-md" />
    <div className="mx-auto w-full sm:max-w-sm">
      <button className="btn w-full mx-auto" type="submit">Login</button>
      <div className="divider">OR</div>
      <Link to={"/signup"} className="link link-primary link-hover w-full block text-center text-xl hover:no-underline">Sign up</Link>
    </div>
  </form>
}

export default LoginForm;
