import SectionHeader from "../UI/SectionHeader";

const NewQuizForm = () => {
  return <form className="flex flex-col justify-center">
    <SectionHeader text={"Title"} centered={true} label={"title"}/>
    <input type="text" id="title" className="input w-full mx-auto mb-12 sm:max-w-md" />
    <div className="mx-auto w-full sm:max-w-sm">
      <button className="btn w-full mx-auto" type="submit">Create</button>
    </div>
  </form>
}

export default NewQuizForm;
