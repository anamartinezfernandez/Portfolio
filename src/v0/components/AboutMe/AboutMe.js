import React from "react";
import photo from "../../images/photo_Ana.png";


const AboutMe = (props) => {
  
  return (
    <section className="aboutMe">
     
            <div className="aboutMe__text--container">
                <h1 className="aboutMe__text--heading">Sobre mi</h1>
    
                <p className="aboutMe__text--description">Curiosa y comprometida, he encaminado mi carrera profesional en busca... Con gran interés en proyectos digitales que tengan un <b>impacto social</b> positivo y apuesten por la <b>innovación</b>.</p>
                <br></br>
                <p className="aboutMe__text--description">Implicada y resolutiva, mi trayectoria en la gestión, coordinación y desarrollo de iniciativas sociales, ha potenciado mi adaptabilidad a entornos diversos y equipos multidisciplinares. </p>
                <br></br>
                <p className="aboutMe__text--description">Experimentada en el <b>trabajo en equipo</b> bajo metodologías ágiles, valoro el aprendizaje continuo y la colaboración, buscando siempre generar el máximo valor para las personas y la empresa.</p>
            </div>
            <div className="aboutMe__img--container">
                <img src={photo} alt="" className="aboutMe__img"/>
            </div>
    
    </section>

  );
};


export default AboutMe;