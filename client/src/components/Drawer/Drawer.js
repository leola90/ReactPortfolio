import React from "react";
import './drawer.css';
import SideButtonToggle from "../LeftDrawer/sideButtonToggle";


const Drawer = props => (
    <header className="drawer">
        <nav className="drawer_navigation">
            <div>
                <SideButtonToggle click={props.sideButtonClickHandler} />
            </div>
            <div className="drawer_logo"><a href="/">Leo La</a></div>
            <div className="spacer"></div>
            <div className="drawer_navigation-items">
                <ul>
                    <li><a 
                          href="#home"
                          onClick={() => props.handlePageChange("Home")}
                          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                        >
                        Home
                        </a>
                    </li>
                    <li><a 
                          href="#projects"
                          onClick={() => props.handlePageChange("Projects")}
                          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
                        >
                        Projects
                        </a>
                    </li>
                    <li><a 
                          href="#contact"
                          onClick={() => props.handlePageChange("Contact")}
                          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                        >
                        Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
);

export default Drawer;

