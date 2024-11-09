import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="nav-container">
            <nav className="options">
                <NavLink className="navbarBig" to="/"><img src={logo} /></NavLink>
                <NavLink className="navbarBig" to="/portfolio">Portfolio</NavLink>
                <NavLink className="navbarBig" to="/about">About Us</NavLink>
                <NavLink className="navbarBig" to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}
export default Navbar;