// Import the necessary dependencies
import React, { useState } from "react";

// Define the NavDropdown component as a functional component
const NavDropdown = ({ children, dropdownItems }) => {
 // Declare a state variable 'showDropdown' and its updater function 'setShowDropdown'
 const [showDropdown, setShowDropdown] = useState(false);

 // Define a function to handle mouse enter event
 const handleMouseEnter = () => {
   setShowDropdown(true);
 };

 // Define a function to handle mouse leave event
 const handleMouseLeave = () => {
   setShowDropdown(false);
 };

 // Render the component's JSX
 return (
   <div
     className="nav-item"
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
   >
     {/* Render the children */}
     {children}

     {/* Render the dropdown menu if showDropdown is true */}
     {showDropdown && (
       <div className="dropdown">
         {/* Map over the dropdownItems array and render a link for each item */}
         {dropdownItems.map((item, index) => (
           <div key={index}>
             <a href={item.link}>{item.label}</a>
           </div>
         ))}
       </div>
     )}
   </div>
 );
};

// Export the NavDropdown component
export default NavDropdown;