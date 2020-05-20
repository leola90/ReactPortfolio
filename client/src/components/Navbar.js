import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from  "react-mdl";
import { Link, useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();
  
    return (
      <div style={{height: '200px', position: 'relative'}}>
        <Layout style={{background: 'url(https://www.loopbackanalytics.com/wp-content/uploads/2019/04/bg-header-geo.jpg) center / cover'}}>
          <Header transparent title="Leo La" style={{color: 'white'}}>
              <Navigation>
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
              <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Leo La">
              <Navigation>
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
              <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact Me</Link>
              </Navigation>
          </Drawer>
          <Content   />
        </Layout>
      </div>
  
    );
  }
  
  export default Navbar;