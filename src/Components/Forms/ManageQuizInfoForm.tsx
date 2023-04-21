import React, { ChangeEvent, FormEvent, useState } from "react";
import useHttp from "../../hooks/useHttp";
import IQuizDetails from "../../types/IQuizDetails";
import LoadingSpinner from "../UI/LoadingSpinner";
import SectionHeader from "../UI/SectionHeader";

const ManageQuizInfoForm: React.FC<{ quiz: IQuizDetails }> = (props) => {
  const [description, setDescription] = useState<string>(
    props.quiz.description ? props.quiz.description : ""
  );
  const [about, setAbout] = useState<string>(
    props.quiz.about ? props.quiz.about : ""
  );
  const [title, setTitle] = useState<string>(props.quiz.title);
  const { isLoading, updateQuizInfo } = useHttp();

  const descriptionChangeHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const aboutChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(event.target.value);
  };

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    updateQuizInfo(props.quiz.id, description, about, title);
  };

  return (
    <>
      <form className="flex flex-col justify-center" onSubmit={submitHandler}>
        <SectionHeader
          text="Title"
          centered={true}
          label="title"
        />
        <input
          id="title"
          className="textarea textarea-bordered resize-none mx-auto w-full max-w-[40rem]"
          value={title}
          onChange={titleChangeHandler}
        />
        <SectionHeader
          text="Short Description"
          centered={true}
          label="description"
        />
        <textarea
          id="description"
          className="textarea textarea-bordered resize-none mx-auto w-full h-20 max-w-[40rem]"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <SectionHeader text="About Section" centered={true} label="about" />
        <textarea
          id="about"
          className="textarea textarea-bordered resize-none mx-auto w-full h-64 max-w-[40rem]"
          value={about}
          onChange={aboutChangeHandler}
        />
        <SectionHeader text="Tags" centered={true} label="tags" />
        <select className="select w-full max-w-xs mx-auto">
          <option disabled selected>
            Choose a tag
          </option>
          <option>tag1</option>
          <option>tag2</option>
          <option>tag3</option>
          <option>tag4</option>
          <option>tag5</option>
        </select>
        <div className="flex flex-row flex-wrap justify-left gap-2 mt-4 mx-auto mb-8">
          <div className="badge badge-accent badge-lg flex flex-row gap-2 justify-between">
            tag1
            <div className="hover:cursor-pointer mb-1">x</div>
          </div>
          <div className="badge badge-accent badge-lg flex flex-row gap-2 justify-between">
            tag2
            <div className="hover:cursor-pointer mb-1">x</div>
          </div>
          <div className="badge badge-accent badge-lg flex flex-row gap-2 justify-between">
            tag3
            <div className="hover:cursor-pointer mb-1">x</div>
          </div>
          <div className="badge badge-accent badge-lg flex flex-row gap-2 justify-between">
            tag4
            <div className="hover:cursor-pointer mb-1">x</div>
          </div>
          <div className="badge badge-accent badge-lg flex flex-row gap-2 justify-between">
            tag5
            <div className="hover:cursor-pointer mb-1">x</div>
          </div>
        </div>
        <button type="submit" className={`btn btn-success mx-auto mb-8 w-full max-w-[20rem] ${isLoading ? "btn-disabled" : ""}`}>
          { isLoading ? <LoadingSpinner /> : "Save" }
        </button>
      </form>
      <form className="flex flex-col justify-center">
        <h1 className="text-4xl text-center border-t-gray-600 border-t-2 font-semibold pt-4">
          Play Parameters
        </h1>
        <SectionHeader
          text="Question Answer Time"
          centered={true}
          label="answertime"
        />
        <input
          type="range"
          min="10"
          max="100"
          step="5"
          className="range max-w-[40rem] mx-auto"
        />
        <div className="w-full flex justify-between px-2 text-xs max-w-[40rem] mx-auto">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <div className="w-full flex justify-between text-xs max-w-[40rem] mx-auto">
          <span>10s</span>
          <span>100s</span>
        </div>
        <SectionHeader
          text="Allow Replays"
          centered={true}
          label="allowreplays"
        />
        <div className="flex justify-center gap-2">
          <span>OFF</span>
          <input type="checkbox" className="toggle" />
          <span>ON</span>
        </div>
        <button className="btn btn-success mx-auto mt-8 w-full max-w-[20rem]">
          SAVE
        </button>
      </form>
      <h1 className="text-4xl text-center border-t-gray-600 border-t-2 font-semibold pt-4 mt-12 mb-8">
        Danger Zone
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-left px-12">
        <button type="button" className="btn btn-error">
          DELETE QUIZ
        </button>
        <p className="m-auto sm:mx-0">This action is irreversible!</p>
      </div>
    </>
  );
};

export default ManageQuizInfoForm;
