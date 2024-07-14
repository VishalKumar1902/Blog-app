import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/homepage/HomePage";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import QuizMain from "./Components/quizmain/QuizMain";
import Quiz from "./Components/quiz/Quiz";
import Result from "./Components/result/Result";
import Tutorials from "./Components/Tutorials/Tutorials";
import TutorialContent from "./Components/tutorialcontent/TutorialContent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<About />} />

          <Route path="/quizzes" element={<QuizMain />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/result/:score/:total" element={<Result />} />
          <Route path="/tutorials" element={<Tutorials />} />

          <Route path="/tutorial/:subject" element={<TutorialContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
