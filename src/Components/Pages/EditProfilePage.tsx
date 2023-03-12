import PageHeader from "../UI/PageHeader";
import React from "react";
import EditProfileForm from "../Forms/EditProfileForm";

const EditProfilePage = () => {
  return <>
    <PageHeader text={"Edit Profile"} />
    <EditProfileForm />
  </>
}

export default EditProfilePage;
