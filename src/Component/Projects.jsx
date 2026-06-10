import "../Css/Projects.css";

function Projects() {
  return (
    <div className="projects">

      <h1>Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h2>AI Diabetic Retinopathy Detection</h2>
          <p>
            Deep learning model using CNN
            for retinal disease diagnosis.
          </p>
        </div>

        <div className="project-card">
          <h2>Smart Eye Disease Prediction</h2>
          <p>
            Machine learning based diagnosis
            support system.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Projects;