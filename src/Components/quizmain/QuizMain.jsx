import React, { useState } from "react";
import Subjects from "../subjects/Subjects";
import Quiz from "../quiz/Quiz";

const QuizMain = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const handleSelectedSubject = (subject) => {
    setSelectedSubject(subject);
  };
  return (
    <div>
      {selectedSubject ? (
        <Quiz selectedSubject={selectedSubject} />
      ) : (
        <Subjects onSelectSubject={handleSelectedSubject} />
      )}
    </div>
  );
};

export default QuizMain;
