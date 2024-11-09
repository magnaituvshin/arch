import React, {useState} from "react";
import phone from "../assets/contact/desktop/image-hero.jpg";
import arrow from "../assets/icons/icon-arrow.svg";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const LocationZoom = ({ position }) => {
    const map = useMap();
    map.setView(position, 13);
    return null;
};
const Contact = () => {
    const firstLocation = [35.952461, -83.991531];
    const secondLocation = [29.897430, -97.827507];
    const [position, setPosition] = useState(null);
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
    });
    const [first, setFirst] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        first: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

       
        
        if (name === 'first') setFirst(value);
        if (name === 'email') setEmail(value);
        if (name === 'message') setMessage(value);
    };
    const handleFocus = (e) => {
        const { name } = e.target;
    
        // Clear the error when the field is focused
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '' // Clear the error for this field
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if fields are empty and set errors
        const newErrors = {
            first: first.trim() ? '' : "Can't be empty",
            email: email.trim() ? '' : "Can't be empty",
            message: message.trim() ? '' : "Can't be empty"
        };

        setErrors(newErrors);
        
        // If there are no errors, submit the form
        if (!newErrors.first && !newErrors.email && !newErrors.message) {
            console.log("Form Submitted!");
            // Reset form fields if needed
            setFirst('');
            setEmail('');
            setMessage('');
        }
    };

    L.Marker.prototype.options.icon = DefaultIcon;
    return (
        <div className="contact-container">
            <div className="hero-container">
                <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${phone})`}}></div>
                <h1 className="bigAbout">Contact</h1>
                <div className="hero-text-container">
                    <div className="inner-hero">
                        <h1 className="about-title contact-title">Tell us about your project</h1>
                        <p className="about-text">We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                    </div>
                </div>
            </div>

            <div className="address">
                <div>
                    <h1 className="about-title contact-title fixer">Contact Details</h1>
                </div>
                <div>
                    <h4 className="office-type">Main Office</h4>
                    <p className="how-to"> Mail: archone@gmail.com</p>
                    <p className="how-to">Address: 1892 Chenoweth Drive TN</p>
                    <p className="how-to">Phone: 111-111-111</p>
                    <button onClick={()=> setPosition(firstLocation)} className="map">View on Map <img src={arrow} className="map-arrow" /></button>
                </div>
                <div>
                    <h4 className="office-type">Office II</h4>
                    <p className="how-to"> Mail: archtwo@gmail.com</p>
                    <p className="how-to">Address: 3399 Wines Lane TX</p>
                    <p className="how-to">Phone: 222-111-111</p>
                    <button onClick={()=> setPosition(secondLocation)} className="map">View on Map <img src={arrow} className="map-arrow" /></button>
                </div>
            </div>
            <div className="location">
                <MapContainer center={[32.9249455, -90.909519]} zoom={6} style={{ height: "80vh", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={firstLocation}>
                        <Popup>Main Office</Popup>
                    </Marker>
                    <Marker position={secondLocation}>
                        <Popup>Second Office</Popup>
                    </Marker>
                    {position && <LocationZoom position={position} />}
                </MapContainer>
            </div>
            <div className="form">
            <h1 className="about-title contact-title fixed">Connect with us</h1>
            <form className="input-container" onSubmit={handleSubmit}>
                <div className="input-span">
                    <input
                        onFocus={handleFocus}
                        name="first"
                        value={first}
                        onChange={handleChange}
                        className="each-input"
                        placeholder="Name"
                    />
                    {errors.first && <span className="errorShow">{errors.first}</span>}
                    <div className="bottom-border"></div>
                </div>
                <div className="input-span">
                    <input
                        onFocus={handleFocus}
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="each-input"
                        placeholder="Email"
                    />
                    {errors.email && <span className="errorShow">{errors.email}</span>}
                    <div className="bottom-border"></div>
                </div>
                <div className="input-span">
                    <input
                        onFocus={handleFocus}
                        name="message"
                        value={message}
                        onChange={handleChange}
                        className="each-input"
                        placeholder="Message"
                    />
                    {errors.message && <span className="errorShow">{errors.message}</span>}
                    <div className="bottom-border"></div>
                </div>
                <button type="submit" className="new">
                    <img className="new-arrow" src={arrow} alt="arrow" />
                </button>
            </form>
        </div>
        </div>
    );
}
export default Contact;