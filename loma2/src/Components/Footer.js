import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title">Loma HD</h2>
          <p>
            Loma HD is your trusted destination for all photography and video
            equipment needs. We offer a wide range of high-quality cameras,
            lenses, and accessories to bring your creative vision to life.
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+252633111128">+252 63-3111128</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:loma.hd@gmail.com">loma.hd@gmail.com</a>
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section - Follow Us */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
