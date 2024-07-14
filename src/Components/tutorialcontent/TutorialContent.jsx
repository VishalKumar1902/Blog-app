import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TutorialContent.css";

const TutorialContent = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [tutorialContent, setTutorialContent] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch("/Tutorials.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log
        const selectedSubject = data.subjects.find(
          (item) => item.name === subject
        );
        if (selectedSubject) {
          console.log("Selected subject:", selectedSubject); // Debug log
          setTutorialContent(selectedSubject.tutorial);
        } else {
          console.log("Selected subject not found");
        }
      } catch (error) {
        console.log("Error fetching tutorials:", error);
      }
    };
    fetchTutorials();
  }, [subject]);

  if (!tutorialContent) {
    return <div>Loading...</div>;
  }

  return (
    <div id="tutorial">
      <div id="back-btn-container">
        <button className="button" onClick={() => navigate("/tutorials")}>
          Back
        </button>
      </div>

      <h2 id="tutorial-title">{subject} Tutorial</h2>
      <div id="tutorial-content">
        {tutorialContent.map((item, index) => (
          <div key={index} id="notes">
            <h3>{item.topic}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialContent;
