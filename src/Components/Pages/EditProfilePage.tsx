import PageHeader from "../UI/PageHeader";
import EditProfileForm from "../Forms/EditProfileForm";
import useFetchUserDetails from "../../hooks/useFetchUserDetails";
import LoadingSpinner from "../UI/LoadingSpinner";

const EditProfilePage = () => {
  const {isLoading, user} = useFetchUserDetails();

  return <>
    <PageHeader text={"Edit Profile"} />
    {isLoading && <LoadingSpinner />}
    {!isLoading && user && <EditProfileForm user={user}/>}
    {!isLoading && !user && <p className="text-center text-2xl">Something went wrong.</p>}
  </>
}

export default EditProfilePage;
