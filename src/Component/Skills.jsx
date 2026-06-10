import "../Css/Skills.css";

function Skills() {

const skills = [
"Eye Examination",
"Retinoscopy",
"Visual Acuity Testing",
"Refraction",
"Patient Care",
"Communication",
"Medical Documentation",
"Research"
];

return (
<div className="skills-container">

<h1>Professional Skills</h1>

<div className="skills-grid">

{skills.map((skill,index)=>(
<div key={index} className="skill-card">
{skill}
</div>
))}

</div>

</div>
)
}

export default Skills;