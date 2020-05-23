import React, {Component} from "react";
import BackDrop from "./components/BackDrop/Backdrop";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

import Drawer from "./components/Drawer/Drawer"
import LeftDrawer from "./components/LeftDrawer/LeftDrawer";



class App extends Component{
  //Set leftdrawer intially to false 
  state = {
    leftDrawerOpen: false,
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //Get previous state and then return object and update the state 
  sideButtonToggleClickHandler = () => {
    this.setState((prevState) => {
    return { leftDrawerOpen: !prevState.leftDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({leftDrawerOpen: false});
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Home />;
    }
  };

  render() {
    let backdrop;
  
  
    if (this.state.leftDrawerOpen) {
      backdrop = <BackDrop onClickHandler={this.backdropClickHandler} />;
    
    }

    return (
      <div style={{height: "100%"}}>
      <Drawer
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
        sideButtonClickHandler={this.sideButtonToggleClickHandler} 
      />
      <LeftDrawer 
      show={this.state.leftDrawerOpen}
      handlePageChange={this.handlePageChange}
      sideButtonClickHandler={this.sideButtonToggleClickHandler}
      />
      {backdrop}
      {this.renderPage()}
    </div>
  
    );
  }

}

export default App;

