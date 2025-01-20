import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>You deserve our respect at any time and in any place</p>

      <div className="contact-container">
        {/* Form Section */}
        <div className="form-container">
          <h3>Get in Touch</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number (optional)" />
            <textarea placeholder="Write your message here..." required></textarea>
            <select required>
              <option value="" disabled selected>
                Select a Topic
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Map Section */}
        <div
      className="location-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          padding: "100px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(52, 34, 208, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#007BFF" }}>Our Location</h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Click the button below to view our location on Google Maps:
        </p>
        <a
          href="https://maps.app.goo.gl/3PH4CbKZcUzgTjqV6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          View on Google Maps
        </a>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;
