import React from "react";
import IQuestion from "../../types/IQuestion";
import QuizQuestion from "./QuizQuestion";

const QuizQuestionList: React.FC<{ questions: IQuestion[] }> = (props) => {
  const questions = props.questions.reverse();

  return (
    <ul>
      {!props.questions || props.questions.length === 0 ? (
        <p className="text-center text-2xl italic text-gray-500">
          Currently no questions in this quiz.
        </p>
      ) : (
        questions.map((q) => (
          <QuizQuestion key={q.id} question={q} />
        ))
      )}
    </ul>
  );
};

export default QuizQuestionList;
