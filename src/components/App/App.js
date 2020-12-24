import React from "react";
import "./App.scss";
import Sakura from "../SakuraBackground/Sakura";
import Header from "../Header/Header";

import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Data from "../../services/Data";
import ModalFunctional from "../ModalFunctional/ModalFunctional";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplayed: false,
      active: true,
      projectsData: Data,
      detailsModalShow: false,
      detailsProjectClicked: {}

    }
    this.displayMenu = this.displayMenu.bind(this);
    this.showDetailsModalMenu = this.showDetailsModalMenu.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this. toggleMenuIcon = this. toggleMenuIcon.bind(this);
  }
  
  closeModal() {
    console.log("hola close");
     this.setState ( {
         detailsModalShow: false,
        })
  }
  showDetailsModalMenu(key){
    console.log("hola open");
    console.log (key);

     this.setState ( {
         detailsModalShow: true,
        }
     )
     const projectsData = this.state.projectsData;
     console.log(projectsData);

    const dataClickedProject = projectsData.find((projectData)  => 
    {return projectData.id === parseInt(key) });
    console.log(dataClickedProject); 
    
    if (dataClickedProject !== undefined){  
      return (
        this.setState ( {
          detailsProjectClicked: dataClickedProject,
        }
     ) 
         
    )} 
    

    }
    // <ProjectDetailsModal projectData={dataClickedProject}/> 

    // if (this.state.detailsModalShow === true) {
     
    //   this.setState({
    //     detailsModalShow: false,
    //   });
    // }
    // else {
    //   this.setState({
    //     detailsModalShow: true,
    //   });

    // }

 

    // showDetailsModalMenu(data){
    //   console.log("entro en funcióin");
    //   this.setState ( {
    //     detailsModalShow: true,
    //     detailsModalData: data,
    //   }
    // )
    // }

    displayMenu(event){
      this.setState( prevState => {
        return {
          menuDisplayed: !prevState.menuDisplayed,
          active: !prevState.active,
        }
      })
    }

    // toggleMenuIcon(){
    //   this.setState( prevState => {
    //     return {
    //       active: !prevState.active,
    //     }
    //   })

    // }
    
    //  renderProjectDetail(event){
    //    const projectsData = this.state.projectsData;
    //    console.log(event);
  
    //   const dataClickedProject = projectsData.find((projectData) => 
    //   {return projectData.id === parseInt(props.match.params.projectId)});
  
    //   if (dataClickedProject !== undefined){
    //     return (
    //       <>
    //         <ProjectDetailsModal projectData={dataClickedProject}/>
    //       </>
    //   )} 
    //  }
    

  render() {
   

    console.log(this.state);
    return (
      <div className="App">
      

          <BrowserRouter>
           
                <Sakura></Sakura>
                <Header displayMenu={this.displayMenu} active={this.state.active} toggleMenuIcon={this.toggleMenuIcon} menuDisplayed={this.state.menuDisplayed}></Header>
                
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
