import { ChangeEvent, FormEvent, useState } from "react";
import useHttp from "../../hooks/useHttp";
import SectionHeader from "../UI/SectionHeader";

const NewQuizForm = () => {
  const [title, setTitle] = useState<string>("");
  const { addQuiz } = useHttp();

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    addQuiz(title)
  }
  
  return <form onSubmit={formSubmitHandler} className="flex flex-col justify-center">
    <SectionHeader text={"Title"} centered={true} label={"title"}/>
    <input type="text" id="title" value={title}  onChange={titleChangeHandler} className="input w-full mx-auto mb-12 sm:max-w-md" />
    <div className="mx-auto w-full sm:max-w-sm">
      <button className="btn w-full mx-auto" type="submit">Create</button>
    </div>
  </form>
}

export default NewQuizForm;
