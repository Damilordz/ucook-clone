// Import the necessary dependencies
import React, { useState } from "react";
import HeroSlides from "../HeroSlides";

// Define the HeroCarousel component as a functional component
function HeroCarousel() {
 // Declare a state variable 'currentSlide' and its updater function 'setCurrentSlide'
 const [currentSlide, setCurrentSlide] = useState(0);

 // Define a function to handle the previous slide
 const handlePrevSlide = () => {
   setCurrentSlide((prevSlide) =>
     prevSlide === 0 ? HeroSlides.length - 1 : prevSlide - 1
   );
 };

 // Define a function to handle the next slide
 const handleNextSlide = () => {
   setCurrentSlide((prevSlide) =>
     prevSlide === HeroSlides.length - 1 ? 0 : prevSlide + 1
   );
 };

 // Render the hero carousel section
 return (
   <section className="hero-carousel">
     {/* Render the left carousel control button */}
     <div className="carousel-controls control-position-l">
       <button onClick={handlePrevSlide}>
         <i className="fa-solid fa-chevron-left fa-xl"></i>
       </button>
     </div>

     {/* Render the hero carousel slides */}
     <div className="hero-carousel-slides">
       <div
         key={currentSlide}
         className="hero-carousel-slide"
         id={HeroSlides[currentSlide].id}
       >
         {/* Render the slide information (title, content, and button) */}
         <div className="h-carousel-info">
           <h1>{HeroSlides[currentSlide].title}</h1>
           <p>{HeroSlides[currentSlide].content}</p>
           <a
             href={HeroSlides[currentSlide].link}
             className={HeroSlides[currentSlide].classname}
           >
             {HeroSlides[currentSlide].btn}
           </a>
         </div>

         {/* Render the slide image */}
         <div className="h-carousel-img">
           <img
             src={HeroSlides[currentSlide].img}
             alt={HeroSlides[currentSlide].alt}
           />
         </div>
       </div>
     </div>

     {/* Render the right carousel control button */}
     <div className="carousel-controls control-position-r">
       <button onClick={handleNextSlide}>
         <i className="fa-solid fa-chevron-right fa-xl"></i>
       </button>
     </div>
   </section>
 );
}

// Export the HeroCarousel component
export default HeroCarousel;