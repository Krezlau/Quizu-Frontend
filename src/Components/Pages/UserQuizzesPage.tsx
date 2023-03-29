import PageHeader from "../UI/PageHeader";
import QuizList from "../Quizzes/QuizList";

const UserQuizzesPage = () => {
  return <>
    <PageHeader text={"Quizzes of User"} />
    <QuizList />
  </>
}

export default UserQuizzesPage;
