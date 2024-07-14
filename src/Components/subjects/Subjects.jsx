import React from "react";
import subjectsData from "../../../public/Questions.json"; // Assuming the path is correct
import "./Subjects.css";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const subjects = subjectsData.subjects; // Accessing the subjects array from the JSON data

  const handleSelectedSubject = (subject) => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <div>
      <div id="subject-list">
        {subjects.map((item, index) => (
          <div
            key={index}
            className="subject-card"
            onClick={() => handleSelectedSubject(item.name)}
          >
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
