import "../Css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EyeCare Portfolio</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/Certifications">Certifications</Link>      
        <Link to="/Experience">Experience</Link>      
      </div>
    </nav>
  );
}
 // <Link to="/contact">Contact</Link>
export default Navbar;