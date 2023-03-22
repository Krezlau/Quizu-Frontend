import PageHeader from "../UI/PageHeader";
import NewQuizForm from "../Forms/NewQuizForm";

const CreateNewQuizPage = () => {
  return <>
  <PageHeader text={"Create New Quiz"} centered={true} />
    <NewQuizForm />
  </>
}

export default CreateNewQuizPage;
