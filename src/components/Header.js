// Import the necessary components and modules
import React from "react";
import NavLinks from "../NavLinks";
import ImageComponent from "./ImageComponent";
import NavDropdown from "./NavDropdown";

// Define the Header component as a functional component
function Header() {
 // Define the dropdown items for the "Meal Kits" dropdown
 const mealKitsDropdownItems = [
   { label: "Meal kit menu", link: "#" },
   { label: "Plans and Pricing", link: "#" },
   { label: "Our Suppliers", link: "#" },
 ];

 // Define the dropdown items for the "Wine" dropdown
 const wineDropdownItems = [
   { label: "Shop Wine", link: "#" },
   { label: "Featured wine farms", link: "#" },
 ];

 // Define the dropdown items for the "About Ucook" dropdown
 const aboutDropdownItems = [
   { label: "Meal Kits", link: "#" },
   { label: "Craft Meals", link: "#" },
   { label: "Kids Meals", link: "#" },
   { label: "Wine", link: "#" },
   { label: "About Ucook", link: "#" },
 ];

 // Render the header component
 return (
   <header>
     {/* Render a nav bar with a hamburger menu icon */}
     <div className="nav-bar">
       <i className="fa-solid fa-bars fa-lg"></i>
     </div>

     {/* Render the logo */}
     <div className="logo">
       <a href="https://www.ucook.co.za/">
         <ImageComponent
           imagePath={require("../assests/images/logo.png")}
           alt="ucook logo"
         />
       </a>
     </div>

     {/* Render the navigation menu */}
     <nav>
       <div className="nav-container">
         {/* Render the "Meal Kits" dropdown */}
         <NavDropdown dropdownItems={mealKitsDropdownItems}>
           <a href={NavLinks.mealKits}>Meal Kits</a>
         </NavDropdown>

         {/* Render the "Frozen" link */}
         <div className="nav-item">
           <a href={NavLinks.frozen}>Frozen</a>
         </div>

         {/* Render the "Wine" dropdown */}
         <NavDropdown dropdownItems={wineDropdownItems}>
           <a href={NavLinks.wine}>Wine</a>
         </NavDropdown>

         {/* Render the "Market" link */}
         <div className="nav-item">
           <a href={NavLinks.market}>Market</a>
         </div>

         {/* Render the "Weekend Boxes" link */}
         <div className="nav-item">
           <a href={NavLinks.weekendBoxes}>Weekend Boxes</a>
         </div>

         {/* Render the "About Ucook" dropdown */}
         <NavDropdown dropdownItems={aboutDropdownItems}>
           <a href={NavLinks.about}>About Ucook</a>
         </NavDropdown>

         {/* Render the "Partner with us" link */}
         <div className="nav-item">
           <a href={NavLinks.partner}>Partner with us</a>
         </div>

         {/* Render the "Gift Cards" link */}
         <div className="nav-item">
           <a href={NavLinks.gift}>Gift Cards</a>
         </div>

         {/* Render the "Mothers Day Box" link */}
         <div className="nav-item nav-item-last">
           <a href={NavLinks.mothersDay}>Mothers Day Box</a>
         </div>
       </div>
     </nav>

     {/* Render the header buttons (Login, Sign Up, and Shopping Cart) */}
     <div className="header-buttons">
       <div className="auth-buttons">
         <a href={NavLinks.login} className="btn btn-login">
           Login
         </a>
         <a href={NavLinks.signup} className="btn btn-signup">
           Sign Up
         </a>
       </div>
       <div className="shopping-cart">
         <a href="https://www.ucook.co.za/">
           <i className="fa-solid fa-cart-shopping fa-lg"></i>
         </a>
         <a href="https://www.ucook.co.za/" className="btn cart-btn">
           0
         </a>
       </div>
     </div>
   </header>
 );
}

// Export the Header component
export default Header;