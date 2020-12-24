import React from "react";
import Project from "../Project/Project";

const Projects = (props) => {

  const showDetailsModalMenu = (event) => {
    console.log (event.currentTarget.id);
    const key = event.currentTarget.id;
    props.showDetailsModalMenu(key);
  }


    const projects = props.projectsData.map((project) => {
        return(
          <li key={project.id} className= "projects__list--item" id={project.id} onClick={showDetailsModalMenu}>
            <Project   project={project} />
          </li>
        )
      });


      
     return (

        <section className="projects">
          <h1 className="projects__heading">Proyectos</h1>
          <div className="projects__container">
              <ul className="projects__list">{projects}</ul>
          </div>
        </section>
  );
};


export default Projects;
