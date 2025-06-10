import React, { useState,userEffect } from "react";
import "./hero.css";
const Hero = () => {
    const {currentImage, setCurrentImage} = useState(0);
    const images = [
        "/images/hero1.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg"
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <section id="home" className="hero">
      <div className="hero_slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero_slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      {/* Optionally, you can add description and link for each image if available */}
      {/* <div className="hero_description">
        <p>{images[currentImage].description}</p>
        <a href={images[currentImage].link} className="details_button">View Details</a>
      </div> */}
      <div className="hero_overlay"></div>
      <div className="hero_content">
        <h1 className="hero_title">Welcome to ABS Construction</h1>
        <p className="hero_subtitle">
          Building the future with excellence and innovation.
        </p>
        <a
          href="#contact"
          className="cta_button"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us
        </a>
      </div>
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`hero_dot ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    
    </section>
  );
};
export default Hero;