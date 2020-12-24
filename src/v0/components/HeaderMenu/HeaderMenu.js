import React from "react";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.png";
import { Link } from 'react-router-dom';


const HeaderMenu = (props) => {
  return (
    <>
      <img 
            className = "header__logo--github"
            src={github} 
            title="Logo de github" 
            alt="github logo"
            />
      <img 
            className = "header__logo--linkedin"
            src={linkedin} 
            title="Logo de github" 
            alt="github logo"
            />
      <nav role="navigation" className="header__navigator">
        <ul className="header__browser" >
          <li className="header__browser--element">
            <Link to="projects" className="header__link">
              Proyectos
            </Link>
          </li>
          <li className="header__browser--element">
            <Link to="aboutMe" className="header__link">
              Sobre mi
            </Link>
          </li>
          <li className="header__browser--element">
            <Link to="contact" className="header__link">
              Contacto
            </Link>
          </li>
        </ul>

    
  <div className="button__container">
  <div type="button"  className= {props.active ? 'menu-icon' : 'menu-icon & active'}    onClick={props.displayMenu}>
    <span className="menu-icon-line menu-icon-line-1 line-1"></span>
    <span className="menu-icon-line line-2"></span>
    <span className="menu-icon-line line-3"></span>
  </div>
</div>
{/* <nav  className= "navigator" role="navigation">
<ul className={props.menuDisplayed ? 'burger__browser--list & burger__browser--list-open' : 'burger__browser--list'}  >

           <li className="burger__browser--elements">
              <Link to="projects" className="header__link" >
                 Proyectos
               </Link>
             </li>
            <li className="burger__browser--elements">
              <Link to="aboutMe" className="header__link" >
               Sobre mi
               </Link>
             </li>
             <li className="burger__browser--elements">
               <Link to="contact" className="header__link" >
                 Contacto
               </Link>
             </li>
       </ul>
       </nav> */}
</nav> 
</>    
  );
};
export default HeaderMenu;

// const HeaderMenu = (props) => {
//   return (
//     <>
//       <img 
//             className = "header__logo--github"
//             src={github} 
//             title="Logo de github" 
//             alt="github logo"
//             />
//       <img 
//             className = "header__logo--linkedin"
//             src={linkedin} 
//             title="Logo de github" 
//             alt="github logo"
//             />
//       <nav role="navigation" className="header__navigator">
//         <ul className="header__browser" >
//           <li className="header__browser--element">
//             <Link to="projects" className="header__link">
//               Proyectos
//             </Link>
//           </li>
//           <li className="header__browser--element">
//             <Link to="aboutMe" className="header__link">
//               Sobre mi
//             </Link>
//           </li>
//           <li className="header__browser--element">
//             <Link to="contact" className="header__link">
//               Contacto
//             </Link>
//           </li>
//         </ul>

    
// <div className="button__container">
//   <div type="button"  className= {props.active ? 'menu-icon' : 'menu-icon & active'}    onClick={props.displayMenu}>
//     <span className="menu-icon-line menu-icon-line-1 line-1"></span>
//     <span className="menu-icon-line line-2"></span>
//     <span className="menu-icon-line line-3"></span>
//   </div>
// </div>
// <nav  className= "navigator" role="navigation">
// <ul className={props.menuDisplayed ? 'burger__browser--list & burger__browser--list-open' : 'burger__browser--list'}  >

//            <li className="burger__browser--elements">
//               <Link to="projects" className="header__link" >
//                  Proyectos
//                </Link>
//              </li>
//             <li className="burger__browser--elements">
//               <Link to="aboutMe" className="header__link" >
//                Sobre mi
//                </Link>
//              </li>
//              <li className="burger__browser--elements">
//                <Link to="contact" className="header__link" >
//                  Contacto
//                </Link>
//              </li>
//        </ul>
//        </nav>
// </nav>
// </>    
//   );
// };
// export default HeaderMenu;
