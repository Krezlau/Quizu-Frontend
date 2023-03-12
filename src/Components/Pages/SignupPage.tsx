import PageHeader from "../UI/PageHeader";
import SignupForm from "../Forms/SignupForm";

const SignupPage = () => {
  return <>
    <PageHeader text={"Sign Up"} centered={true} />
    <SignupForm />
  </>
}

export default SignupPage;
