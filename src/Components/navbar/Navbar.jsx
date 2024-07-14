import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <div id="left-nav">
        <Link to="/">QuizByte</Link>
      </div>
      <ul id="right-nav">
        <li>
          <Link to="/quizzes">Quizzes</Link>
        </li>
        <li>
          <Link to="/tutorials">Tutorials</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
