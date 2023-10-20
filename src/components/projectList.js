import React, { Component } from "react";
import Project from "./projects.js";

// Datos ficticios de proyectos
const Projects = [
  {
    name: "Desarrollo Web",
    description: "Descripción del Proyecto 1",
    html_url: "https://github.com/OmarMonroy0/Desarrollo-Web.git",
  },
  {
    name: "Metodos-Numericos2",
    description: "Descripción del Proyecto 2",
    html_url: "https://github.com/OmarMonroy0/Metodos-Numericos2.git",
  },
  {
    name: "Codigos Programacion Competitiva",
    descripcion:
      "Codigos usados para resolver problemas de programacion competitiva",
    html_url: "https://github.com/OmarMonroy0/Programacion-Competitiva.git",
  },
];

class ProjectList extends Component {
  render() {
    return (
      <div>
        {Projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            url={project.html_url}
          />
        ))}
      </div>
    );
  }
}

export default ProjectList;
