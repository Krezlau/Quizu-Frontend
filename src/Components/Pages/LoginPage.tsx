import PageHeader from "../UI/PageHeader";
import LoginForm from "../Forms/LoginForm";

const LoginPage = () => {
  return <>
      <PageHeader text={"Login"} centered={true}/>
      <LoginForm />
  </>
}

export default LoginPage;
