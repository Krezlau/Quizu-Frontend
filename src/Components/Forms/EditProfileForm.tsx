import SectionHeader from "../UI/SectionHeader";

const EditProfileForm = () => {
  return <div className="card bg-neutral p-4">
    <h1 className="text-2xl font-semibold mb-4 ml-4">User Info</h1>
    <form className="mx-4 grid grid-rows-11 grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-6">
      <div className="flex flex-col justify-left gap-2 row-start-1 sm:flex-row sm:gap-8">
        <label className="badge text-xl sm:min-w-[8rem] my-auto">Username</label>
        <input defaultValue={"User"} className="input"/>
      </div>
      <div className="flex flex-col justify-left gap-2 row-start-2 sm:flex-row sm:gap-8">
        <label className="badge text-xl sm:min-w-[8rem] my-auto">Email</label>
        <input defaultValue={"email@email.emal"} className="input"/>
      </div>
      <div className="flex flex-col justify-left gap-2 row-start-3 sm:flex-row sm:gap-8">
        <label className="badge text-xl sm:min-w-[8rem] my-auto">Name</label>
        <input defaultValue={"Name"} className="input"/>
      </div>
      <div className="flex flex-col justify-left gap-2 row-start-4 sm:flex-row sm:gap-8">
        <label className="badge text-xl sm:min-w-[8rem] my-auto">Surname</label>
        <input defaultValue={"Surname"} className="input"/>
      </div>
      <div className="flex flex-col justify-left gap-2 row-start-5 sm:flex-row sm:gap-8">
        <label className="badge text-xl sm:min-w-[8rem] my-auto">Location</label>
        <input defaultValue={"Poland"} className="input"/>
      </div>
      <div className="flex flex-col row-span-5 row-start-6 lg:col-start-2 lg:row-start-1">
        <SectionHeader text={"About section"} label={"about"}/>
        <textarea className="input w-full h-full resize-none min-h-[8rem]"/>
      </div>
      <button type="submit" className="btn btn-primary mx-auto w-full row-start-11 col-span-1 lg:row-start-6 lg:col-span-2 sm:w-auto">Save</button>
    </form>
    <span className="border-2 border-primary my-8 mx-4"></span>
    <h1 className="text-2xl font-semibold mb-4 ml-4">Danger zone</h1>
    <div className="flex flex-col gap-2 mx-4 sm:flex-row mb-4 sm:gap-8">
      <button className="btn btn-error btn-sm">Change password</button>
      <p className="my-auto">This will log you out on all your devices.</p>
    </div>
    <div className="flex flex-col gap-2 mx-4 sm:flex-row sm:gap-8">
      <button className="btn btn-error btn-sm">Delete account</button>
      <p className="my-auto">Deletes the account. This action is irreversible.</p>
    </div>
  </div>
}
export default EditProfileForm;
