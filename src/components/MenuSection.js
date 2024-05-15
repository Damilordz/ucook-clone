// Import the necessary dependencies
import React from "react";
import MenuCarousel from "./MenuCarousel";

// Define a functional component called MenuSection
function MenuSection() {
 // Render the component's JSX
 return (
   <section className="menu-section">
     {/* Render a heading for the menu section */}
     <h3>On the menu this week</h3>

     {/* Render the MenuCarousel component */}
     <MenuCarousel />
   </section>
 );
}

// Export the MenuSection component as the default export
export default MenuSection;