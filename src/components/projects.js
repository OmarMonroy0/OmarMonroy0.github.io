import React from "react";

const Project = ({ name, description, url }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>Ver proyecto</a>
    </div>
  );
};

export default Project;