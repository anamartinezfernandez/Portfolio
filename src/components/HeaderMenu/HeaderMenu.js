import React from "react";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import email from "../../images/email.svg";



const HeaderMenu = (props) => {
  return (
    <>

{/* Section MenuNavigator */}

      <section className= "headerMenu">

          {/*  IconsBrowser */}

        <nav role="navigation" className="headerMenu__iconList">

          <ul className="headerMenu__iconBrowser" >
            <li>
              <a 
              className = "headerMenu__iconlink"
                target="_blank"
                rel="noreferrer"
                title="Github access" 
                href="https://github.com/anamartinezfernandez/">
                  <img 
                    className = "headerMenu__icon--github headerMenu__icon"
                    src={github} 
                    alt="Github icon" />
              </a>
            </li>

            <li>
              <a 
                className = "headerMenu__iconlink"
                target="_blank"
                rel="noreferrer"
                title="Linkedin access" 
                href="https://www.linkedin.com/in/anamartinezfernandez/">
                  <img 
                    className = "headerMenu__icon--linkedin headerMenu__icon"
                    src={linkedin} 
                    alt="Linkedin icon" />
              </a>
            </li>

            <li>
              <a 
              className = "headerMenu__iconlink"
                target="_blank"
                rel="noreferrer"
                title="Email access" 
                href="mailto:anamartinezf6@gmail.com">
                  <img 
                    className = "headerMenu__icon--email headerMenu__icon"
                    src={email} 
                    alt="Email icon" />
              </a>
            </li>

          </ul>
        </nav>
        
          {/*  HeaderMenuBrowser */}
        
        <nav role="navigation" className="headerMenu__navigator">
          <ul className="headerMenu__browser" >
            <li className="headerMenu__browser--element">
            <a href="#sobreMi" className="headerMenu__link" >
                  Sobre Mí
                </a>  
            </li>

            <li className="headerMenu__browser--element">
              
              <a href="#proyectos" className="headerMenu__link" >
                  Proyectos
                </a>
            </li>

            <li className="headerMenu__browser--element">
              
              <a href="#contacto" className="headerMenu__link" >
                  Contacto
                </a>
            </li>

          </ul>
        </nav>

          {/* Burger Button */}

        <div className="headerMenu__burgerButton--container">
          <div type="button" aria-label="Open-Close"  className= {props.active ? 'burgerButton__icon' : 'burgerButton__icon & active'}    onClick={props.displayMenu}>
            <span className="burgerButton__icon--line-1 burgerButton__icon"></span>
            <span className="burgerButton__icon--line-2 burgerButton__icon"></span>
            <span className="burgerButton__icon--line-3 burgerButton__icon"></span>
          </div>
        </div>
      </section> 
      
{/* Section Burger Navigator */}

      <section>
        <nav role="navigation" className= "burgerButton__navigator" >
          <ul className={props.menuDisplayed ? 'burgerButton__browser--list & burgerButton__browser--list-open' : 'burgerButton__browser--list & display'} onClick={props.displayMenu} >
            <li className={props.menuDisplayed ? 'burgerButton__browser--elements' : 'display'} >
                <a href="#sobreMi" className="burgerButton__browser--link" >
                  Sobre mí
                </a>
            </li>
            <li className={props.menuDisplayed ? 'burgerButton__browser--elements' : 'display'} >
            <a href="#proyectos" className="burgerButton__browser--link" >
                  Proyectos
                </a>
            </li>
            <li className={props.menuDisplayed ? 'burgerButton__browser--elements' : 'display'} >
            <a href="#contacto" className="burgerButton__browser--link" >
                  Contacto
                </a>
            </li>
          </ul>
        </nav>  
      </section>
    </>
  );
};
export default HeaderMenu;


