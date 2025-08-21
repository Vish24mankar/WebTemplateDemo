import React from "react";
import {
  FaArrowRight,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
    
      <div className="footer-top">
        {/* Quick Links */}
        <div className="footer-column">
          <h5>Quick Links</h5>
          {["Home", "About Us", "Our Services", "Latest Blog", "Contact Us"].map(
            (link) => (
              <a href="#" key={link} className="footer-link">
                <FaArrowRight className="icon" /> {link}
              </a>
            )
          )}
        </div>

        {/* Popular Links */}
        <div className="footer-column">
          <h5>Popular Links</h5>
          {["Home", "About Us", "Our Services", "Latest Blog", "Contact Us"].map(
            (link) => (
              <a href="#" key={link} className="footer-link">
                <FaArrowRight className="icon" /> {link}
              </a>
            )
          )}
        </div>

        {/* Get In Touch */}
        <div className="footer-column">
          <h5 id="title">Get In Touch</h5>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>123 Street, New York, USA</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>info@example.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+012 345 6789</span>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © <a href="#">Your Site Name</a>. All Rights Reserved.
        </p>
        <p>
          Designed by <a href="#">HTML Codex</a> Distributed by <a href="#">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
