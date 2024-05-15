import React from "react";
import ImageComponent from "./ImageComponent";

function HeroSection() {
 return (
   <section className="hero">
     {/* Container for the text content */}
     <div className="hero-text">
       <h1>Dinner, made easy</h1>
       <h3>Fresh ingredients from the farm</h3>
       <p>
         We deliver easy to follow and delicious recipes, and perfectly
         pre-portioned fresh ingredients to your door every week.
       </p>
       <div>
         <a
           href="https://www.ucook.co.za/meal-kit/plans"
           alt="UCOOK"
           className="btn hero-btn"
         >
           Select Meals
         </a>
       </div>
     </div>

     {/* Container for the image */}
     <div className="hero-img">
       <ImageComponent imagePath={require("../assests/images/hero-img.webp")} />
     </div>
   </section>
 );
}

export default HeroSection;