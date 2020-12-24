import React from "react";
import IcoArrow from "../../images/ico-arrow.svg";

const Footer = (props) => {
 
  return (
    <footer className="footer" role="contentinfo">
{/*       
     <div class="footer__button">
        <a className="footer__button--link" href="#top" rel="Inicio" title="Ir al inicio de la página">
            <img src={IcoArrow} alt="Ir al inicio de la página" title="Enlace a inicio" />
        </a>
    </div> */}
 
    <small className= "footer__small">&copy; 2020. Ana Martínez Fernández</small>
  </footer>
  );
};


export default Footer;
