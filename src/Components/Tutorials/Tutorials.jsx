import React from "react";
import { useNavigate } from "react-router-dom";
import tutorialsData from "../../../public/Tutorials.json"; // Ensure the path is correct
import "./Tutorials.css";

const Tutorials = () => {
  const navigate = useNavigate();
  const subjects = tutorialsData.subjects; // Accessing the subjects array from the JSON data

  const handleSelectSubject = (subject) => {
    navigate(`/tutorial/${subject}`);
  };

  return (
    <div>
      <div id="subject-list">
        {subjects.map((item, index) => (
          <div
            key={index}
            className="subject-card"
            onClick={() => handleSelectSubject(item.name)}
          >
            <div className="icon tutorial-icons">
              <i className={item.icon}></i>
            </div>
            <h3 id="tutorial-card-title">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
