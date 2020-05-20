import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
// import { Layout, Header, Navigation, Drawer, Content } from  "react-mdl";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import About from "./components/pages/about";
import Home from "./components/pages/home";


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>

  );
}

export default App;
