import { FormEvent, useState } from "react";
import ErrorText from "../UI/ErrorText";

const QuizNewQuestionForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const cancelHandler = (event: FormEvent) => {
    event.preventDefault();
    setIsFormOpen(false);
  }

  return (
    <>
      {!isFormOpen && (
        <div
          className="text-2xl btn btn-primary card p-4 m-4 text-center"
          onClick={openFormHandler}
        >
          +
        </div>
      )}
      {isFormOpen && (
        <form className="p-4 w-full my-2 text-center">
          <input
            className="card bg-neutral text-xl p-4 mb-2 w-full text-center"
            placeholder="Question"
          />
          <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 1"
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 2"
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 3"
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="card bg-neutral px-4 flex flex-row justify-between">
              <input
                className="bg-neutral p-4 w-3/4 card text-center"
                type="text"
                placeholder="Answer 4"
              />
              <div className="flex flex-row gap-4">
                <label className="my-auto">Is correct</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="flex flex-col my-4 md:flex-row justify-between">
            <ErrorText text="Sample error" verticalCenter={true} />
            <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-8 mt-4">
              <button type="button" onClick={cancelHandler} className="btn btn-neutral w-full md:w-auto">Cancel</button>
              <button type="submit" className="btn btn-primary w-full md:w-auto">Add</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default QuizNewQuestionForm;
