import React, {useState} from "react";
import arrow from "../assets/icons/icon-arrow.svg";
import paramour from "../assets/home/desktop/image-hero-paramour.jpg";
import federal from "../assets/home/desktop/image-hero-federal.jpg";
import seraph from "../assets/home/desktop/image-hero-seraph.jpg";
import trinity from "../assets/home/desktop/image-hero-trinity.jpg";
import { NavLink } from "react-router-dom";
import welcome from "../assets/home/desktop/image-welcome.jpg";
import del from "../assets/portfolio/desktop/image-del-sol.jpg";
import b from "../assets/portfolio/desktop/image-228b.jpg";
import proto from "../assets/portfolio/desktop/image-prototype.jpg";

const Home = () => {
    const data = [
        {
            "name": "Project Paramour",
            "desc": "Project made for an art museum near Southwest London. Project Paramout is a statement of bold, modern architecture.",
            "src": paramour
        },
        {
            "name": "Seraph Station",
            "desc": "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
            "src": seraph
        },
        {
            "name": "Federal II Tower",
            "desc": "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
            "src": federal
        },
        {
            "name": "Trinity Bank Tower",
            "desc": "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
            "src": trinity
        }
    ]
    const [themeIndex, setThemeIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleThemeChange = (index) => {
        if (themeIndex === index) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setThemeIndex(index);
            setIsTransitioning(false);
        }, 500); 
    };
    return(
        <div className="home-container">
            <div
                className={`home-first ${isTransitioning ? 'transitioning' : ''}`}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data[themeIndex].src})`,
                }}
            >
                <div className="project-container">
                    <h1 className="project">{data[themeIndex].name}</h1>
                    <p className="project-desc">{data[themeIndex].desc}</p>
                    <NavLink className="changer" to="portfolio"><button className="button">See Our Portfolio   <img className="arrow" src={arrow} /></button></NavLink>
                </div>

                <div className="theme-changer">
                    {data.map( (item, index) => (
                        <button 
                            key={index}
                            className={`theme-but ${themeIndex === index ? 'colored' : ''}`}
                            onClick={() => handleThemeChange(index)}
                        > {index + 1}
                        </button>   
                    )
                    )}
                </div>
            </div>
            <div className="welcome">
                <h1 className="bigWelcome">Welcome</h1>
                <div className="welcome-container">
                    <div className="text-welcome">
                        <h1 className="sub-welcome">Welcome to Arch Studio</h1>
                        <p className="welcome-desc">We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. </p>
                        <p className="welcome-desc">Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
                        <p className="welcome-desc">We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                    </div>
                    <div className="img-welcome">
                        <img src={welcome} />
                    </div>
                </div>
            </div>
            <div className="small-team">
                <div className="inner-team">
                    <h1 className="ideas-team">Small Teams, Big Ideas</h1>
                    <NavLink className="changer" to="about"><button className="button">About Us   <img className="arrow" src={arrow} /></button></NavLink>
                </div>
            </div>
            <div className="feature">
                <div className="title">
                    <h1 className="feature-title">Featured</h1>
                    <NavLink className="changer" to="portfolio"><button className="button">See All   <img className="arrow" src={arrow} /></button></NavLink>
                </div>
                <div className="current-projects">
                    <div className="image-feature" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${del})`}}>
                        <h1 className="number">1</h1>
                        <div className="name-control">
                            <h2 className="name-feature">Project Del Sol</h2>
                            <p className="simple">View All Projects</p>
                        </div>
                    </div>
                    <div className="image-feature" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${b})`}}>
                        <h1 className="number">2</h1>
                        <div className="name-control">
                            <h2 className="name-feature">288B Tower</h2>
                            <p className="simple">View All Projects</p>
                        </div>
                    </div>
                    <div className="image-feature" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${proto})`}}>
                        <h1 className="number">3</h1>
                        <div className="name-control">
                            <h2 className="name-feature">Le Prototype</h2>
                            <p className="simple">View All Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;