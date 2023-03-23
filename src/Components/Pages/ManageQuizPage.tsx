import PageHeader from "../UI/PageHeader";
import {Link} from "react-router-dom";
import SectionHeader from "../UI/SectionHeader";
import QuizQuestionList from "../Quizzes/QuizQuestionList";

const ManageQuizPage = () => {
  return <>
    <PageHeader text={"Manage Quiz"}/>
    <div className="card bg-neutral p-4 md:min-w-[40rem] h-full ml-0 text-xl">
      <h1 className="text-5xl font-semibold pb-4">Very Very Very Long Fricking Title</h1>
      <p>Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam elementum vehicula.
        Curabitur fringilla orci turpis, at consectetur</p>
      <div className="flex flex-row flex-wrap justify-left gap-2 mt-4 mb-4">
        <div className="badge badge-lg badge-accent">tag1</div>
        <div className="badge badge-lg badge-accent">tag2</div>
        <div className="badge badge-lg badge-accent">tag3</div>
        <div className="badge badge-lg badge-accent">tag4</div>
        <div className="badge badge-lg badge-accent">tag5</div>
      </div>
      <div className="flex flex-row justify-right px-4 pt-4">
        <Link to="/quizzes/{id}/manage-info" className="btn btn-primary ml-auto">Change Info</Link>
      </div>
    </div>
    <SectionHeader text="Questions" />
    <QuizQuestionList />
  </>
}

export default ManageQuizPage;
