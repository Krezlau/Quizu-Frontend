import LoadingSpinner from "../UI/LoadingSpinner";
import PageHeader from "../UI/PageHeader";

const PlayFetchPage = () => {
  // fetch questions (need new endpoint here) with settings
  // dispatch state change 
  // redirect to /play?quizId={string}...
  //
  // need endpoints:
  // fetch questions(without answers) and settings
  // check if answer is correct (or submit answer?) => return score gained??
  // save score
  return <>
    <PageHeader text="Starting play mode..."/>
    <LoadingSpinner />
  </>
}

export default PlayFetchPage;
