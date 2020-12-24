import React from "react";
import github from "../../images/github.svg";



const ProjectDetailsModal = (props) => {
  console.log(props.detailsProjectClicked);
  const {title, description, webLink, githubLink, img } = props.detailsProjectClicked;



  return (
    <section className="projectDetails">
      <div className="projectDetails__img-container">
        <img className="projectDetails__img" 
            src={img} 
            alt={title} 
            title={title}/>
        <p className="projectDetails__title" >{title}</p>
        <p className="projectDetails__description" >{description}</p>
        <ul className="projectDetails__links">
          <li className= "projectDetails__link" >
            <a 
              className = "projectDetails__link-github"
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
              className = "projectDetails__link-webLink"
                target="_blank"
                rel="noreferrer"
                title="webLink access" 
                href={githubLink}>
                  <img 
                    className = "projectDetails__icon--webLink"
                    src={github} 
                    alt="webLink icon" />
              </a>
            </li>
        </ul>
      </div>
    </section>

  );
};


export default ProjectDetailsModal;