import PageHeader from "../UI/PageHeader";

const AboutPage = () => {
  return (
    <>
      <PageHeader text="Welcome to Quizu!" centered={true} />
      <p className="text-2xl">
        This website is all about user created quizzes. Here you can create,
        share, like, comment and play (in the future) quizzes from other users.
      </p>
      <p className="text-xl italic text-gray-500">
        Disclaimer: Please note that the website is still in development and
        thus is lacking some features.
      </p>
    </>
  );
};

export default AboutPage;
