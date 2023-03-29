import PageHeader from "../UI/PageHeader";
import ManageQuizInfoForm from "../Forms/ManageQuizInfoForm";

const QuizManageInfoPage = () => {
    return <>
        <PageHeader text="Manage Quiz Info - {Quiz Name}" centered={true} />
        <ManageQuizInfoForm />
    </>
}

export default QuizManageInfoPage;

