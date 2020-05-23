import React from "react";
import './sideButton.css';


const SideButtonToggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);


export default SideButtonToggle;