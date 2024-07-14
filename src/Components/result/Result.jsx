import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";

const Result = () => {
  const { score, total } = useParams();
  const navigate = useNavigate();

  const percentage = (score / total) * 100;
  const Remarks = () => {
    if (percentage >= 75) {
      return <FontAwesomeIcon icon={faSmile} size="2x" color="green" />; // Happy face icon for good score
    } else if (percentage < 75 && percentage >= 50) {
      return <FontAwesomeIcon icon={faMeh} size="2x" color="orange" />; // Neutral face icon for average score
    } else {
      return <FontAwesomeIcon icon={faFrown} size="2x" color="red" />; // Sad face icon for bad score
    }
  };

  return (
    <div id="result">
      <div id="score-container">
        <p id="emoji">{Remarks(score, total)} </p>
        <p id="percentage">{`${percentage}% Accuracy`}</p>
        <h3 id="score">
          Your Score: {score}/{total}
        </h3>

        <button
          className="button"
          onClick={() => {
            navigate("/quizzes");
          }}
        >
          Try Again!
        </button>
      </div>
    </div>
  );
};

export default Result;
