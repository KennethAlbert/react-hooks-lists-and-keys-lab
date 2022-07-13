import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techArrays=technologies.map((technology) => (
    <span key={technology}>{technology}</span>
 
 ))
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      <span>{/* render a <span> for each technology in the technologies array */
        techArrays}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
