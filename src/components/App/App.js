import React from "react";
import "./App.scss";



class App extends React.Component {
  constructor(props){
    super(props);
    
  render() {
   

    console.log(this.state);
    return (
      <div className="App">
          <BrowserRouter>
                <Sakura></Sakura>
           
          </BrowserRouter>
      </div>
    
    );
  }
}
export default App;
