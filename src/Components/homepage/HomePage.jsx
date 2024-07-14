import React, { useState } from "react";
import "./HomePage.css";
import QuizIcon from "../../assets/questionary.png";
import BlogImage from "../../assets/blog.png";
import QuizImage from "../../assets/chat.png";
import TutorialImage from "../../assets/questionary.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const showMessage = () => {
    alert(
      `
      name: ${formData.name}
      email: ${formData.email}
      message: ${formData.message}
      has been sent.
      `
    );
  };
  return (
    <>
      <div id="HomePage">
        <section id="section1">
          <div id="Home-Left">
            <h1>
              Welcome to <span id="app-name">QuizByte!</span>
            </h1>
            <p>
              Explore our quizzes, tutorials, and blogs designed to enhance your
              knowledge. Challenge yourself, learn new skills, and stay informed
              on a variety of topics. Dive in and start your journey to becoming
              a smarter you!
            </p>
            <div>
              <button id="Explore-button">
                <a href="#section2">Explore more</a>
              </button>
            </div>
          </div>

          <div id="Home-Right">
            <img src={QuizIcon} alt="" />
          </div>
        </section>
        <section id="section2">
          <Link to="/quizzes" className="Section2-cards">
            <img src={QuizImage} alt="" />
            <h3>Quizzes</h3>
            <p>Test your knowledge with our engaging quizzes.</p>
          </Link>

          <Link to="/tutorials" className="Section2-cards">
            <img src={TutorialImage} alt="" />
            <h3>Tutorials</h3>
            <p>Learn new skills with our step-by-step tutorials.</p>
          </Link>
          <Link
            to="https://techbyvishalkumar.blogspot.com/"
            className="Section2-cards"
          >
            <img src={BlogImage} alt="" />
            <h3>Blogs</h3>
            <p>Stay informed with our insightful blogs.</p>
          </Link>
        </section>
        <section id="section-3">
          <div id="contact-form">
            <h3 id="contact-form-title">Contact Us</h3>
            <input
              type="text"
              placeholder="Enter name"
              className="input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Enter email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              rows={4}
              cols={50}
              placeholder="Enter mesage"
              className="input"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div id="contact-btn-container">
              <button className="button" onClick={showMessage}>
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
