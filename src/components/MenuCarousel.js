// Import the necessary dependencies
import React, { useState } from "react";
import "../css/carousel.css";
import slides from "../MenuSlide";

// Define a functional component called MenuCarousel
const MenuCarousel = () => {
 // Declare a state variable 'currentSlide' and its updater function 'setCurrentSlide'
 const [currentSlide, setCurrentSlide] = useState(0);

 // Define a function to handle the previous slide
 const handlePrevSlide = () => {
   setCurrentSlide((prevSlide) =>
     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
   );
 };

 // Define a function to handle the next slide
 const handleNextSlide = () => {
   setCurrentSlide((prevSlide) =>
     prevSlide === slides.length - 1 ? 0 : prevSlide + 1
   );
 };

 // Render the component's JSX
 return (
   <div className="carousel">
     {/* Render the left carousel control button */}
     <div className="carousel-controls">
       <button onClick={handlePrevSlide}>
         <i className="fa-solid fa-chevron-left fa-xl"></i>
       </button>
     </div>

     {/* Render the carousel wrap section */}
     <div className="carousel-wrap">
       {/* Render the carousel header with slide titles */}
       <div className="carousel-header">
         {slides.map((slide, index) => (
           <div
             key={index}
             className={`carousel-title ${
               index === currentSlide ? "active" : ""
             }`}
           >
             {slide.title}
           </div>
         ))}
       </div>

       {/* Render the carousel slides with images and captions */}
       <div className="carousel-slides">
         {slides[currentSlide].images.map((image, index) => (
           <div key={index} className="carousel-slide">
             <img src={image.src} alt={image.caption} />
             <p>{image.caption}</p>
           </div>
         ))}
       </div>
     </div>

     {/* Render the right carousel control button */}
     <div className="carousel-controls">
       <button onClick={handleNextSlide}>
         <i className="fa-solid fa-chevron-right fa-xl"></i>
       </button>
     </div>
   </div>
 );
};

// Export the MenuCarousel component
export default MenuCarousel;