import React, { useState, useEffect } from "react";
import "./Testimonials.css";

// Import images directly
import image1 from "./assets/image8.jpg";
import image2 from "./assets/image7.jpg";
import image3 from "./assets/imges 5.jpg";
import image4 from "./assets/image55.jpg";
import image5 from "./assets/images44).jpg";
import image6 from "./assets/images99.jpg";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", text: "The best camera store I've ever visited!", image: image1 },
    { name: "Jane Smith", text: "Amazing service and top-quality products!", image: image2 },
    { name: "Michael Brown", text: "Highly recommend for all photography enthusiasts!", image: image3 },
    { name: "Emily Davis", text: "They have everything you need and more!", image: image4 },
    { name: "Chris Wilson", text: "Friendly staff and great pricing!", image: image5 },
    { name: "Sarah Johnson", text: "Fantastic experience every time I visit!", image: image6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <p className="testimonial-name">- {testimonials[currentIndex].name}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="prev" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
