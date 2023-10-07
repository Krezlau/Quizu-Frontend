import PlayQuestionMock from "../About/PlayQuestionMock";
import HeroHeadline from "../About/HeroHeadline";

const AboutPage = () => {
  const string =
    "mockup mockup-window bg-base-200/90 xl:bg-base-200 mx-auto h-[30.5rem] origin-top overflow-visible pb-4 backdrop-blur will-change-auto [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] max-[1280px]:!transform-none xl:-right-20 xl:-mr-10 xl:h-[32rem] xl:w-[50rem] xl:rounded-r-none xl:pr-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] xl:backdrop-blur-0";
  return (
    <>
      {/* TITLE */}
      <div className="min-h-screen flex flex-col justify-between gap-32 lg:flex-row">
        <div className="my-auto">
          <h1 className="text-9xl font-extrabold text-center lg:text-left">QUIZU</h1>
          <h2 className="text-2xl text-center lg:text-left">
            {" "}
            <p className="font-bold bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
              Quizzes made easy for everyone.
            </p>{" "}
            Play, Create, Comment & Like
          </h2>
        </div>
        <div className="hidden px-2 mockup mockup-window bg-base-200 m-auto overflow-visible pb-4 backdrop-blur [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] lg:block h-[40rem] xl:w-[50rem] ">
          <PlayQuestionMock />
        </div>
      </div>
      {/* PLAY */}
      <HeroHeadline title="PLAY" text="Play quizzes made by the community. You can easily find quizzes either by searching for a specific topic or by browsing the categories." imgRight={true}/>
      {/* SEE THE STATS */}
      <HeroHeadline title="SEE THE STATS" text="For every quiz you can see overall stats in a simple form. That way you can easily compare yourself with others!" imgRight={false}/>
      {/* CREATE */}
      <HeroHeadline title="CREATE" text="Create your first quiz and share it with others!" imgRight={true}/>
      {/* CUSTOMIZE */}
      <HeroHeadline title="CUSTOMIZE" text="For your own quiz you can control parameters like time for answer and questions per play. Also, it's up to you if there are 2, 3 or 4 answers!" imgRight={false}/>
      {/* COMMENT & LIKE */}
      <HeroHeadline title="COMMENT & LIKE" text="Be sure to always leave your thoughts in the comment section of the quiz and like the quizzes that you had fun with!" imgRight={true}/>
      {/* CHOOSE YOUR THEME */}
      <HeroHeadline title="CHOOSE YOUR THEME" text="On the site you can choose between light mode and dark mode. Protect your eyes!" imgRight={false}/>
    </>
  );
};

export default AboutPage;
