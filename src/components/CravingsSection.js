// Import the React library and other required components
import React from "react";
import CravingsSlide from "../CravingsSlide";
import SlideCard from "./Card";

// Define a functional component called CravingsSection
function CravingsSection() {
  // Render the component's JSX
  return (
    <section className="cravings-section">
      {/* Render a heading */}
      <h4>Whatever you're craving, we've got you covered</h4>

      {/* Render a container for the cravings carousels */}
      <div className="cravings-carousels">
        {/* Render a left carousel control button */}
        <div className="carousel-controls">
          <button>
            <i className="fa-solid fa-chevron-left fa-xl"></i>
          </button>
        </div>

        {/* Render the cravings carousel */}
        <div className="cravings-carousel">
          {/* Map over the CravingsSlide data and render a SlideCard component for each item */}
          {CravingsSlide.map((slide) => {
            return (
              <SlideCard
                key={slide.key}
                img={slide.img}
                title={slide.title}
                content={slide.content}
                link={slide.link}
                link_name={slide.link_name}
              />
            );
          })}
        </div>

        {/* Render a right carousel control button */}
        <div className="carousel-controls">
          <button>
            <i className="fa-solid fa-chevron-right fa-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

// Export the CravingsSection component as the default export
export default CravingsSection;
