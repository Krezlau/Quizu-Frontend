import PageHeader from "../UI/PageHeader";
import EditProfileForm from "../Forms/EditProfileForm";
import useFetchUserDetails from "../../hooks/useFetchUserDetails";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import ForbiddenPage from "./ForbiddenPage";

const EditProfilePage = () => {
  const { isLoading, user } = useFetchUserDetails();
  const userId = useSelector((state: IRootState) => state.auth.userId);

  if (user && user.id !== userId) {
    return <ForbiddenPage />;
  }

  return (
    <>
      <PageHeader text={"Edit Profile"} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && user && <EditProfileForm user={user} />}
      {!isLoading && !user && (
        <p className="text-center text-2xl">Something went wrong.</p>
      )}
    </>
  );
};

export default EditProfilePage;
