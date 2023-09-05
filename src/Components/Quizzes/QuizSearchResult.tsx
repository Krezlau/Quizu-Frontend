const QuizSearchResult = () => {
  return (
    <li className="btn flex flex-col md:flex-row md:justify-between gap-4 h-auto p-2">
      <div className="lowercase text-left">
        <p className="text-xl font-bold my-0">VERY but veryyyyy long title</p>
        <div className="flex flex-row gap-2 justify-center md:justify-start">
          <div className="badge badge-sm badge-accent">taggggg</div>
          <div className="badge badge-sm badge-accent">taggggg</div>
          <div className="badge badge-sm badge-accent">taggggg</div>
        </div>
      </div>
      <div className="flex flex-row my-auto gap-2">
        <div className="flex flex-row flex-wrap justify-left gap-2">
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p className="mt-1">{2312}</p>
          </div>
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <p className="mt-1">{2222}</p>
          </div>
          <div className="flex flex-row justify-left gap-1">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                className="inline-block w-6 h-6 stroke-current fill-current pt-1 pl-1"
              >
                <path d="m22 22-4-4H4q-.825 0-1.412-.587Q2 16.825 2 16V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z" />
              </svg>
            </div>
            <p className="mt-1">{2137}</p>
          </div>
          </div>
      </div>
    </li>
  );
};

export default QuizSearchResult;
