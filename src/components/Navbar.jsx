import React from "react";
import logo from "../assets/rosas-logo.png";
import navbarStyle from "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <img src={logo} alt="Lucas Rosas logo" className="logo"/>
            <h1 className="title">Lucas Rosas</h1>    
            <h2><em>director & editor</em></h2>
            <hr className="divider" />
        </nav>
    )
}

export default Navbar;
