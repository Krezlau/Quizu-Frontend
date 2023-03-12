import QuizCarousel from "../Quizzes/QuizCarousel";
import PageHeader from "../UI/PageHeader";
import SectionHeader from "../UI/SectionHeader";

const HomePage = () => {



  return <>
    <PageHeader text={"Hello, User! 👋"} />
    <SectionHeader text={"Recent Activity"} />
    <QuizCarousel />
    <SectionHeader text={"Streak"} />
    <div className="card p-4 w-full h-64 bg-neutral">xd</div>
    <SectionHeader text={"Recommendations"} />
    <QuizCarousel />
  </>
}

export default HomePage;
