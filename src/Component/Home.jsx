import { useState } from "react";
import "../Css/Home.css";
import profile from "../assets/profile.jpeg";
import degree from "../assets/degree.jpeg";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaEye,
  FaGraduationCap,
} from "react-icons/fa";

function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="badge">
            <FaEye /> Future Ophthalmologist
          </span>

          <h3>Hello, I'm</h3>

          <h1>Dr. Your Name</h1>

          <h2>B.Sc Optometry Student</h2>

          <p className="description">
            Passionate about eye care, vision science,
            ophthalmology, clinical diagnosis, patient care,
            medical research and healthcare innovation.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-btn"
            >
              Download Resume
            </a>

            <button
              className="secondary-btn"
              onClick={() => setShowContact(true)}
            >
              Contact Me
            </button>

          </div>

          <div className="social-icons">

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-card">
            <img
              src={profile}
              alt="Profile"
              className="profile-img"
            />
          </div>

          <div className="degree-card">

            <img
              src={degree}
              alt="Degree"
              className="degree-img"
            />

            <p>
              <FaGraduationCap />
              &nbsp; B.Sc Optometry (Pursuing)
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT MODAL */}

      {showContact && (
        <div
          className="modal-overlay"
          onClick={() => setShowContact(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Contact Me</h2>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
            />

            <button
              className="send-btn"
              onClick={() => setShowContact(false)}
            >
              Send Message
            </button>

          </div>
        </div>
      )}

      {/* FUTURE GOAL */}

      <section className="goal-section">

        <div className="goal-card">

          <h2>🎯 Future Goal</h2>

          <p>
            To become a highly skilled Ophthalmologist
            dedicated to improving patient vision,
            preventing blindness and contributing to
            innovative eye-care technologies and research.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>4+</h2>
          <p>Years of Study</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Workshops</p>
        </div>

        <div className="stat-card">
          <h2>5+</h2>
          <p>Certifications</p>
        </div>

        <div className="stat-card">
          <h2>3+</h2>
          <p>Research Projects</p>
        </div>

      </section>

    </div>
  );
}

export default Home;