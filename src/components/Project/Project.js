import React from "react";




const Project = (props) => {
  const {title, img, skills } = props.project;
    
  const skillsInfo = skills.map((skill) => {
      return(
        <li key={skill} className= "project__info--skillsList-item">
          {skill}
        </li>
      )
    });
    

 



    return (
   <>
    
        <div className="project__img--container">
          <img className="project__img" 
            src={img} 
            alt={title} 
            title={title}/>
        </div>
        <div className="project__info--container">
          <h2 className="project__info--title">{title}</h2>
          <ul className="project__info--skillsList">{skillsInfo}</ul>
        </div>
    </>  


  );
};


export default Project;
