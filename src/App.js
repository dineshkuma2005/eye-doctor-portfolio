import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Certifications from "./Component/Certifications";
//import Contact from "./Component/Contact";
import "./App.css";

//<Route path="/contact" element={<Contact />} />


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Educations" element={<Education />} />
          <Route path="/Certifications" element={<Certifications />} />                    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
