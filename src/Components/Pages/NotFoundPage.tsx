import PageHeader from "../UI/PageHeader";

const NotFoundPage = () => {
  return <>
    <PageHeader text="404" centered={true} />
    <p className="text-xl italic text-gray-500">This page does not exist.</p>
  </>
}

export default NotFoundPage;
