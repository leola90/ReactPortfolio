import React from "react";
import "./LeftDrawer.css";

const LeftDrawer = props => {

    let drawerClasses = "left-drawer";
    if (props.show) {
        drawerClasses = "left-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul> 
                <li>
                    <a
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >
                    Home
                    </a>
                </li>
                <li>
                    <a 
                    href="#projects"
                    onClick={() => props.handlePageChange("Projects")}
                    className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
                    >
                    Projects
                    </a>
                </li>
                <li>
                    <a 
                    href="#contact"
                    onClick={() => props.handlePageChange("Contact")}
                    className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >
                    Contacts
                    </a>
                </li>
            </ul>
        </nav>
    )


};

export default LeftDrawer;