import LoadingSpinner from "../UI/LoadingSpinner";
import PageHeader from "../UI/PageHeader";

const PlayFetchPage = () => {
  return <>
    <PageHeader text="Starting play mode..."/>
    <LoadingSpinner />
  </>
}

export default PlayFetchPage;
