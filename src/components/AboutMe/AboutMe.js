import React from "react";
import photo_250 from "../../images/ana_foto_250.png";
import photo_150 from "../../images/ana_foto_150.png";


const AboutMe = (props) => {
  
  return (
    <section className="aboutMe" id="sobreMi" >
      <div  className="aboutMe__text--heading-container">
          <h1 className="aboutMe__text--heading">Sobre mi</h1></div>
      <div className="aboutMe__text--description-container">
          <p className="aboutMe__text--description">Curiosa y comprometida, con gran interés en proyectos digitales que apuesten por la <b>innovación</b> y que tengan un <b>impacto social</b> positivo.</p>
          <br></br>
          <p className="aboutMe__text--description">Implicada y resolutiva, mi trayectoria en la gestión, coordinación y desarrollo de iniciativas sociales, ha potenciado mi adaptabilidad a entornos diversos y equipos multidisciplinares. </p>
          <br></br>
          <p className="aboutMe__text--description">Experimentada en el <b>trabajo en equipo</b> bajo metodologías ágiles, valoro el aprendizaje continuo y la colaboración, buscando siempre generar el máximo valor para las personas y la empresa.</p>
      </div>
      <div className="aboutMe__img--container">
          <img src={photo_250} alt="" className="aboutMe__img"/>
      </div>
    </section>
  );
};


export default AboutMe;