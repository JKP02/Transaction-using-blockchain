import React from 'react';
import "./About.css";
const About = () => {
    return (
        <div className="about-us">
            <div className="container">
                <div className="section">
                    <h1>About Us</h1>
                    <p>Welcome to our blockchain-based token transaction system!</p>
                </div>

                <div className="section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to revolutionize the way transactions are conducted using blockchain technology.</p>
                </div>

                <div className="section">
                    <h2>Our Vision</h2>
                    <p>We envision a future where financial transactions are secure, transparent, and accessible to everyone.</p>
                </div>

                <div className="section">
                    <h2>Our Team</h2>
                    <div className="team-member">
                        <img src="avatar1.jpg" alt="Team Member" />
                        <div className="details">
                            <p className="name">John Doe</p>
                            <p className="role">Blockchain Developer</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="avatar2.jpg" alt="Team Member" />
                        <div className="details">
                            <p className="name">Jane Smith</p>
                            <p className="role">UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
