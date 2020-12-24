import React from "react";
import "./App.scss";
import Sakura from "../SakuraBackground/Sakura";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";

import ModalFunctional from "../ModalFunctional/ModalFunctional";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


class App extends React.Component {
  constructor(props){
    super(props);
    
    class App extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          menuDisplayed: false,
          active: true,
        }
        this.displayMenu = this.displayMenu.bind(this);
        
      }
      
        displayMenu(event){
          this.setState( prevState => {
            return {
              menuDisplayed: !prevState.menuDisplayed,
              active: !prevState.active,
            }
          })
        }
    


  render() {
   
    console.log(this.state);
    return (
      <div className="App">
          <BrowserRouter>
                <Sakura></Sakura>
                <Header displayMenu={this.displayMenu} active={this.state.active}  menuDisplayed={this.state.menuDisplayed}></Header>
                <main>
                  <AboutMe ></AboutMe>
                  <Projects showDetailsModalMenu={this.showDetailsModalMenu} detailsModalShow={this.state.detailsModalShow}  projectsData={this.state.projectsData}></Projects>
                  <ModalFunctional  closeModal={this.closeModal} detailsModalShow={this.state.detailsModalShow}> 
                    <ProjectDetailsModal  detailsProjectClicked={this.state.detailsProjectClicked}/>
                  </ModalFunctional>
                </main>
                <Footer></Footer>

          </BrowserRouter>
      </div>
    
    );
  }
}
export default App;
