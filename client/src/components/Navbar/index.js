import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import "./style.css";

function Navbar (props) {
    const path = props.history.location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Google Books Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className={"nav-item "+(path === "/saved" || "active")}>
                    <a className="nav-link" href="/search">Search</a>
                </li>
                <li className={"nav-item "+(path === "/saved" && "active")}>
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);