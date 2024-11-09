import React from "react";
import hero from "../assets/about/desktop/image-hero.jpg";
import heritage from "../assets/about/desktop/image-heritage.jpg";
import jackson from "../assets/about/desktop/avatar-jackson.jpg";
import jake from "../assets/about/desktop/avatar-jake.jpg";
import maria from "../assets/about/desktop/avatar-maria.jpg";
import thompson from "../assets/about/desktop/avatar-thompson.jpg";
import link from "../assets/icons/icon-linkedin.svg";
import twitter from "../assets/icons/icon-twitter.svg";
const About = ()=> {
    return (
        <div className="about-container">
            <div className="hero-container">
                <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${hero})`}}></div>
                <h1 className="bigAbout">About</h1>
                <div className="hero-text-container">
                    <div className="inner-hero">
                        <h1 className="about-title">Your teams of professionals</h1>
                        <p className="about-text">Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                    </div>
                </div>
            </div>
            <div className="heritage-container">
                <div className="heritage-text-container">
                    <h1 className="heritage-title">Our Heritage</h1>
                    <p className="heritage-text">Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                    <p className="heritage-text">Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</p>
                    <p className="heritage-text">Our small team of world-class professionals provides input on every project. </p>
                </div>
                <img src={heritage} />
            </div>
            <div className="leader">
                <h1 className="leader-title">The Leaders</h1>
                <div className="people">
                    <div className="leader-port">
                        <div className="image-leader" style={{backgroundImage: `url(${jake})`}}>
                            <img  className="dissapear space" src={link} />
                            <img className="dissapear" src={twitter} />
                        </div>
                        <p className="leader-name">Jake Richards</p>
                        <p className="leader-role">Chief Architect</p>
                    </div>
                    <div className="leader-port">
                        <div className="image-leader" style={{backgroundImage: `url(${thompson})`}}>
                            <img  className="dissapear space" src={link} />
                            <img className="dissapear" src={twitter} />
                        </div>
                        <p className="leader-name">Thompson Smith</p>
                        <p className="leader-role">Head of Finance</p>
                    </div>
                    <div className="leader-port">
                        <div className="image-leader" style={{backgroundImage: `url(${maria})`}}>
                            <img  className="dissapear space" src={link} />
                            <img className="dissapear" src={twitter} />
                        </div>
                        <p className="leader-name">Maria Simpson</p>
                        <p className="leader-role">Senior Architect</p>
                    </div>
                    <div className="leader-port">
                        <div className="image-leader" style={{backgroundImage: `url(${jackson})`}}>
                            <img  className="dissapear space" src={link} />
                            <img className="dissapear" src={twitter} />
                        </div>
                        <p className="leader-name">Jackson Rourke</p>
                        <p className="leader-role">Lead Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;