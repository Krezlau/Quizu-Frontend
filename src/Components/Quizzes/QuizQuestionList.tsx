import React from "react";
import IQuestion from "../../types/IQuestion";
import QuizQuestion from "./QuizQuestion";

const QuizQuestionList: React.FC<{ questions: IQuestion[], onDelete: (questionId: string) => void }> = (props) => {
  const questions = props.questions.reverse();

  return (
    <ul>
      {!props.questions || props.questions.length === 0 ? (
        <p className="text-center text-2xl italic text-warning">
          Currently no questions in this quiz.
        </p>
      ) : (
        questions.map((q) => (
          <QuizQuestion key={q.id} question={q} onDelete={props.onDelete} />
        ))
      )}
    </ul>
  );
};

export default QuizQuestionList;
