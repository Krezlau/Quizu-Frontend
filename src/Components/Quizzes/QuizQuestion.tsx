const QuizQuestion = () => {
  return <li className="p-4 w-full my-2 text-center">
    <div className="card bg-neutral text-xl p-4 mb-2">Question???</div>
    <div className="grid grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2">
      <div className="card bg-green-500 p-4">Answer1</div>
      <div className="card bg-neutral p-4">Answer2</div>
      <div className="card bg-neutral p-4">Answer3</div>
      <div className="card bg-neutral p-4">Answer4</div>
    </div>
  </li>
}

export default QuizQuestion;
