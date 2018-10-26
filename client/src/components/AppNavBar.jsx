import React, { Component } from "react";
import logo from "../resources/artist.png";

class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    <img
                        src={logo}
                        alt="NavBar"
                        className="d-inline-block align-top"
                        width="30"
                        height="30"
                    />
                    Rave On Festival Tracker
                </a>
            </nav>
        );
    }
}

export default AppNavbar;
