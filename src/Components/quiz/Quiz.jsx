import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("/Questions.json");
        const data = await response.json();
        const selectedSubject = data.subjects.find(
          (item) => item.name === subject
        );
        if (selectedSubject) {
          setQuestions(selectedSubject.quiz);
        } else {
          console.log("Selected subject not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubjects();
  }, [subject]);

  const handleOptionClick = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: option,
    });
  };

  const handleNextQuestion = () => {
    if (
      selectedOptions[currentQuestionIndex] ===
      questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    if (
      selectedOptions[currentQuestionIndex] ===
      questions[currentQuestionIndex].answer
    ) {
      setScore(score + 1);
    }
    setShowScore(true);
    navigate(`/result/${score + 1}/${questions.length}`);
  };

  if (showScore) {
    return null;
  }

  return (
    <div id="quiz">
      <div>
        <h2 id="quiz-title">Quiz on {subject}</h2>
        <div id="quiz-container">
          {questions.length > 0 && currentQuestionIndex < questions.length ? (
            <>
              <div id="question-container">
                {`${currentQuestionIndex + 1}. `}
                {questions[currentQuestionIndex].question}
              </div>
              <div id="options-container">
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        value={option}
                        checked={
                          selectedOptions[currentQuestionIndex] === option
                        }
                        onChange={() => {
                          handleOptionClick(option);
                        }}
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
              <div id="button-container">
                {currentQuestionIndex > 0 && (
                  <button className="button" onClick={handlePreviousQuestion}>
                    Prev
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 && (
                  <button className="button" onClick={handleNextQuestion}>
                    Next
                  </button>
                )}
                {currentQuestionIndex === questions.length - 1 && (
                  <button className="button" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
