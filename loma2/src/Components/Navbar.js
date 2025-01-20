import React from "react";
import "./Navbar.css";
import logoImage from './assets/logo.png'; // Ensure this is the correct path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="logo">
        <img src={logoImage} alt="Loma HD" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart">📷</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      {/* <li><a href="#location">Location</a></li> */}
      {/* Add the Login Link here */}
      {/* <div className="login-link">
        <a href="#login">Login</a>
      </div> */}
    </nav>
  );
};

export default Navbar;
