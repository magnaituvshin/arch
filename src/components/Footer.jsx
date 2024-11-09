import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../assets/icons/icon-arrow.svg";
import logo from "../assets/logo.svg";
const Footer = () => {
    return(
        <div className="footer">
            <div className="links-footer">
                <div className="foot hey"><NavLink className="navbarBig" to="/"><img className="special" src={logo} /></NavLink></div>
                <NavLink className="navbarBig hey" to="/portfolio">Portfolio</NavLink>
                <NavLink className="navbarBig hey" to="/about">About Us</NavLink>
                <NavLink className="navbarBig hey" to="/contact">Contact</NavLink>
            </div>
            <NavLink className="changer hi" to="portfolio"><button className="button">See Our Portfolio   <img className="arrow" src={arrow} /></button></NavLink>
        </div>
    );
}
export default Footer;