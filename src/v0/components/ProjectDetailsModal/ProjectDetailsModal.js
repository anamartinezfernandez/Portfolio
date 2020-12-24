
import React from "react";




const ProjectDetailsModal = (props) => {
  console.log(props.detailsProjectClicked);
  const {title, img } = props.detailsProjectClicked;



  return (
    <>
    <div className="project__img-container">
    <img className="project__img" 
          src={img} 
          alt={title} 
          title={title}/>
        {/* <p>{title}</p>
        <p>{description}</p>
        <p>{webLink}</p>
        <p>{githubLink}</p> */}
      </div>
    </>

  );
};


export default ProjectDetailsModal;