import { Link } from "react-router-dom";
import PageHeader from "../UI/PageHeader";

const NotLoggedInPage = () => {
  return (
    <>
      <PageHeader text="You are not logged in." centered={true} />
      <p className="text-center">
        Please{" "}
        <Link className="link link-hover text-primary" to="/login">
          log in
        </Link>{" "}
        or{" "}
        <Link className="link link-hover text-primary" to="/signup">
          sign up
        </Link>{" "}
        to access this page.
      </p>
    </>
  );
};

export default NotLoggedInPage;
