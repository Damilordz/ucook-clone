// Import the React library and the Feature component
import React from "react";
import Feature from "./Feature";

// Define an array of feature details
const featureDetails = [
 {
   key: 1,
   title: "1. You choose",
   content:
     "Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time",
   img: require("../assests/images/feature-images/choose.png"),
   alt: "You choose",
 },
 {
   key: 2,
   title: "2. We deliver",
   content:
     "Get a weekly delivery of perfectly portioned fresh produce, shipped in an insulated cold box",
   img: require("../assests/images/feature-images/deliver.png"),
   alt: "We deliver",
 },
 {
   key: 3,
   title: "3. You cook",
   content:
     "Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste",
   img: require("../assests/images/feature-images/cook.png"),
   alt: "You cook",
 },
];

// Define a functional component called FeatureSection
function FeatureSection() {
 // Render the component's JSX
 return (
   <section className="feature-section">
     {/* Render a heading */}
     <h3>How does it work?</h3>

     {/* Render a container for the feature components */}
     <div className="feature-wrap">
       {/* Map over the featureDetails array and render a Feature component for each item */}
       {featureDetails.map((detail) => {
         return (
           <Feature
             key={detail.key}
             title={detail.title}
             content={detail.content}
             imagePath={detail.img}
             alt={detail.alt}
             class="feature"
             img="feature-img"
           />
         );
       })}
     </div>

     {/* Render a paragraph with a link to the FAQ */}
     <p className="faq">
       Got more Questions? - check out our{" "}
       <a href="https://www.ucook.co.za/meal-kit/plans#plans-faq">FAQ'S</a>
     </p>
   </section>
 );
}

// Export the FeatureSection component as the default export
export default FeatureSection;