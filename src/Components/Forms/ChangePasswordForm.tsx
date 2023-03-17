import SectionHeader from "../UI/SectionHeader";

const ChangePasswordForm = () => {
  return <form className="flex flex-col justify-center">
    <SectionHeader text={"Old Password"} centered={true} label={"old-password"}/>
    <input type="password" id="old-password" className="input w-full mx-auto sm:max-w-md" />
    <SectionHeader text={"New Password"} centered={true} label={"new-password"} />
    <input type="password" id="new-password" className="input w-full mx-auto sm:max-w-md" />
    <SectionHeader text={"Repeat New Password"} centered={true} label={"new-password-repeat"} />
    <input type="password" id="new-password-repeat" className="input w-full mx-auto mb-12 sm:max-w-md" />
    <div className="mx-auto w-full sm:max-w-sm">
      <button className="btn w-full mx-auto" type="submit">Change</button>
    </div>
  </form>
}

export default ChangePasswordForm;
