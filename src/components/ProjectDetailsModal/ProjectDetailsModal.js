import React from "react";
import github from "../../images/github.svg";
import code from "../../images/monitor.svg";



const ProjectDetailsModal = (props) => {
  console.log(props.detailsProjectClicked);
  const {title, description, webLink, githubLink } = props.detailsProjectClicked;



  return (
    <section className="projectDetails">
      <p className="" >{description}</p>
      <ul className="projectDetails__links">
        <li className= "projectDetails__link" >
          <a 
            className = "projectDetails__link--github"
              target="_blank"
              rel="noreferrer"
              title="Github access" 
              href={githubLink}>
                <img 
                  className = "projectDetails__icon--github"
                  src={github} 
                  alt="Github icon" />
            </a>
          </li>
          <li className= "projectDetails__link" >
          <a 
            className = "projectDetails__link--webLink"
              target="_blank"
              rel="noreferrer"
              title="webLink access" 
              href={webLink}>
                <img 
                  className = "projectDetails__icon--webLink"
                  src={code} 
                  alt="webLink icon" />
            </a>
          </li>
      </ul>
    </section>

  );
};

export default ProjectDetailsModal;
