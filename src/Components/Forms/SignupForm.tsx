import SectionHeader from "../UI/SectionHeader";
import {Link} from "react-router-dom";

const SignupForm = () => {
  return <form className="flex flex-col justify-center">
    <SectionHeader text={"Username"} centered={true} label={"username"}/>
    <input type="text" id="username" className="input w-full mx-auto sm:max-w-md"/>
    <SectionHeader text={"Email"} centered={true} label={"email"}/>
    <input type="text" id="email" className="input w-full mx-auto sm:max-w-md"/>
    <SectionHeader text={"Password"} centered={true} label={"password"}/>
    <input type="password" id="password" className="input w-full mx-auto sm:max-w-md"/>
    <SectionHeader text={"Repeat Password"} centered={true} label={"repeat-password"}/>
    <input type="password" id="repeat-password" className="input w-full mx-auto mb-12 sm:max-w-md"/>
    <div className="mx-auto w-full sm:max-w-sm">
      <button className="btn w-full mx-auto" type="submit">Register</button>
      <div className="divider">OR</div>
      <p className="w-full block text-center text-xl">Already have an account?
        <Link to={"/login"} className="link link-primary link-hover hover:no-underline ml-4">
          Login
        </Link>
      </p>
    </div>
  </form>
}

export default SignupForm;
